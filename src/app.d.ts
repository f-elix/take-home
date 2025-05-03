// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			user?: {
				sub: string;
				email: string;
				name: string;
				given_name: string;
				family_name: string;
				picture: string;
				nickname: string;
				updated_at: string;
				created_at: string;
				email_verified: boolean;
			};
			profile?: {
				id: string;
				name: string;
				username: string;
				hireDate: string;
				jobTitle: string;
				nbOfPosts: number;
				location: string;
			};
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
