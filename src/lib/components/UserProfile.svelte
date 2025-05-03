<script lang="ts">
	import { page } from '$app/state';
	import CardProfile from '$lib/components/CardProfile.svelte';

	const user = page.data.user;
	const profile = page.data.profile;
	const profilePicture = user?.picture;
	const name = profile?.name ?? user?.name;
	const username = profile?.username ?? user?.nickname;
	const location = profile?.location ?? 'Unknown';
	const jobTitle = profile?.jobTitle ?? 'Unknown';
	const hireDate = profile?.hireDate ?? 'Unknown';
	const nbOfPosts = profile?.nbOfPosts ?? 0;
</script>

<CardProfile {profilePicture} {name} {username} {location} {jobTitle} {hireDate} {nbOfPosts}>
	{#snippet buttons()}
		<button class="rounded-full bg-gray-100 px-6 py-2 text-lg text-gray-900"> Publish </button>
		<button class="rounded-full border border-gray-100 px-6 py-2 text-lg text-gray-100">
			Settings
		</button>
	{/snippet}
</CardProfile>
