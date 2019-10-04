import React from 'react'
import { Box } from 'reflexbox'
import { ThemeProvider } from 'theme-ui'
import AppName from '../components/AppName'
import Callout from '../components/Callout'
import Heading from '../components/Heading'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Text from '../components/Text'
import AvoidWrap from '../components/util/AvoidWrap'
import theme from '../theme'

const Section = props => <Box as="section" paddingBottom={[1, 4]} {...props} />
const Column = props => (
	<Box
		padding={{
			_: '15vw',
			tablet: '8vw',
		}}
		{...props}
	/>
)

const Index = () => (
	<ThemeProvider theme={theme}>
		<Layout
			sx={{
				position: 'absolute',
				height: '100%',
				display: 'grid',
				gridTemplateColumns: ['1fr', null, null, null, '1fr 1fr'],
			}}
		>
			<Column as="header" backgroundColor="darkWhite">
				<Callout marginBottom={2} fontSize={0}>
					Synchronize bookmarks!
				</Callout>
				<Hero marginBottom={[0]}>
					<AppName /> keeps your browser bookmarks{' '}
					<AvoidWrap>in sync</AvoidWrap>.
				</Hero>
			</Column>
			<Column
				as="main"
				backgroundColor="yellow"
				sx={{
					overflow: ['visible', null, null, null, 'auto'],
					maxHeight: '100%',
				}}
			>
				<Section marginTop={{ _: 0, tablet: 4 }}>
					<Heading>The same bookmarks, everywhere</Heading>
					<Text>
						<AppName /> syncs your browser bookmarks in <strong>Chrome</strong>,{' '}
						<strong>Firefox</strong>, Safari*, <strong>Edge</strong>,{' '}
						<strong>Opera</strong>, <strong>Brave</strong> and more.
					</Text>
					<Text>
						They are also accessible on the web (which doubles as{' '}
						<strong>a handy homepage for Safari</strong>, for now).
					</Text>
				</Section>
				<Section>
					<Heading>Unnoticably cheap</Heading>
					<Text>
						The first month is free so you can see if it’s your kind of thing.
					</Text>
					<Text>
						After that, <AppName /> costs <strong>$1.99/month</strong> – it’s
						not <em>actually</em> free, but it’s pretty close :)
					</Text>
				</Section>
				<Section>
					<Heading>Privacy</Heading>
					<Text>
						<strong>Your data is yours</strong> – we don’t monitor it for
						anything other than changes that we need to sync.
					</Text>
					<Text>
						We don’t tailor content, generate recommendations or target ads. We
						don’t want or need your data for anything else, by design.
					</Text>
					<Text>We will not share your data.</Text>
				</Section>
				<Section paddingBottom={0}>
					<Heading>We plan on sticking around!</Heading>
					<Text>
						<em>Xmarks</em> was so handy. We really hope that <AppName /> can be
						a useful replacement for <em>Xmarks</em>, but to do that we need to
						stay in business.
					</Text>
					<Text>
						Hence, in the interests of continued service and development, the
						small monthly charge.
					</Text>
				</Section>
			</Column>
		</Layout>
	</ThemeProvider>
)

export default Index
