import { getUserProfile } from '$lib/server/getUserProfile';
import { requireUser } from '$lib/server/requireUser';

export const load = async () => {
	const { user, accessToken } = await requireUser();
	const userId = user.sub.split('|')[1];
	const profile = await getUserProfile(userId, accessToken);
	return {
		user,
		profile
	};
};
