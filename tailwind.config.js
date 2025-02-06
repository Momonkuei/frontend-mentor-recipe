/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'design-rose-800': '#7a284E',
				'design-rose-50': '#fff7fb',
				'design-stone-100': '#F3E5D7',
				'design-stone-150': '#E3DDD7',
				'design-stone-600': '#5f564D',
				'design-stone-900': '#312E2c',
				'design-brown-800': '#854632',
			},

			fontFamily: {
				'young-serif': ['Young Serif', 'serif'],
				outfit: ['Outfit', 'sans-serif'], // 修正為 sans-serif
			},
		},
	},
	plugins: [],
};
