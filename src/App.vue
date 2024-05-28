<template>
    <div class="flex dark:text-white">
        <SideBar class="max-w-1/4 transition-all ease-in-out delay-100" />
        <main class="w-full flex flex-col relative">
            <DashboardHeader class="absolute z-50 shadow-md backdrop-blur-xl bg-white dark:bg-slate-800 transition-all ease-in-out delay-100" />

            <section class="dark:bg-slate-600 bg-[#FAFAFA] space-y-4 pt-24 z-10 py-4 px-3 w-full h-screen overflow-scroll">
                <div class="grid grid-cols-3">
                    <Chart class="col-span-2" />
                    <AnalyticsCardList class="col-span-1" />
                </div>
                <div>
                    <div class="grid grid-cols-3 gap-4"><Transactions class="col-span-2" /> <PlatformList class="col-span-1" /></div>
                </div>
            </section>
        </main>
    </div>
</template>
<script setup>
    import DashboardHeader from './components/DashboardHeader.vue';
    import SideBar from './components/SideBar.vue';
    import Chart from './components/Chart.vue';
    import Transactions from './components/Transactions.vue';
    import PlatformList from './components/PlatformList.vue';
    import AnalyticsCardList from './components/AnalyticsCardList.vue';
</script>
