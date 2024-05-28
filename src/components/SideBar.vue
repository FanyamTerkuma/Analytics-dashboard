<template>
    <section class="h-svh border-r dark:border-gray-700 dark:bg-slate-800 bg-gray-50 border-gray-200 flex flex-col w-[6%]">
        <nav class="py-4 h-[90%] flex flex-col gap-4">
            <span class="self-center"> <Logo /></span>
            <ul class="mb-14 space-y-2">
                <li class="flex justify-end items-center gap-5 w-full">
                    <MenuIcon @click="setActive('menu')" class="dark:bg-slate-200 rounded-full" />
                    <div
                        class="p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'dark:bg-white bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'menu' }"></div>
                </li>
                <li class="flex justify-end items-center gap-5 w-full">
                    <Arrow @click="setActive('arrow')" />
                    <div
                        class="p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'dark:bg-white bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'arrow' }"></div>
                </li>
                <li class="flex justify-end items-center gap-5 w-full">
                    <PeopleIcon @click="setActive('peopleIcon')" />
                    <div
                        class="p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'dark:bg-white bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'peopleIcon' }"></div>
                </li>
                <li class="flex justify-end items-center gap-5 w-full">
                    <PackageIcon @click="setActive('packageIcon')" />
                    <div
                        class="p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'dark:bg-white bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'packageIcon' }"></div>
                </li>
                <li class="flex justify-end items-center gap-5 w-full">
                    <PercentageIcon @click="setActive('percentageIcon')" />
                    <div
                        class="p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'dark:bg-white bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'percentageIcon' }"></div>
                </li>
                <li class="flex justify-end items-center gap-5 w-full">
                    <FailedIcon @click="setActive('failedIcon')" />
                    <div
                        class="p-[1.7px] h-7 rounded-l-lg transition-all ease-in delay-200"
                        :class="{ 'dark:bg-white bg-black p-[1.7px] h-7 rounded-l-lg': activeTab === 'failedIcon' }"></div>
                </li>
                <li class="flex flex-col justify-end items-center gap-4 p-2 rounded-full shadow-sm w-fit my-3 mx-auto dark:bg-slate-400 bg-[#FFFFFF]">
                    <div class="bg-primary p-2 rounded-full" :class="{ 'shadow-sm rounded-full bg-slate-300': isDark }"><SunIcon @click="setLightMode()" /></div>
                    <MoonIcon @click="setDarkMode()" :class="{ 'shadow-md rounded-full bg-slate-700': isDark }" />
                </li>
            </ul>
            <ul class="flex flex-col items-center">
                <li><ArrowRight /></li>
                <li><SettingsIcon /></li>
                <li><ArrowLeft /></li>
            </ul>
        </nav>
        <div class="dark:bg-slate-700 bg-white h-[10%]"></div>
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
    import SunIcon from '../assets/sunIcon.svg';
    import MoonIcon from '../assets/moonIcon.svg';
    import { useDarkMode } from '../composables/useDarkMode.js';
    import { ref } from 'vue';

    const { isDark, setLightMode, setDarkMode } = useDarkMode();

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
