declare module '*.png' {
	export default string
}

declare module '*.svg' {
	let SVG: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
	export default SVG
}
