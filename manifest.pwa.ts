import { VitePWAOptions } from 'vite-plugin-pwa';

const manifest: Partial<VitePWAOptions> = {
	registerType: 'autoUpdate',
	injectRegister: 'auto',
	includeAssets: ['favicon.ico'],
	devOptions: {
		enabled: true,
	},
	manifest: {
		display: 'minimal-ui',
		name: 'interview_support',
		short_name: 'interview_support',
		theme_color: '#000000',
		start_url: 'https://alsu-sm.github.io/interview_support/',
		scope: 'https://alsu-sm.github.io/interview_support/',
		background_color: '#000000',
		icons: [
			{
				src: './icons/144_144.png',
				type: 'image/png',
				sizes: '144x144',
			},
			{
				src: './icons/192_192_maskable.png',
				type: 'image/png',
				sizes: '192x192',
				purpose: 'maskable',
			},
			{
				src: './icons/384_384_maskable.png',
				type: 'image/png',
				sizes: '384x384',
				purpose: 'maskable',
			},
			{
				src: './icons/512_512_maskable.png',
				type: 'image/png',
				sizes: '512x512',
				purpose: 'maskable',
			},
			{
				src: './icons/1024_1024_maskable.png',
				type: 'image/png',
				sizes: '1024x1024',
				purpose: 'maskable',
			},
		],
	},
};

export default manifest;
