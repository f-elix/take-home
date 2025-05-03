import { AUTH0_CLIENT_SECRET } from '$env/static/private';
import {
	PUBLIC_AUTH0_CALLBACK_URL,
	PUBLIC_AUTH0_CLIENT_ID,
	PUBLIC_AUTH0_URL
} from '$env/static/public';
import { baseCookieOptions, COOKIE_ACCESS_TOKEN } from '$lib/constants';
import { validateJwt } from '$lib/server/validate-jwt';

export const GET = async ({ url, cookies }) => {
	const code = url.searchParams.get('code');
	if (!code) {
		return new Response('No code found', { status: 400 });
	}
	const body = new URLSearchParams({
		grant_type: 'authorization_code',
		client_id: PUBLIC_AUTH0_CLIENT_ID,
		client_secret: AUTH0_CLIENT_SECRET,
		code,
		redirect_uri: PUBLIC_AUTH0_CALLBACK_URL
	});
	try {
		// Get tokens
		const data = await fetch(`${PUBLIC_AUTH0_URL}/oauth/token`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			body
		}).then((res) => res.json());
		if (data.error) {
			return new Response(data.error_description || data.error || 'Unknown auth error', {
				status: 400
			});
		}
		const accessToken = data.access_token;
		const idToken = data.id_token;
		if (!accessToken || !idToken) {
			return new Response('No access token or id token found', { status: 400 });
		}
		// Validate tokens
		await validateJwt(idToken);
		// Store access token in cookies
		cookies.set(COOKIE_ACCESS_TOKEN, accessToken, {
			...baseCookieOptions,
			maxAge: data.expires_in ?? 86400 // 24 hours
		});
		// Redirect to home page
		return new Response(null, {
			status: 303,
			headers: {
				location: '/'
			}
		});
	} catch (e) {
		console.error(e);
		return new Response('Error while authenticating', { status: 500 });
	}
};
