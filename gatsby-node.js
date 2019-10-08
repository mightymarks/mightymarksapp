exports.onCreateWebpackConfig = ({
	/* eslint-disable @typescript-eslint/no-unused-vars */
	stage,
	rules,
	loaders,
	plugins,
	actions,
	getConfig,
	/* eslint-enable @typescript-eslint/no-unused-vars */
}) => {
	const config = getConfig()

	// only inline images less than 1000 bytes
	const imageRule = rules.images()
	const myImageRules = [
		{
			test: new RegExp(
				imageRule.test
					.toString()
					.replace('svg|', '') // not svgs though
					.slice(1, -1),
			),
			use: [loaders.url({ limit: 1000 })],
		},
	]

	config.module.rules = [
		...config.module.rules.filter(rule =>
			rule.test ? rule.test.toString() !== imageRule.test.toString() : true,
		),
		...myImageRules,
	]

	actions.replaceWebpackConfig(config)
}
