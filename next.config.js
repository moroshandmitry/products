const withPWA = require('next-pwa');

module.exports = withPWA({
	images: {
		domains: ['images.ctfassets.net'],
	},
	pwa: {
		dest: 'public',
		disable: process.env.NODE_ENV === 'development',
		// register: true,
		// clientsClaim: true,
		// skipWaiting: true,
		// exclude: [/swagger-ui/],
		fallbacks: {
			image: '/icons/maskable.png',
		},
	},

	reactStrictMode: true,
});
