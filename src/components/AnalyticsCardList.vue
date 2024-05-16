<template>
    <div class="grid grid-cols-2 gap-4 pl-3">
        <AnalyticsCard :title="'Total order'" :amount="350" :percentage="24.5">
            <template #icon>
                <OrderColored />
            </template>
            <template #trendIcon>
                <Trendup />
            </template>
        </AnalyticsCard>
        <AnalyticsCard :title="'Total refund'" :amount="270" :percentage="23.5" :plummet="true">
            <template #icon>
                <RefundColored />
            </template>
            <template #trendIcon>
                <TrendDown />
            </template>
        </AnalyticsCard>
        <AnalyticsCard :title="'Average sales'" :amount="1567" :percentage="23.5" :plummet="true">
            <template #icon>
                <CartColored />
            </template>
            <template #trendIcon>
                <TrendDown />
            </template>
        </AnalyticsCard>
        <AnalyticsCard :title="'Total income'" :amount="'350,000'" :percentage="24.5">
            <template #icon>
                <IncomeColored />
            </template>
            <template #trendIcon>
                <Trendup />
            </template>
        </AnalyticsCard>
    </div>
</template>

<script setup>
    import AnalyticsCard from './AnalyticsCard.vue';
    import OrderColored from '../assets/orderColored.svg';
    import RefundColored from '../assets/refundColored.svg';
    import IncomeColored from '../assets/incomeColored.svg';
    import CartColored from '../assets/cartColored.svg';
    import Trendup from '../assets/trending-up.svg';
    import TrendDown from '../assets/trending-dwn.svg';
</script>
