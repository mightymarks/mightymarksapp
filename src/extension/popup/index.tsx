import { styled } from 'linaria/react'
import { render } from 'react-dom'
import SignIn from '../../components/SignIn'

const Layout = styled.div`
	:global() {
		* {
			margin: 0;
			padding: 0;
		}
		html {
			box-sizing: border-box;
		}

		*,
		*:before,
		*:after {
			box-sizing: inherit;
		}
	}

	width: 200px;
`

const App = () => (
	<Layout>
		<SignIn />
	</Layout>
)

render(<App />, document.getElementById('app'))
