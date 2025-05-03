// See https://svelte.dev/docs/kit/types#app.d.ts

import type { Profile, User } from '$lib/types';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			user?: User;
			profile?: Profile;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
