/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Hauora Sans"]
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
		  {
			rosepine: {
			 "primary": "#c4a7e7",
			 "secondary": "#ebbcba",
			 "accent": "#f6c177",
			 "neutral": "#191724",
			 "base-100": "#1f1d2e",
			 "info": "#31748f",
			 "success": "#9ccfd8",
			 "warning": "#f6c177",
			 "error": "#eb6f92",
			}
		  },
		],
	  },
}
