<script lang="ts">
	import { page } from '$app/state';

	const user = page.data.user;
	const profile = page.data.profile;
	const profilePicture = user?.picture;
	const name = profile?.name ?? user?.name;
	const username = profile?.username ?? user?.nickname;
	const location = profile?.location ?? 'Unknown';
	const jobTitle = profile?.jobTitle ?? 'Unknown';
	const hireDate = profile?.hireDate ?? 'Unknown';
	const nbOfPosts = profile?.nbOfPosts ?? 0;

	const userInfos = [
		{ label: 'Location', value: location },
		{ label: 'Job title', value: jobTitle },
		{ label: 'Hire date', value: hireDate },
		{ label: 'Number of posts', value: nbOfPosts }
	];
</script>

<article class="flex max-w-96 flex-col gap-6 rounded-lg border border-gray-200 p-6">
	<div class="flex items-center justify-center gap-12">
		<img src={profilePicture} alt="Profile picture" class="size-16 rounded-full object-cover" />
		<p class="flex flex-col items-center text-center">
			<span class="text-lg font-semibold">{name}</span>
			<span class="text-sm text-gray-300">@{username}</span>
		</p>
	</div>
	<div class="grid grid-cols-2 gap-6">
		{#each userInfos as { label, value }}
			<p class="flex flex-col items-center text-center">
				<span class="text-sm text-gray-300">{label}</span>
				<span class="text-lg font-semibold">{value}</span>
			</p>
		{/each}
	</div>
	<div class="grid grid-cols-2 gap-4">
		<button class="rounded-full bg-gray-100 px-6 py-2 text-lg text-gray-900"> Publish </button>
		<button class="rounded-full border border-gray-100 px-6 py-2 text-lg text-gray-100">
			Settings
		</button>
	</div>
</article>
