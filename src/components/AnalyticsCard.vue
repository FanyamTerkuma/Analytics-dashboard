<template>
    <div class="container dark:bg-slate-800 bg-[#FFFFFF] flex flex-col gap-3 justify-center border dark:border-0 shadow-sm rounded-xl px-2 py-4 size-fit">
        <div class="flex justify-between items-center">
            <slot name="icon"></slot>
            <div class="mt-[-10%] w-[50%] h-[20%]"><Line :options="chartOptions" :data="chartData" height="30" width="60" /></div>
        </div>
        <div class="">
            <h1 class="text-lg capitalize font-medium dark:text-white text-[#898989]">{{ title }}</h1>
            <h2 class="text-2xl font-semibold dark:text-slate-400 text-[#3A3F51]">{{ amount }}</h2>
        </div>
        <div class="flex gap-2 items-center">
            <span class="flex items-center gap-2 text-primary text-xs bg-[#e7f9f4] p-2 rounded-full" :class="{ 'text-red-400 bg-[#fdeaea]': plummet }">
                <slot name="trendIcon"></slot>
                <p>{{ percentage }}%</p>
            </span>
            <p class="dark:text-slate-300 text-[#606060] text-sm">vs. previous month</p>
        </div>
    </div>
</template>
<!-- TODO: dynamically change the line chart to match downwards and upwards trends -->
<script setup>
    import { ref } from 'vue';
    import { Line } from 'vue-chartjs';
    import { Chart as ChartJS, Title, Tooltip, LineElement, PointElement, CategoryScale, LinearScale, Filler } from 'chart.js';
    ChartJS.register(Title, Tooltip, LineElement, PointElement, CategoryScale, LinearScale, Filler);

    const props = defineProps({
        plummet: {
            type: Boolean
        },
        icon: {
            type: Object,
            required: true
        },
        trendIcon: {
            type: Object,
            required: true
        },
        chart: {
            type: Object
        },
        title: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        },
        percentage: {
            type: String,
            required: true
        }
    });

    // Chart config, TODO: clean up the codes
    const chartData = ref({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                borderColor: '#66C87B',
                borderWidth: 1,
                backgroundColor: (ctx) => {
                    const canvas = ctx.chart.ctx;
                    const gradient = canvas.createLinearGradient(0, 0, 0, 160);
                    gradient.addColorStop(0, 'rgba(119, 185, 0, 0.3)');
                    gradient.addColorStop(0.5, 'rgba(119, 185, 0, 0.1)');
                    gradient.addColorStop(1, 'rgba(119, 185, 0, 0)');
                    return gradient;
                },
                fill: true,
                tension: 0.1,
                pointRadius: 0,
                data: [5000, 10000, 10000, 20000, 45000, 30000, 40000, 20000, 30000, 20000, 30000, 40000]
            }
        ]
    });

    const chartOptions = ref({
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true
            },
            title: {
                display: true
            },
            filler: {
                propagate: true
            }
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false
                }
            },
            y: {
                display: false,
                grid: {
                    display: false
                }
            }
        }
    });
</script>
