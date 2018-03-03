import {
SHOW_AVATAR_SELECTOR,  
showAvatarSelector,
HIDE_AVATAR_SELECTOR,
hideAvatarSelector,
UPDATE_CURRENT_AVATAR,
updateCurrentAvatar,
SET_LOADING,
setLoading,
STOP_LOADING,
stopLoading,
FIRST_LOAD,
firstLoad
} from './index';

describe('updateCurrentAvatar', () => {
    it('Should return the action', () => {
        const i = 1;
        const action = updateCurrentAvatar(i);
        expect(action.type).toEqual(UPDATE_CURRENT_AVATAR);
        expect(action.i).toEqual(i);
    });
});

describe('showAvatarSelector', () => {
    it('Should return the action', () => {
        const action = showAvatarSelector();
        expect(action.type).toEqual(SHOW_AVATAR_SELECTOR);
    });
});

describe('hideAvatarSelector', () => {
    it('Should return the action', () => {
        const action = hideAvatarSelector();
        expect(action.type).toEqual(HIDE_AVATAR_SELECTOR);
    });
});

describe('setLoading', () => {
    it('Should return the action', () => {
        const action = setLoading();
        expect(action.type).toEqual(SET_LOADING);
    });
});

describe('stopLoading', () => {
    it('Should return the action', () => {
        const action = stopLoading();
        expect(action.type).toEqual(STOP_LOADING);
    });
});

describe('firstLoad', () => {
    it('Should return the action', () => {
        const action = firstLoad();
        expect(action.type).toEqual(FIRST_LOAD);
    });
});