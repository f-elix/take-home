import { API_URL } from '$env/static/private';

export const getUserProfile = async (userId: string, accessToken: string) => {
	try {
		const res = await fetch(`${API_URL}/profile/${userId}`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		});
		const data = await res.json();
		if (!res.ok) {
			console.error(data.message ?? 'Unknown error');
			return null;
		}
		return data;
	} catch (error) {
		console.error(error);
		return null;
	}
};
