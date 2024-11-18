/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				'steel-blue': {
					'50': '#f2f7fd',
					'100': '#e5edf9',
					'200': '#c5daf2',
					'300': '#91bbe8',
					'400': '#5698da',
					'500': '#327fcd',
					'600': '#2160a8',
					'700': '#1c4d88',
					'800': '#1b4271',
					'900': '#1b395f',
					'950': '#12243f',
				},
				'text-main': '#FAFAFA',
				'nav': '#222222'
			}

		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
