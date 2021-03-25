<script>
	let count = 0;

	const increment = () => {
		count += 1;
	};
</script>

<button class="border-2 border-yellow-600 rounded-full mx-auto py-4 px-10 text-yellow-900 bg-yellow-100" on:click={increment}>
	Clicks: {count}
</button>