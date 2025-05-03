<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';

	let { children } = $props();

	const user = page.data.user;
</script>

<div class="flex h-screen flex-col">
	<header
		class="flex items-center justify-between gap-4 border-b border-gray-50/20 bg-gray-800 p-4"
	>
		<h1 class="text-xl font-bold">Felix Guerin - Take home</h1>
		{#if user}
			<form action="/api/auth/logout" method="POST">
				<button>Logout</button>
			</form>
		{/if}
	</header>
	<main class="grow p-4">
		{@render children?.()}
	</main>
</div>
