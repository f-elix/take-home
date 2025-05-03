import { API_URL } from '$env/static/private';
import type { Profile } from '$lib/types';

export const getUserFriends = async (accessToken: string) => {
	try {
		const res = await fetch(`${API_URL}/friends`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});
		const data = await res.json();
		if (!res.ok) {
			console.error(data.message ?? 'Unknown error');
			return [];
		}
		return data as Profile[];
	} catch (error) {
		console.error(error);
		return [];
	}
};
