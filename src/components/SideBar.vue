<template>
    <section class="h-svh border-r border-gray-200 flex flex-col w-[6%]">
        <nav class="bg-gray-50 py-4 h-4/5 flex flex-col gap-4">
            <span class="self-center"> <Logo /></span>
            <ul class="mb-32">
                <li class="flex justify-end items-center gap-5 w-full">
                    <MenuIcon @click="setActive('menu')" />
                    <div
                        class="bg-white p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'menu' }"></div>
                </li>
                <li class="flex justify-end items-center gap-5 w-full">
                    <Arrow @click="setActive('arrow')" />
                    <div
                        class="bg-white p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'arrow' }"></div>
                </li>
                <li class="flex justify-end items-center gap-5 w-full">
                    <PeopleIcon @click="setActive('peopleIcon')" />
                    <div
                        class="bg-white p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'peopleIcon' }"></div>
                </li>
                <li class="flex justify-end items-center gap-5 w-full">
                    <PackageIcon @click="setActive('packageIcon')" />
                    <div
                        class="bg-white p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'packageIcon' }"></div>
                </li>
                <li class="flex justify-end items-center gap-5 w-full">
                    <PercentageIcon @click="setActive('percentageIcon')" />
                    <div
                        class="bg-white p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'percentageIcon' }"></div>
                </li>
                <li class="flex justify-end items-center gap-5 w-full">
                    <FailedIcon @click="setActive('failedIcon')" />
                    <div
                        class="bg-white p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'failedIcon' }"></div>
                </li>
            </ul>
            <ul class="flex flex-col items-center">
                <li><ArrowRight /></li>
                <li><SettingsIcon /></li>
                <li><ArrowLeft /></li>
            </ul>
        </nav>
        <div class="bg-white h-1/5"></div>
    </section>
</template>

<script setup>
    import Logo from '../assets/logo.svg';
    import Arrow from '../assets/arrow.svg';
    import MenuIcon from '../assets/menuIcon.svg';
    import PeopleIcon from '../assets/PeopleIcon.svg';
    import PercentageIcon from '../assets/percentageIcon.svg';
    import PackageIcon from '../assets/packageIcon.svg';
    import ArrowLeft from '../assets/arrow-left.svg';
    import FailedIcon from '../assets/failed.svg';
    import ArrowRight from '../assets/arrow-right.svg';
    import SettingsIcon from '../assets/gearIcon.svg';
    import { ref } from 'vue';

    let activeTab = ref('menu');

    const setActive = (tab) => {
        if (activeTab === tab) {
            return;
        }
        activeTab.value = tab;
    };
</script>
<style scoped>
    li {
        cursor: pointer;
    }
</style>
