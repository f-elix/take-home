import { requireUser } from '$lib/server/requireUser';

export const load = async () => {
	const user = await requireUser();
	return {
		user
	};
};
