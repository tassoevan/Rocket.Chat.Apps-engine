import { IUIKitErrorInteraction, IUIKitInteraction, IUIKitSurface } from '../../definition/uikit';
import { Omit } from '../../lib/utils';
import { IToastMessagePayload } from '../ui/IToastMessagePaylaod';
import { IUIKitContextualBarViewParam, IUIKitModalViewParam } from '../uikit/UIKitInteractionResponder';
import { IUser } from '../users';

export type IUIKitInteractionParam = Omit<IUIKitInteraction, 'appId' | 'type'>;
export type IUIKitErrorInteractionParam = Omit<IUIKitErrorInteraction, 'type' | 'appId' | 'triggerId'>;

export type IUIKitSurfaceViewParam = Omit<IUIKitSurface, 'appId' | 'id'> & Partial<Pick<IUIKitSurface, 'id'>>;

export interface IUIController {
    /**
     * @deprecated please prefer the `openSurfaceView` method
     */
    openModalView(view: IUIKitModalViewParam, context: IUIKitInteractionParam, user: IUser): Promise<void>;
    /**
     * @deprecated please prefer the `updateSurfaceView` method
     */
    updateModalView(view: IUIKitModalViewParam, context: IUIKitInteractionParam, user: IUser): Promise<void>;
    /**
     * @deprecated please prefer the `openSurfaceView` method
     */
    openContextualBarView(view: IUIKitContextualBarViewParam, context: IUIKitInteractionParam, user: IUser): Promise<void>;
    /**
     * @deprecated please prefer the `updateSurfaceView` method
     */
    updateContextualBarView(view: IUIKitContextualBarViewParam, context: IUIKitInteractionParam, user: IUser): Promise<void>;
    setViewError(errorInteraction: IUIKitErrorInteractionParam, context: IUIKitInteractionParam, user: IUser): Promise<void>;
    openSurfaceView(view: IUIKitSurfaceViewParam, context: IUIKitInteractionParam, user: IUser): Promise<void>;
    updateSurfaceView(view: IUIKitSurfaceViewParam, context: IUIKitInteractionParam, user: IUser): Promise<void>;
    dispatchToastMessage(toast: IToastMessagePayload, context: IUIKitInteractionParam, user: IUser): Promise<void>;
}
