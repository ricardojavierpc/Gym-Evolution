/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				mochiy: ['Mochiy Pop One', 'sans-serif'],
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(180deg, rgba(2,0,36,0.2) 0%, rgba(0,0,0,0.2) 68%, rgba(0,212,255, 0.2) 100%)',
			},
			rotate: {
				'y-180': 'rotateY(180deg)'
			}

		},
	},
	plugins: [
		require('tailwindcss-animated')
	]
}
