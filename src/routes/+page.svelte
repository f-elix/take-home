<script lang="ts">
	import CardProfileSkeleton from '$lib/components/CardProfileSkeleton.svelte';
	import FriendProfile from '$lib/components/FriendProfile.svelte';
	import UserProfile from '$lib/components/UserProfile.svelte';

	let { data } = $props();
</script>

<div class="grid min-h-0 grow items-start md:grid-cols-5">
	<section
		class="h-[40vh] border-r border-gray-800 bg-gray-900 p-4 md:sticky md:top-0 md:col-span-2 md:h-full"
	>
		<h2 class="text-lg font-bold">Search</h2>
	</section>
	<section class="flex flex-col gap-8 md:col-span-3 md:h-full md:overflow-y-auto">
		<div class="flex flex-col gap-4 bg-gray-900 p-4">
			<h2 class="text-lg font-bold">My profile</h2>
			<div class="mx-auto w-full md:max-w-140">
				<UserProfile />
			</div>
		</div>
		<div class="flex flex-col gap-6 bg-gray-900 p-4">
			<h2 class="text-lg font-bold">My friends</h2>
			{#await data.friends}
				<div class="flex flex-col gap-6 md:flex-row md:flex-wrap">
					<span class="sr-only">Retrieving friends...</span>
					<div class="md:min-w-72 md:flex-1">
						<CardProfileSkeleton />
					</div>
					<div class="md:min-w-72 md:flex-1">
						<CardProfileSkeleton />
					</div>
				</div>
			{:then friends}
				<ul class="flex flex-col gap-6 md:flex-row md:flex-wrap">
					{#each friends as friend}
						<li class="md:min-w-72 md:flex-1">
							<FriendProfile {friend} />
						</li>
					{/each}
				</ul>
			{:catch error}
				<p>Error: {error.message}</p>
			{/await}
		</div>
	</section>
</div>
