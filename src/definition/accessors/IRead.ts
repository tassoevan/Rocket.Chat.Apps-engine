import { ICloudWorkspaceRead } from './ICloudWorkspaceRead';
import { IEnvironmentRead } from './IEnvironmentRead';
import { ILivechatRead } from './ILivechatRead';
import { IMessageRead } from './IMessageRead';
import { INotifier } from './INotifier';
import { IOAuthAppsReader } from './IOAuthAppsReader';
import { IPersistenceRead } from './IPersistenceRead';
import { IRoleRead } from './IRoleRead';
import { IRoomRead } from './IRoomRead';
import { IThreadRead } from './IThreadRead';
import { IUploadRead } from './IUploadRead';
import { IUserRead } from './IUserRead';
import type { IVideoConferenceRead } from './IVideoConferenceRead';

/**
 * The IRead accessor provides methods for accessing the
 * Rocket.Chat's environment in a read-only-fashion.
 * It is safe to be injected in multiple places, idempotent and extensible
 */
export interface IRead {
    /** Gets the IEnvironmentRead instance, contains settings and environmental variables. */
    getEnvironmentReader(): IEnvironmentRead;

    /** Gets the IThreadRead instance */

    getThreadReader(): IThreadRead;

    /** Gets the IMessageRead instance. */
    getMessageReader(): IMessageRead;

    /** Gets the IPersistenceRead instance. */
    getPersistenceReader(): IPersistenceRead;

    /** Gets the IRoomRead instance. */
    getRoomReader(): IRoomRead;

    /** Gets the IUserRead instance. */
    getUserReader(): IUserRead;

    /** Gets the INotifier for notifying users/rooms. */
    getNotifier(): INotifier;

    getLivechatReader(): ILivechatRead;
    getUploadReader(): IUploadRead;
    getCloudWorkspaceReader(): ICloudWorkspaceRead;

    getVideoConferenceReader(): IVideoConferenceRead;

    getOAuthAppsReader(): IOAuthAppsReader;

    getRoleReader(): IRoleRead;
}
