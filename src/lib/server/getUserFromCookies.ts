import { COOKIE_ACCESS_TOKEN } from '$lib/constants';
import { getRequestEvent } from '$app/server';
import { PUBLIC_AUTH0_URL } from '$env/static/public';
import { validateJwt } from '$lib/server/validate-jwt';

export const getUserFromCookies = async () => {
	try {
		const { cookies } = getRequestEvent();
		const token = cookies.get(COOKIE_ACCESS_TOKEN);
		if (!token) {
			return null;
		}
		const tokenData = await validateJwt(token);
		if (!tokenData) {
			return null;
		}
		const user = await fetch(`${PUBLIC_AUTH0_URL}/userinfo`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then((res) => res.json());
		// Make sure the user is the same as the token (un IDOR est si vite arrivé)
		if (user.sub !== tokenData.sub) {
			return null;
		}
		return { user, accessToken: token };
	} catch (error) {
		console.error(error);
		return null;
	}
};
