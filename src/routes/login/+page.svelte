<script lang="ts">
	import {
		PUBLIC_AUTH0_URL,
		PUBLIC_AUTH0_CLIENT_ID,
		PUBLIC_AUTH0_CALLBACK_URL,
		PUBLIC_AUTH0_TOKEN_AUDIENCE
	} from '$env/static/public';
</script>

<section class="grid size-full place-items-center">
	<form action="{PUBLIC_AUTH0_URL}/authorize">
		<input type="hidden" name="response_type" value="code" />
		<input type="hidden" name="client_id" value={PUBLIC_AUTH0_CLIENT_ID} />
		<input type="hidden" name="redirect_uri" value={PUBLIC_AUTH0_CALLBACK_URL} />
		<input type="hidden" name="scope" value="openid profile name email" />
		<input type="hidden" name="audience" value={PUBLIC_AUTH0_TOKEN_AUDIENCE} />
		<button class="rounded-full bg-gray-100 px-6 py-2 text-xl font-bold text-gray-900">Login</button
		>
	</form>
</section>
