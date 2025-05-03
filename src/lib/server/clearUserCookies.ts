import { baseCookieOptions, COOKIE_ACCESS_TOKEN } from '$lib/constants';
import { getRequestEvent } from '$app/server';

export const clearUserCookies = () => {
	const { cookies } = getRequestEvent();
	cookies.delete(COOKIE_ACCESS_TOKEN, baseCookieOptions);
};
