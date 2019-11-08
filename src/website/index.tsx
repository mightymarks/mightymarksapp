import { styled } from 'linaria/react'
import React from 'react'
import AppName from '../components/AppName'
import Callout from '../components/Callout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Heading from '../components/Heading'
import Hero from '../components/Hero'
import SignUp from '../components/JoinMailingList'
import Layout from '../components/Layout'
import Main from '../components/Main'
import Section from '../components/Section'
import Text from '../components/Text'
import { tablet } from '../theme/mq'

const Grid = styled.div`
	min-height: 100vh;
	position: absolute;

	${tablet} {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`

const Index = () => {
	return (
		<Layout>
			<Grid>
				<Header>
					<Callout>Synchronize bookmarks!</Callout>
					<Hero />
					<SignUp />
				</Header>
				<Main>
					<Section>
						<Heading>Every bookmark, everywhere</Heading>
						<Text>
							<AppName /> syncs your browser bookmarks / favorites between{' '}
							<em>Chrome</em>, <em>Firefox</em>, <em>Edge</em>, <em>Opera</em>,{' '}
							<em>Brave</em> and more.
						</Text>
						<Text>
							You can access your bookmarks on the web, too (which doubles as{' '}
							<em>a handy homepage for Safari</em>, for now*).
						</Text>
					</Section>
					<Section>
						<Heading>Price</Heading>
						<Text>
							The first month is free, during which you can cancel at any time
							without charge.
						</Text>
						<Text>
							After that, <em>it‘s $1.99 per month</em>.
						</Text>
					</Section>
					<Section>
						<Heading>Privacy</Heading>
						<Text>
							Your data is yours. We don’t monitor your bookmarks for anything
							other than changes that we need to sync.
						</Text>
						<Text>
							We don’t tailor content, generate recommendations or target ads.
							We don’t want or need your data for anything else, by design.
						</Text>
						<Text>We will not share your data with anyone.</Text>
					</Section>
					<Section>
						<Heading>We plan on sticking around!</Heading>
						<Text>
							Xmarks was super useful. We really hope that <AppName /> can be a
							replacement for Xmarks, but to do that we need to keep going!
						</Text>
						<Text>
							Hence – in the interest of continued service and development – the
							small monthly charge 💸.
						</Text>
					</Section>
				</Main>
				<Footer />
			</Grid>
		</Layout>
	)
}

export default Index
