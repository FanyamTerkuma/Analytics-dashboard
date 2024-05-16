<template>
    <tr>
        <td class="flex gap-2 items-center">
            <div><img class="size-8 object-cover rounded-full" :src="`${avatar}`" alt="avatar" /></div>
            <p class="capitalize">{{ name }}</p>
        </td>
        <td class="text-[#9CA4AB]">{{ date }}</td>
        <td class="font-semibold">{{ formattedAmount }}</td>
        <td>
            <p v-if="transactionType === 'paid'" class="text-primary">Paid</p>
            <p v-else class="text-red-500">Refund</p>
        </td>
        <td class="flex items-center gap-1 cursor-pointer">
            <DocumentDownload />
            <p>View</p>
        </td>
    </tr>
</template>

<script setup>
    import DocumentDownload from '../assets/document-download.svg';
    import { computed } from 'vue';
    const props = defineProps({
        avatar: {
            type: String,
            required: true
        },
        name: {
            type: String
        },
        date: {
            type: String
        },
        amount: {
            type: Number
        },
        transactionType: {
            type: String
        }
    });

    const formattedAmount = computed(() => {
        if (props.amount) {
            return props.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
        return;
    });
</script>
<style scoped>
    td {
        padding: 10px 0 10px 0;
    }
</style>
