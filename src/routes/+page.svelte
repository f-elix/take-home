<script lang="ts">
	import Profile from '$lib/components/Profile.svelte';
</script>

<div class="h-full bg-gray-700">
	<div class="grid h-full grid-rows-5 gap-[1px] md:grid-cols-5">
		<div class="row-span-2 bg-gray-900 p-4 md:col-span-2 md:row-span-full">
			<h2 class="text-lg font-bold">Search</h2>
		</div>
		<div class="flex flex-col justify-between bg-gray-900 p-4 md:col-span-3 md:row-span-2">
			<h2 class="text-lg font-bold">Profile</h2>
			<div class="self-center">
				<Profile />
			</div>
		</div>
		<div class="row-span-2 bg-gray-900 p-4 md:col-span-3 md:col-start-3 md:row-span-3">
			<h2 class="text-lg font-bold">My friends</h2>
		</div>
	</div>
</div>
