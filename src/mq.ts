const breakpoints = {
	mobileS: 320,
	mobileM: 375,
	mobileL: 425,
	tablet: 768,
	laptop: 1024,
	laptopL: 1140,
	laptopXL: 1300,
}

const toEms = (pixels: number) => `${pixels / 16}em`

const fromQuery = (value: number) => `@media (min-width: ${toEms(value)})`
const untilQuery = (value: number) => `@media (max-width: ${toEms(value - 1)})`
const fromUntilQuery = (from: number, until: number) =>
	`@media (min-width: ${toEms(from)}) and (max-width: ${toEms(until - 0.1)})`

export const mobileS = fromQuery(breakpoints.mobileS)
export const mobileM = fromQuery(breakpoints.mobileM)
export const mobileL = fromQuery(breakpoints.mobileL)
export const tablet = fromQuery(breakpoints.tablet)
export const laptop = fromQuery(breakpoints.laptop)
export const laptopL = fromQuery(breakpoints.laptopL)
export const laptopXL = fromQuery(breakpoints.laptopXL)

export const until = {
	mobileS: untilQuery(breakpoints.mobileS),
	mobileM: untilQuery(breakpoints.mobileM),
	mobileL: untilQuery(breakpoints.mobileL),
	tablet: untilQuery(breakpoints.tablet),
	laptop: untilQuery(breakpoints.laptop),
	laptopL: untilQuery(breakpoints.laptopL),
	laptopXL: untilQuery(breakpoints.laptopXL),
}

export const from = {
	mobileS: {
		until: {
			mobileM: fromUntilQuery(breakpoints.mobileS, breakpoints.mobileM),
			mobileL: fromUntilQuery(breakpoints.mobileS, breakpoints.mobileL),
			tablet: fromUntilQuery(breakpoints.mobileS, breakpoints.tablet),
			laptop: fromUntilQuery(breakpoints.mobileS, breakpoints.laptop),
			laptopL: fromUntilQuery(breakpoints.mobileS, breakpoints.laptopL),
			laptopXL: fromUntilQuery(breakpoints.mobileS, breakpoints.laptopXL),
		},
	},
	mobileM: {
		until: {
			mobileL: fromUntilQuery(breakpoints.mobileM, breakpoints.mobileL),
			tablet: fromUntilQuery(breakpoints.mobileM, breakpoints.tablet),
			laptop: fromUntilQuery(breakpoints.mobileM, breakpoints.laptop),
			laptopL: fromUntilQuery(breakpoints.mobileM, breakpoints.laptopL),
			laptopXL: fromUntilQuery(breakpoints.mobileM, breakpoints.laptopXL),
		},
	},
	mobileL: {
		until: {
			tablet: fromUntilQuery(breakpoints.mobileL, breakpoints.tablet),
			laptop: fromUntilQuery(breakpoints.mobileL, breakpoints.laptop),
			laptopL: fromUntilQuery(breakpoints.mobileL, breakpoints.laptopL),
			laptopXL: fromUntilQuery(breakpoints.mobileL, breakpoints.laptopXL),
		},
	},
	tablet: {
		until: {
			laptop: fromUntilQuery(breakpoints.tablet, breakpoints.laptop),
			laptopL: fromUntilQuery(breakpoints.tablet, breakpoints.laptopL),
			laptopXL: fromUntilQuery(breakpoints.tablet, breakpoints.laptopXL),
		},
	},
	laptop: {
		until: {
			laptopL: fromUntilQuery(breakpoints.laptop, breakpoints.laptopL),
			laptopXL: fromUntilQuery(breakpoints.laptop, breakpoints.laptopXL),
		},
	},
	laptopL: {
		until: {
			laptopXL: fromUntilQuery(breakpoints.laptopL, breakpoints.laptopXL),
		},
	},
}
