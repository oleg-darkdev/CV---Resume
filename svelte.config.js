import adapter from '@sveltejs/adapter-node';

const config = {
	kit: {
		adapter: adapter({ out: 'production' })
	}
};

export default config;
