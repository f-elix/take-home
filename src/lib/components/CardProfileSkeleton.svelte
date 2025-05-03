<div class="@container flex animate-pulse flex-col gap-6 rounded-lg border border-gray-200 p-6">
	<div class="flex flex-col items-center justify-center gap-10 @sm:flex-row">
		<div class="size-16 shrink-0 overflow-hidden rounded-full bg-gray-200"></div>
		<div class="flex flex-col items-center gap-2 text-center">
			<div class="h-4 w-24 rounded-full bg-gray-200"></div>
			<div class="h-4 w-16 rounded-full bg-gray-200"></div>
		</div>
	</div>
	<div class="flex flex-col items-start gap-6 @sm:grid @sm:grid-cols-2">
		{#each { length: 4 }}
			<div class="flex flex-col gap-2 @sm:items-center @sm:text-center">
				<div class="h-4 w-24 rounded-full bg-gray-200"></div>
				<div class="h-4 w-16 rounded-full bg-gray-200"></div>
			</div>
		{/each}
	</div>
	<div class="grid gap-4 @sm:grid-cols-2">
		<div class="h-12 rounded-full bg-gray-200"></div>
		<div class="h-12 rounded-full bg-gray-200"></div>
	</div>
</div>
