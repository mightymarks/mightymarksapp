import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import ogImage from '../images/red1200.png'

interface Props {
	pathname?: string
	article?: boolean
}

const SEO = ({ pathname = '/' }: Props) => {
	const data = useStaticQuery(graphql`
		query SeoQuery {
			site {
				siteMetadata {
					name
					title
					siteUrl
					description
					twitter
				}
			}
		}
	`)

	const title = `${
		data.site.siteMetadata.name
	} – ${data.site.siteMetadata.title.toLowerCase()}`

	const hostname = (path: string) => `${data.site.siteMetadata.siteUrl}${path}`

	return (
		<Helmet
			htmlAttributes={{
				lang: 'en',
			}}
		>
			<title>{title}</title>
			<meta name="description" content={data.site.siteMetadata.description} />
			<meta name="image" content={hostname(ogImage)} />

			<meta property="og:url" content={hostname(pathname)} />
			<meta property="og:title" content={title} />
			<meta
				property="og:description"
				content={data.site.siteMetadata.description}
			/>
			<meta property="og:image" content={hostname(ogImage)} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="1200" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content={data.site.siteMetadata.twitter} />
			<meta name="twitter:creator" content={data.site.siteMetadata.twitter} />
		</Helmet>
	)
}

export default SEO
