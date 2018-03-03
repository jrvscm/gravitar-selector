export const SHOW_AVATAR_SELECTOR = 'SHOW_AVATAR_SELECTOR';
export const showAvatarSelector = () => ({
	type:SHOW_AVATAR_SELECTOR
})

export const HIDE_AVATAR_SELECTOR = 'HIDE_AVATAR_SELECTOR';
export const hideAvatarSelector = () => ({
	type:HIDE_AVATAR_SELECTOR
})

export const UPDATE_CURRENT_AVATAR = 'UPDATE_CURRENT_AVATAR';
export const updateCurrentAvatar = (i) => ({
	type:UPDATE_CURRENT_AVATAR,
	i
})

export const SET_LOADING = 'SET_LOADING';
export const setLoading = () => ({
	type:SET_LOADING
})

export const STOP_LOADING = 'STOP_LOADING';
export const stopLoading = () => ({
	type:STOP_LOADING
})

export const FIRST_LOAD = 'FIRST_LOAD';
export const firstLoad = () => ({
	type:FIRST_LOAD
})