import React from 'react'
import { Helmet } from 'react-helmet'
import { description, name, siteUrl, title, twitter } from '../config'
import ogImage from './images/red1200.png'

interface Props {
	pathname?: string
	article?: boolean
}

const SEO = ({ pathname = '/' }: Props) => {
	const formattedTitle = `${name} – ${title.toLowerCase()}`

	const hostname = (path: string) => `${siteUrl}${path}`

	return (
		<Helmet
			htmlAttributes={{
				lang: 'en',
			}}
		>
			<title>{formattedTitle}</title>
			<meta name="description" content={description} />
			<meta name="image" content={hostname(ogImage)} />

			<meta property="og:url" content={hostname(pathname)} />
			<meta property="og:title" content={formattedTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={hostname(ogImage)} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="1200" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={twitter} />
			<meta name="twitter:creator" content={twitter} />
		</Helmet>
	)
}

export default SEO
