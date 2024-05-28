import { ref, watchEffect } from 'vue';

export const useDarkMode = () => {
    const isDark = ref(localStorage.getItem('theme') === 'dark' || false);

    const setDarkMode = () => {
        isDark.value = true;
    };

    const setLightMode = () => {
        isDark.value = false;
    };
    watchEffect(() => {
        const rootElement = document.documentElement.classList;
        if (isDark.value) {
            rootElement.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            rootElement.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });
    return { isDark, setDarkMode, setLightMode };
};
