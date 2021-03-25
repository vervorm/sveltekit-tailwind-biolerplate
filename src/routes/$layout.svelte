<script>
    import Nav from '$lib/Nav.svelte'
</script>
<main class="bg-white px-4 mx-auto max-w-screen-md border-2 border-t-0 border-b-0 h-screen border-gray-100 border-dotted content-center text-center space-y-8">
    <Nav/>
    <slot></slot>
</main>
<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>