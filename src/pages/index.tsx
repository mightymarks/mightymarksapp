import { styled } from 'linaria/react'
import React from 'react'
import AppName from '../components/AppName'
import Layout from '../components/Layout'
import AvoidWrap from '../components/util/AvoidWrap'
import ShootingStarSVG from '../images/shooting-star.svg'
import { mobileS, tablet } from '../mq'
import { colors, fonts, fontSizes, lineHeights, space } from '../theme'

const Grid = styled.div`
	position: absolute;
	height: 100%;
	display: grid;
	grid-template-columns: 1fr;

	${tablet} {
		grid-template-columns: 1fr 1fr;
	}
`

const Header = styled.header`
	background-color: ${colors.darkWhite};
	padding: 10vw;

	${tablet} {
		padding: 7vw;
	}
`

const Callout = styled.h2`
	color: ${colors.darkWhite};
	font-family: ${fonts.mono};
	font-size: ${fontSizes[1]};
	text-transform: uppercase;
	letter-spacing: 0.03em;
	font-weight: normal;
	line-height: ${lineHeights.heading};
	display: inline-block;
	background-color: ${colors.blue};
	padding: ${space[1]} ${space[2]};
	margin-left: ${space[1]};
	-webkit-font-smoothing: antialiased;

	${tablet} {
		font-size: ${fontSizes[0]};
	}
`

const ShootingStar = styled(ShootingStarSVG)`
	fill: ${colors.blue};
	width: 10vw;
	height: auto;
	position: absolute;
	right: 4vw;
	top: -1vw;

	${tablet} {
		top: 1vw;
		right: 0;
		width: 5vw;
	}
`

const Hero = styled.h1`
	position: relative;
	color: ${colors.red};
	font-family: ${fonts.sans};
	font-size: 11vw;
	font-weight: bold;
	line-height: ${lineHeights.hero};
	word-break: break-word;
	hyphens: auto;
	padding-top: 9vw;

	${mobileS} {
		word-break: normal;
		hyphens: none;
	}

	${tablet} {
		font-size: 5.5vw;
		padding-top: 6vw;
	}
`

const Main = styled.main`
	background-color: ${colors.black};
	padding: 10vw;
	-webkit-font-smoothing: antialiased;

	${tablet} {
		padding: calc(1.5rem + 13vw) 7vw 5vw;
	}
`

const Section = styled.section`
	padding-bottom: ${space[1]};
	color: ${colors.darkWhite};

	${mobileS} {
		padding-bottom: ${space[4]};
	}

	&:first-child {
		margin-top: 0;

		${tablet} {
			/* margin-top: ${space[4]}; */
		}
	}

	&:last-child {
		padding-bottom: 0;
	}
`

const Heading = styled.h3`
	font-family: ${fonts.mono};
	font-weight: normal;
	color: ${colors.red};
	font-size: ${fontSizes[1]};
	text-transform: uppercase;
	letter-spacing: 0.03em;
	display: inline-block;
	-webkit-font-smoothing: auto;
	margin-bottom: 0.35em;

	${tablet} {
		font-size: ${fontSizes[0]};
	}
`

const Text = styled.p`
	font-family: ${fonts.sans};
	font-size: ${fontSizes[2]};
	margin-bottom: ${space[3]};
	font-weight: 400;
	line-height: ${lineHeights.text};
	max-width: 50ch;

	${tablet} {
		font-size: ${fontSizes[1]};
	}

	em {
		font-style: normal;
		font-weight: 600;
	}
`

const Index = () => (
	<Layout>
		<Grid>
			<Header>
				<Callout>Synchronize bookmarks!</Callout>
				<Hero>
					<ShootingStar />
					<AppName /> keeps your browser bookmarks{' '}
					<AvoidWrap>in sync</AvoidWrap>.
				</Hero>
			</Header>
			<Main>
				<Section>
					<Heading>Every bookmark, everywhere</Heading>
					<Text>
						<AppName /> syncs your browser bookmarks / favorites between{' '}
						<em>Chrome</em>, <em>Firefox</em>, <s>Safari</s>*, <em>Edge</em>,{' '}
						<em>Opera</em>, <em>Brave</em> and more.
					</Text>
					<Text>
						You can access them on the web, too (which doubles as{' '}
						<em>a handy homepage for Safari</em>, for now).
					</Text>
				</Section>
				<Section>
					<Heading>$1.99/month</Heading>
					<Text>
						The first month is free, during which you can cancel at any time
						without charge.
					</Text>
					<Text>After that, $1.99 per month.</Text>
				</Section>
				<Section>
					<Heading>Your data is yours</Heading>
					<Text>
						We don’t monitor your bookmarks for anything other than changes that
						we need to sync.
					</Text>
					<Text>
						We don’t tailor content, generate recommendations or target ads. We
						don’t want or need your data for anything else, by design.
					</Text>
					<Text>We will not share your data with anyone.</Text>
				</Section>
				<Section>
					<Heading>We plan on sticking around!</Heading>
					<Text>
						<i>Xmarks</i> was extremely useful. We really hope that <AppName />{' '}
						can be a replacement for <i>Xmarks</i>, but to do that we need to
						stay in business.
					</Text>
					<Text>
						Hence – in the interests of continued service and development – the
						small monthly charge.
					</Text>
				</Section>
			</Main>
		</Grid>
	</Layout>
)

export default Index
