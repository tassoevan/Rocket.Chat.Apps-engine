import { Expect, Setup, SetupFixture, Test } from 'alsatian';

import { AppStatus } from '../../../src/definition/AppStatus';
import { AppMethod } from '../../../src/definition/metadata';
import { AppAccessors } from '../../../src/server/accessors';
import { AppManager } from '../../../src/server/AppManager';
import { AppBridges } from '../../../src/server/bridges';
import { AppConsole } from '../../../src/server/logging';
import { AppAccessorManager, AppApiManager, AppExternalComponentManager, AppSchedulerManager, AppSettingsManager, AppSlashCommandManager, AppVideoConfProviderManager } from '../../../src/server/managers';
import { UIActionButtonManager } from '../../../src/server/managers/UIActionButtonManager';
import { ProxiedApp } from '../../../src/server/ProxiedApp';
import { AppsEngineRuntime } from '../../../src/server/runtime/AppsEngineRuntime';
import { AppLogStorage } from '../../../src/server/storage';
import { TestsAppBridges } from '../../test-data/bridges/appBridges';
import { TestsAppLogStorage } from '../../test-data/storage/logStorage';
import { TestData } from '../../test-data/utilities';

export class AppAccessorsTestFixture {
    public static doThrow: boolean = false;
    private mockBridges: TestsAppBridges;
    private mockApp: ProxiedApp;
    private mockAccessors: AppAccessorManager;
    private mockManager: AppManager;
    private mockApiManager: AppApiManager;

    @SetupFixture
    public setupFixture() {
        this.mockBridges = new TestsAppBridges();

        this.mockApp = {
            getRuntime() {
                return {} as AppsEngineRuntime;
            },
            getID() {
                return 'testing';
            },
            getStatus() {
                return AppStatus.AUTO_ENABLED;
            },
            hasMethod(method: AppMethod): boolean {
                return true;
            },
            setupLogger(method: AppMethod): AppConsole {
                return new AppConsole(method);
            },
        } as ProxiedApp;

        const bri = this.mockBridges;
        const app = this.mockApp;
        this.mockManager = {
            getBridges(): AppBridges {
                return bri;
            },
            getCommandManager() {
                return {} as AppSlashCommandManager;
            },
            getExternalComponentManager() {
                return {} as AppExternalComponentManager;
            },
            getOneById(appId: string): ProxiedApp {
                return appId === 'failMePlease' ? undefined : app;
            },
            getLogStorage(): AppLogStorage {
                return new TestsAppLogStorage();
            },
            getSchedulerManager() {
                return {} as AppSchedulerManager;
            },
            getUIActionButtonManager() {
                return {} as UIActionButtonManager;
            },
            getVideoConfProviderManager() {
                return {} as AppVideoConfProviderManager;
            },
            getSettingsManager() {
                return {} as AppSettingsManager;
            },
        } as AppManager;

        this.mockAccessors = new AppAccessorManager(this.mockManager);
        const ac = this.mockAccessors;
        this.mockManager.getAccessorManager = function _getAccessorManager(): AppAccessorManager {
            return ac;
        };

        this.mockApiManager = new AppApiManager(this.mockManager);
        const apiManager = this.mockApiManager;
        this.mockManager.getApiManager = function _getApiManager(): AppApiManager {
            return apiManager;
        };
    }

    @Setup
    public setup() {
        this.mockBridges = new TestsAppBridges();
        const bri = this.mockBridges;
        this.mockManager.getBridges = function _refreshedGetBridges(): AppBridges {
            return bri;
        };

        this.mockApiManager = new AppApiManager(this.mockManager);
        const apiManager = this.mockApiManager;
        this.mockManager.getApiManager = function _refreshedGetApiManager(): AppApiManager {
            return apiManager;
        };
    }

    @Test()
    public testAppAccessor() {
        Expect(() => new AppAccessors({} as AppManager, '')).toThrow();
        Expect(() => new AppAccessors(this.mockManager, 'testing')).not.toThrow();

        const appAccessors = new AppAccessors(this.mockManager, 'testing');

        Expect(appAccessors.environmentReader).toEqual(this.mockAccessors.getEnvironmentRead('testing'));
        Expect(appAccessors.environmentWriter).toEqual(this.mockAccessors.getEnvironmentWrite('testing'));
        Expect(appAccessors.reader).toEqual(this.mockAccessors.getReader('testing'));
        Expect(appAccessors.http).toEqual(this.mockAccessors.getHttp('testing'));
        Expect(appAccessors.providedApiEndpoints).toEqual(this.mockApiManager.listApis('testing'));

        this.mockApiManager.addApi('testing', TestData.getApi('app-accessor-api'));

        Expect(appAccessors.providedApiEndpoints).toEqual(this.mockApiManager.listApis('testing'));
    }
}
