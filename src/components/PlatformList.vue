<template>
    <section class="dark:bg-slate-800 dark:border-0 bg-[#FFFFFF] rounded-xl py-3 px-4 border shadow-sm transition-all ease-in-out delay-100">
        <div class="flex justify-between items-center mb-3">
            <h1 class="font-semibold text-lg">Top Platform</h1>
            <h1 class="font-medium text-primary text-lg pr-4 cursor-pointer">See All</h1>
        </div>
        <div>
            <PlatformStatsCard />
        </div>
    </section>
</template>

<script setup>
    import PlatformStatsCard from './PlatformStatsCard.vue';
</script>
