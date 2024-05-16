<template>
    <section class="bg-[#FFFFFF] rounded-xl py-3 px-4 border shadow-sm w-2/3">
        <div class="flex justify-between items-center">
            <h1 class="font-semibold text-lg">Last Orders</h1>
            <h1 class="font-medium text-primary text-lg pr-4 cursor-pointer">See All</h1>
        </div>
        <table class="w-full mt-3">
            <thead class="text-left text-[#9CA4AB] border-b">
                <th>Name</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Invoice</th>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <Transaction :avatar="avatar1" :name="'marcus bergson'" :date="'May 5,2024'" :amount="80000" :transactionType="'paid'" />
                <Transaction :avatar="avatar1" :name="'marcus bergson'" :date="'May 5,2024'" :amount="80000" :transactionType="'refund'" />
                <Transaction :avatar="avatar1" :name="'marcus bergson'" :date="'May 10,2024'" :amount="87000" :transactionType="'paid'" />
                <Transaction :avatar="avatar1" :name="'marcus bergson'" :date="'May 5,2024'" :amount="86000" :transactionType="'refund'" />
            </tbody>
        </table>
    </section>
</template>

<script setup>
    import Transaction from './Transaction.vue';
    import avatar1 from '../assets/avatarPhotos/charles-etoroma.jpg';
</script>
<style scoped>
    th {
        font-weight: 400;
        padding-bottom: 10px;
        text-transform: capitalize;
    }
</style>
