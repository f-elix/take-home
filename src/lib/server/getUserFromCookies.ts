import { COOKIE_ACCESS_TOKEN } from '$lib/constants';
import { getRequestEvent } from '$app/server';
import { PUBLIC_AUTH0_URL } from '$env/static/public';

export const getUserFromCookies = async () => {
	try {
		const { cookies } = getRequestEvent();
		const token = cookies.get(COOKIE_ACCESS_TOKEN);
		if (!token) {
			return null;
		}
		const user = await fetch(`${PUBLIC_AUTH0_URL}/userinfo`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		}).then((res) => res.json());
		return user;
	} catch (error) {
		console.error(error);
		return null;
	}
};
