<template>
    <div class="flex">
        <SideBar class="max-w-1/4" />
        <main class="w-full flex flex-col relative">
            <DashboardHeader class="absolute z-50 shadow-md backdrop-blur-xl bg-white" />
            <section class="pt-24 z-10 p-4 w-full max-h-screen overflow-scroll grid grid-cols-2">
                <div class="col-span-1 grid grid-cols-1 grid-rows-2 gap-4"><Chart /><Chart /></div>
                <div class="p-2">orders</div>
            </section>
        </main>
    </div>
</template>
<script setup>
    import DashboardHeader from './components/DashboardHeader.vue';
    import SideBar from './components/SideBar.vue';
    import Chart from './components/Chart.vue';
</script>
