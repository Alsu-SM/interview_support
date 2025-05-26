import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mcret from 'vite-plugin-mkcert';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.pwa';

export default defineConfig({
	server: {
		https: {},
	},
	base: 'https://alsu-sm.github.io/interview_support/',
	plugins: [
		VitePWA(manifest),
		react({
			jsxImportSource: '@emotion/react', // Tell Vite to use Emotion's jsx
			babel: {
				plugins: ['@emotion/babel-plugin'], // Add the Babel plugin
			},
		}),
		mcret(),
	],
	css: {
		modules: {
			generateScopedName: '[folder]_[local]__[hash:base64:5]',
		},
	},
});
