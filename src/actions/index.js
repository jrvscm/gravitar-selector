const SHOW_AVATAR_SELECTOR = 'SHOW_AVATAR_SELECTOR'
export const showAvatarSelector = () => ({
	type:SHOW_AVATAR_SELECTOR
})

const HIDE_AVATAR_SELECTOR = 'HIDE_AVATAR_SELECTOR'
export const hideAvatarSelector = () => ({
	type:HIDE_AVATAR_SELECTOR
})

const UPDATE_CURRENT_AVATAR = 'UPDATE_CURRENT_AVATAR'
export const updateCurrentAvatar = (i) => ({
	type:UPDATE_CURRENT_AVATAR,
	i
})