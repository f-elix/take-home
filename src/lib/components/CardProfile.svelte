<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		profilePicture,
		name,
		username,
		location = 'Unknown',
		jobTitle = 'Unknown',
		hireDate = 'Unknown',
		nbOfPosts = 0,
		buttons
	}: {
		profilePicture: Maybe<string>;
		name: Maybe<string>;
		username: Maybe<string>;
		location: Maybe<string>;
		jobTitle: Maybe<string>;
		hireDate: Maybe<string>;
		nbOfPosts: Maybe<number>;
		buttons: Snippet;
	} = $props();

	const userInfos = [
		{ label: 'Location', value: location },
		{ label: 'Job title', value: jobTitle },
		{ label: 'Hire date', value: hireDate },
		{ label: 'Number of posts', value: nbOfPosts }
	];
</script>

<article class="@container flex flex-col gap-6 rounded-lg border border-gray-200 p-6">
	<div class="flex flex-col items-center justify-center gap-10 @sm:flex-row">
		<div class="size-16 shrink-0 overflow-hidden rounded-full bg-gray-200">
			{#if profilePicture}
				<img src={profilePicture} alt="" class="size-full object-cover" />
			{/if}
		</div>
		{#if name || username}
			<p class="flex flex-col items-center text-center">
				{#if name}
					<span class="text-lg leading-5 font-semibold">{name}</span>
				{/if}
				{#if username}
					<span class="text-sm text-gray-300">@{username}</span>
				{/if}
			</p>
		{/if}
	</div>
	<dl class="flex flex-col items-start gap-6 @sm:grid @sm:grid-cols-2">
		{#each userInfos as { label, value }}
			<div class="flex flex-col @sm:items-center @sm:text-center">
				<dd class="text-sm text-gray-300">{label}</dd>
				<dt class="text-lg font-semibold">{value}</dt>
			</div>
		{/each}
	</dl>
	{#if buttons}
		<div class="grid gap-4 @sm:grid-cols-2">
			{@render buttons()}
		</div>
	{/if}
</article>
