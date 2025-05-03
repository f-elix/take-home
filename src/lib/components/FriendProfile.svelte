<script lang="ts">
	import CardProfile from '$lib/components/CardProfile.svelte';
	import type { Profile } from '$lib/types';

	let { friend }: { friend: Profile } = $props();

	const name = friend.name;
	const username = friend.username;
	const location = friend.location;
	const jobTitle = friend.jobTitle;
	const hireDate = friend.hireDate;
	const nbOfPosts = friend.nbOfPosts;
</script>

<CardProfile profilePicture={null} {name} {username} {location} {jobTitle} {hireDate} {nbOfPosts}>
	{#snippet buttons()}
		<button class="rounded-full bg-gray-100 px-6 py-2 text-lg text-gray-900"> Follow </button>
		<button class="rounded-full border border-gray-100 px-6 py-2 text-lg text-gray-100">
			Message
		</button>
	{/snippet}
</CardProfile>
