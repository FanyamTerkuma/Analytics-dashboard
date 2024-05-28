<template>
    <head class="flex justify-between items-center w-full p-2 border-b dark:border-b-0">
        <p class="font-semibold text-xl max-w-1/4 self-middle">Dashboard</p>
        <div class="flex justify-between items-center w-auto gap-4 px-3">
            <div class="border dark:border-gray-500 rounded-full flex items-center text-gray-400 justify-start gap-3 p-2 w-auto">
                <SearchIcon />
                <input type="text" placeholder="Search..." class="outline-none bg-transparent" />
            </div>
            <div class="relative flex flex-grow-0 items-center justify-start gap-2 cursor-pointer dark:bg-slate-400 text-black px-1 rounded-lg">
                <Calendar class="" />
                <p class="z-20 font-medium">November 15,2024</p>
                <!-- <div class="absolute z-30 w-20 h-10 left-0"><VCalendar /></div> -->
            </div>
            <div class="border dark:bg-slate-300 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"><Bell /></div>
            <div class="flex justify-evenly items-center border dark:border-none dark:shadow-sm rounded-full p-1 gap-3 cursor-pointer dark:bg-secondary dark:text-slate-200">
                <div class="w-12 h-12 rounded-full"><img class="object-cover rounded-full w-12 h-12" src="../assets/avatarPhotos/boy.jpeg" alt="" /></div>
                <div>
                    <p class="font-semibold text-sm">Benson Smith</p>
                    <p class="text-gray-400 dark:text-gray-300 text-xs">Bsmith@zohomail.com</p>
                </div>
                <div class="flex items-center px-1"><ArrowDown class="dark:bg-slate-300 dark:rounded-full" /></div>
            </div>
        </div>
    </head>
</template>

<script setup>
    import SearchIcon from '../assets/searchIcon.svg';
    import Bell from '../assets/bellIcon.svg';
    import Calendar from '../assets/calendarIcon.svg';
    import ArrowDown from '../assets/arrow-down.svg';
</script>
