import GravatarReducer from './GravatarReducer';
import {  
showAvatarSelector,
hideAvatarSelector,
updateCurrentAvatar,
setLoading,
stopLoading,
firstLoad } from '../actions';

describe('GravatarReducer', () => {
    let state = {
        loading: false, 
        currentAvatar: { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
        gravatars: [
            { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
            { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
            { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
            { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
            { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
            { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
        ],
        hidden:true,
        firstLoad: true
    }
    
   it('Should set the initial state when nothing is passed in', () => {
        const state = GravatarReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual({
            gravatars: [
                { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
                { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
                { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
                { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
                { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
                { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
            ],
            currentAvatar: { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
            hidden: true,
            loading: false,
            firstLoad: true
        });
    })

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = GravatarReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('hideAvatarSelector', () => {
        it('should update hidden to false', () => {
            let state;
            state = GravatarReducer(state, hideAvatarSelector());
            expect(state).toEqual({
            gravatars: [
                { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
                { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
                { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
                { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
                { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
                { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
            ],
            currentAvatar: { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
            hidden: true,
            loading: false,
            firstLoad: true
            });
        });
    });

    describe('showAvatarSelector', () => {
        it('should update hidden to true', () => {
            let state;
            state = GravatarReducer(state, showAvatarSelector());
            expect(state).toEqual({
            gravatars: [
                { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
                { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
                { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
                { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
                { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
                { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
            ],
            currentAvatar: { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
            hidden: false,
            loading: false,
            firstLoad: true
            });
        });            
    });

    describe('updateCurrentAvatar', () => {
        it('should update to the current avatar', () => {
            let state;
            state = GravatarReducer(state, updateCurrentAvatar(3));
            expect(state).toEqual({
            gravatars: [
                { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
                { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
                { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
                { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
                { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
                { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
            ],
            currentAvatar: { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
            hidden: true,
            loading: false,
            firstLoad: true
            });
        });            
    });

    describe('setLoading', () => {
        it('should set loading to true', () => {
            let state;
            state = GravatarReducer(state, setLoading());
            expect(state).toEqual({
            gravatars: [
                { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
                { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
                { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
                { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
                { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
                { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
            ],
            currentAvatar: { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
            hidden: true,
            loading: true,
            firstLoad: true
            });
        });            
    });

    describe('stopLoading', () => {
        it('should set loading to true', () => {
            let state;
            state = GravatarReducer(state, stopLoading());
            expect(state).toEqual({
            gravatars: [
                { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
                { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
                { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
                { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
                { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
                { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
            ],
            currentAvatar: { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
            hidden: true,
            loading: false,
            firstLoad: true
            });
        });            
    }); 

    describe('firstLoad', () => {
        it('should set firstLoad to false', () => {
            let state;
            state = GravatarReducer(state, firstLoad());
            expect(state).toEqual({
            gravatars: [
                { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
                { "src": "avatar2.png", "label": "Avatar 2", "id": 2 },
                { "src": "avatar3.png", "label": "Avatar 3", "id": 3 },
                { "src": "avatar4.png", "label": "Avatar 4", "id": 4 },
                { "src": "avatar5.png", "label": "Avatar 5", "id": 5 },
                { "src": "avatar6.png", "label": "Avatar 6", "id": 6 }
            ],
            currentAvatar: { "src": "avatar1.png", "label": "Avatar 1", "id": 1 },
            hidden: true,
            loading: false,
            firstLoad: false
            });
        });            
    });
})

