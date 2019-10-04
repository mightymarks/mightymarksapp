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
	const imageRule = rules.images()
	const urlLoader = loaders.url({ limit: 1000 })

	const myImageRules = [
		{
			test: new RegExp(
				imageRule.test
					.toString()
					.replace('svg|', '')
					.slice(1, -1),
			),
			use: [urlLoader],
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
