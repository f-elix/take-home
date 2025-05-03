import { clearUserCookies } from '$lib/server/clearUserCookies';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async () => {
		clearUserCookies();
		redirect(303, '/login');
	}
};
