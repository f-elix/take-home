<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();

	const user = page.data.user;
</script>

<div class="flex h-dvh flex-col">
	<header
		class="flex shrink-0 items-center justify-between gap-4 border-b border-gray-700 bg-gray-800 p-4"
	>
		<a href="/" class="font-medium">Felix Guerin - Take home</a>
		{#if user}
			<form action="/api/auth/logout" method="POST">
				<button>Logout</button>
			</form>
		{/if}
	</header>
	<main class="flex min-h-0 grow flex-col overflow-y-auto md:overflow-visible">
		{@render children?.()}
	</main>
</div>
