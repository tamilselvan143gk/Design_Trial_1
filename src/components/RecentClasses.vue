<template>
    <router-link :to="{ name: 'Classes' }">
    <div class="mt-5">
        <p class="text-lg font-medium mb-1 pl-1">Recent Classes</p>
        <div class="flex gap-3 bg-white py-3 px-5 rounded-xl shadow-md">
            <img class="rounded-xl" src="../../public/img/photography.jpg" title="Photography" height="150" width="150">
            <div>
                <p class="text-2xl font-medium text-gray-700 mb-2">Photography</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>
    </router-link>
</template>

<script>
export default {
    name: 'RecentClasses'
}
</script>