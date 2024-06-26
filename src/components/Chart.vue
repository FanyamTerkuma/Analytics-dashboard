<template>
    <div class="dark:bg-slate-800 bg-[#FFFFFF] rounded-xl shadow-sm border dark:border-0 p-2 transition-all ease-in-out delay-100">
        <div class="flex justify-between items-center">
            <p class="font-semibold text-lg">Sales Trends</p>
            <div class="flex justify-center items-center gap-2">
                Sort by:
                <span class="w-auto flex gap-2 items-center border rounded-full px-3 py-1">
                    <p>Weekly</p>
                    <span class="dark:bg-slate-300 rounded-full"> <ArrowDown /></span>
                </span>
            </div>
        </div>
        <Bar height="111px" :options="chartOptions" :data="chartData" />
    </div>
</template>

<script setup>
    import { ref, watchEffect } from 'vue';
    import { Bar } from 'vue-chartjs';
    import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from 'chart.js';
    import { useDarkMode } from '../composables/useDarkMode';
    import ArrowDown from '../assets/arrow-down.svg';

    ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale);

    const chartData = ref({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{ data: [5000, 10000, 20000, 30000, 40000, 45000, 20000, 30000, 10000, 20000, 30000, 40000] }]
    });
    const { isDark } = useDarkMode();

    const chartOptions = ref({
        responsive: true,
        backgroundColor: 'hsla(166, 63%, 89%, 1)',
        hoverBackgroundColor: 'hsla(166, 63%, 50%, 1)',
        borderRadius: 100,

        scales: {
            x: {
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 12
                    },
                    color: '#525252'
                }
            },
            y: {
                max: 50000,
                grid: {
                    drawBorder: false
                },
                border: {
                    display: false,
                    dash: [5, 5]
                },
                ticks: {
                    stepSize: 10000,
                    font: {
                        size: 12
                    },
                    color: '#525252'
                }
            }
        },
        plugins: {
            tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                displayColors: false,
                callbacks: {
                    label: (tooltipItem) => {
                        if (tooltipItem.parsed.y !== null) {
                            return ` $${tooltipItem.parsed.y.toLocaleString('en-US')}`;
                        }
                        return '';
                    },
                    title: (tooltipItems) => {
                        return '';
                    }
                }
            }
        }
    });
    watchEffect(isDark, () => {
        chartOptions.value.scales.x.ticks.color = isDark.value ? 'white' : '#525252';
        chartOptions.value.scales.y.ticks.color = isDark.value ? 'white' : '#525252';
    });
</script>
