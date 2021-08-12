module.exports = {
	rollup(config) {
		if (config.output.format === 'esm') {
			config.output.file = config.output.file.replace('.js', '.mjs')
		}

		config.output.globals.Redux = 'Redux'
		return config
	},
}
