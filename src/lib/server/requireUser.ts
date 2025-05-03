import { getRequestEvent } from '$app/server';
import { clearUserCookies } from '$lib/server/clearUserCookies';
import { getUserFromCookies } from '$lib/server/getUserFromCookies';
import { error, redirect } from '@sveltejs/kit';

export const requireUser = async () => {
	const userData = await getUserFromCookies();
	if (userData?.user) {
		return userData;
	}
	// If not user found, clear cookies and redirect to login
	clearUserCookies();
	const { url, request } = getRequestEvent();
	if (request.method === 'GET') {
		redirect(303, `/login?redirectTo=${url.pathname ?? '/'}`);
	} else {
		// If its not a GET request, return 401
		error(401, 'Unauthorized');
	}
};
