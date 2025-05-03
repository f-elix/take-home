export type User = {
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

export type Profile = {
	id: string;
	name: string;
	username: string;
	hireDate: string;
	jobTitle: string;
	nbOfPosts: number;
	location: string;
};
