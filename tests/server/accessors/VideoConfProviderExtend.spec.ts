// tslint:disable:max-line-length

import { AsyncTest, Expect, Test } from 'alsatian';
import { IVideoConfProvider } from '../../../src/definition/videoConfProviders';

import { VideoConfProviderExtend } from '../../../src/server/accessors';
import { AVideoConfProviderAlreadyExistsError } from '../../../src/server/errors';
import { AppVideoConfProviderManager } from '../../../src/server/managers';

export class VideoConfProviderExtendAccessorTestFixture {
    @Test()
    public basicVideoConfProviderExtend() {
        Expect(() => new VideoConfProviderExtend({} as AppVideoConfProviderManager, 'testing')).not.toThrow();
    }

    @AsyncTest()
    public async provideProviderToVideoConfProviderExtend(): Promise<void> {
        let providerAdded: boolean = false;
        const mockManager: AppVideoConfProviderManager = {
            addProvider(appId: string, provider: IVideoConfProvider) {
                if (providerAdded) {
                    throw new AVideoConfProviderAlreadyExistsError();
                }

                providerAdded = true;
            },
        } as AppVideoConfProviderManager;

        const se = new VideoConfProviderExtend(mockManager, 'testing');

        const mockProvider: IVideoConfProvider = {
            async generateUrl(): Promise<string> {
                return '';
            },
            async customizeUrl(): Promise<string> {
                return '';
            },
        } as IVideoConfProvider;

        await Expect(async () => await se.provideVideoConfProvider(mockProvider)).not.toThrowAsync();
        Expect(providerAdded).toBe(true);
        await Expect(async () => await se.provideVideoConfProvider(mockProvider)).toThrowErrorAsync(AVideoConfProviderAlreadyExistsError, 'A video conference provider is already registered in the system.');
    }
}
