import { styled } from 'linaria/react'
import React from 'react'
import AppName from '../components/AppName'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import AvoidWrap from '../components/util/AvoidWrap'
import GitHubSVG from '../images/GitHub.svg'
import ShootingStarSVG from '../images/shooting-star.svg'
import { mobileS, tablet } from '../mq'
import { colors, fonts, fontSizes, lineHeights, space } from '../theme'

const Grid = styled.div`
	min-height: 100vh;
	position: absolute;

	${tablet} {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
`

const Header = styled.header`
	background-color: ${colors.darkWhite};
	padding: 10vw;
	grid-column: 1 / 2;
	grid-row: 1 / 3;

	${tablet} {
		padding: 7vw;
	}
`

const Callout = styled.h2`
	color: ${colors.blue};
	font-family: ${fonts.mono};
	font-size: ${fontSizes[1]};
	text-transform: uppercase;
	letter-spacing: 0.03em;
	font-weight: normal;
	line-height: ${lineHeights.heading};
	display: inline-block;
	background-color: ${colors.yellow};
	padding: ${space[1]} ${space[2]};

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
	text-shadow: ${colors.yellow} 2px 2px 0;

	${mobileS} {
		word-break: normal;
		hyphens: none;
	}

	${tablet} {
		font-size: 5.5vw;
		padding-top: 6vw;
	}
`

const Signup = styled.a`
	color: ${colors.darkWhite};
	font-family: ${fonts.sans};
	font-size: ${fontSizes[2]};
	line-height: ${lineHeights.text};
	display: inline-block;
	background-color: ${colors.blue};
	padding: ${space[2]} ${space[3]};
	border-radius: 3px;
	-webkit-font-smoothing: antialiased;
	margin: 10vw 0 2vw;
	text-decoration: none;
	display: inline-flex;
	align-items: center;

	&:hover {
		background-color: ${colors.red};
	}

	${tablet} {
		margin-top: 6vw;
	}
`

const GitHubIcon = styled(GitHubSVG)`
	margin-left: 1ch;
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
	letter-spacing: 0.02em;
	display: inline-block;
	line-height: ${lineHeights.text};

	${tablet} {
		font-size: ${fontSizes[0]};
	}
`

const Text = styled.p`
	color: ${colors.darkWhite};
	font-family: ${fonts.sans};
	font-size: ${fontSizes[2]};
	font-weight: 400;
	line-height: ${lineHeights.text};
	max-width: 50ch;

	& + & {
		margin-top: ${space[3]};
	}

	${tablet} {
		font-size: ${fontSizes[1]};
		/* font-weight: 200; */
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
				<Signup href="https://mailchi.mp/c3caf0d92fac/mightymarks">
					Join the waiting list with GitHub <GitHubIcon />
				</Signup>
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
						We don’t tailor content, generate recommendations or target ads. We
						don’t want or need your data for anything else, by design.
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

export default Index
