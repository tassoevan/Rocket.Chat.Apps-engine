import { ApiBridge } from './ApiBridge';
import { AppActivationBridge } from './AppActivationBridge';
import { AppDetailChangesBridge } from './AppDetailChangesBridge';
import { CloudWorkspaceBridge } from './CloudWorkspaceBridge';
import { CommandBridge } from './CommandBridge';
import { EnvironmentalVariableBridge } from './EnvironmentalVariableBridge';
import { HttpBridge } from './HttpBridge';
import { IInternalBridge } from './IInternalBridge';
import { IInternalFederationBridge } from './IInternalFederationBridge';
import { IListenerBridge } from './IListenerBridge';
import { LivechatBridge } from './LivechatBridge';
import { MessageBridge } from './MessageBridge';
import { ModerationBridge } from './ModerationBridge';
import { OAuthAppsBridge } from './OAuthAppsBridge';
import { PersistenceBridge } from './PersistenceBridge';
import { RoleBridge } from './RoleBridge';
import { RoomBridge } from './RoomBridge';
import { SchedulerBridge } from './SchedulerBridge';
import { ServerSettingBridge } from './ServerSettingBridge';
import { ThreadBridge } from './ThreadBridge';
import { UiInteractionBridge } from './UiInteractionBridge';
import { UploadBridge } from './UploadBridge';
import { UserBridge } from './UserBridge';
import type { VideoConferenceBridge } from './VideoConferenceBridge';

export type Bridge =
    | CommandBridge
    | ApiBridge
    | AppDetailChangesBridge
    | EnvironmentalVariableBridge
    | HttpBridge
    | IListenerBridge
    | LivechatBridge
    | MessageBridge
    | PersistenceBridge
    | AppActivationBridge
    | RoomBridge
    | IInternalBridge
    | ServerSettingBridge
    | UploadBridge
    | UserBridge
    | UiInteractionBridge
    | SchedulerBridge
    | VideoConferenceBridge
    | OAuthAppsBridge
    | ModerationBridge
    | RoleBridge;

export abstract class AppBridges {
    public abstract getCommandBridge(): CommandBridge;
    public abstract getApiBridge(): ApiBridge;
    public abstract getAppDetailChangesBridge(): AppDetailChangesBridge;
    public abstract getEnvironmentalVariableBridge(): EnvironmentalVariableBridge;
    public abstract getHttpBridge(): HttpBridge;
    public abstract getListenerBridge(): IListenerBridge;
    public abstract getLivechatBridge(): LivechatBridge;
    public abstract getMessageBridge(): MessageBridge;
    public abstract getPersistenceBridge(): PersistenceBridge;
    public abstract getAppActivationBridge(): AppActivationBridge;
    public abstract getRoomBridge(): RoomBridge;
    public abstract getInternalBridge(): IInternalBridge;
    public abstract getInternalFederationBridge(): IInternalFederationBridge;
    public abstract getServerSettingBridge(): ServerSettingBridge;
    public abstract getUploadBridge(): UploadBridge;
    public abstract getUserBridge(): UserBridge;
    public abstract getUiInteractionBridge(): UiInteractionBridge;
    public abstract getSchedulerBridge(): SchedulerBridge;
    public abstract getCloudWorkspaceBridge(): CloudWorkspaceBridge;
    public abstract getVideoConferenceBridge(): VideoConferenceBridge;
    public abstract getOAuthAppsBridge(): OAuthAppsBridge;
    public abstract getModerationBridge(): ModerationBridge;

    public abstract getThreadBridge(): ThreadBridge;

    public abstract getRoleBridge(): RoleBridge;
}
