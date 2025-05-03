import type { Cookies } from '@sveltejs/kit';

export const COOKIE_ACCESS_TOKEN = 'access_token';

export const baseCookieOptions: Parameters<Cookies['set']>[2] = {
	path: '/',
	httpOnly: true,
	secure: true,
	sameSite: 'lax'
};
