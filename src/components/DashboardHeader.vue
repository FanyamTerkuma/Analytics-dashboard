<template>
    <head class="flex justify-between items-center w-full p-2 border-b">
        <p class="font-semibold text-xl max-w-1/4 self-middle">Dashboard</p>
        <div class="flex justify-between items-center w-auto gap-4 px-3">
            <div class="border rounded-full flex items-center text-gray-400 justify-start gap-3 p-2 w-auto">
                <SearchIcon />
                <input type="text" placeholder="Search..." class="outline-none bg-transparent" />
            </div>
            <div class="flex items-center justify-start gap-2 cursor-pointer">
                <Calendar />
                <p class="font-medium">November 15,2024</p>
            </div>
            <div class="border rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"><Bell /></div>
            <div class="flex justify-evenly items-center border rounded-full p-1 gap-3 cursor-pointer">
                <div class="w-12 h-12 rounded-full"><img class="object-cover rounded-full w-12 h-12" src="../assets/avatarPhotos/boy.jpeg" alt="" /></div>
                <div>
                    <p class="font-semibold text-sm">Benson Smith</p>
                    <p class="text-gray-400 text-xs">Bsmith@zohomail.com</p>
                </div>
                <div class="flex items-center px-1"><ArrowDown /></div>
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
