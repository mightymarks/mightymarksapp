declare module '*.png' {
	const content: string
	export default content
}

declare module '*.woff2' {
	const content: string
	export default content
}

declare module '*.svg' {
	const content: (props: React.SVGProps<SVGSVGElement>) => JSX.Element
	export default content
}
