import React, {useEffect, useState} from 'react'

export default function Success({isActive, setIsActive}) {
	let min = 0
	let max = 65535
	const random = () => Math.floor(Math.random() * (max - min)) + min
	const [randId, setRandId] = useState(random)

	const injectStyle = (style) => {
		const styleElement = document.createElement('style')
		styleElement.setAttribute('id', 'successStyleSheet')
		let styleSheet = null
		document.head.appendChild(styleElement)
		styleSheet = styleElement.sheet
		styleSheet.insertRule(style, styleSheet.cssRules.length)
	}

	let stroke =	`
		@keyframes stroke {
			100% { stroke-dashoffset: 0; }
		}
	`
	let scale = `
		@keyframes scale {
			0%, 100% { transform: none;	}
			50% {	transform: scale3d(1.1, 1.1, 1); }
		}
	`
	let keyframes = [stroke, scale] 

	useEffect(() => {
		isActive ? (
			keyframes.map((type) => injectStyle(type)),
			setRandId(random)
		)
		: 
			document.getElementById('successStyleSheet') !== null ? 
				document.head.removeChild(document.getElementById('successStyleSheet'))
		:
			console.log('isActive', isActive)

	}, [isActive])


	// Styles
	let wrapper = {
		width: '100px',
		height: '100px',
		animation: 'fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both',
		opacity: isActive ? "1" : "0",
		visibility: isActive ? "visible" : "hidden",
		transition: "all 1s",
	}
	
	let outer_circle = {
		//fill: '#fff',
		stroke: 'rgb(34 197 94)',
		strokeDasharray: 166,
		strokeDashoffset: 166,
		animation: 'stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards'
	}
	
	let checkmark_check = {
		stroke: 'rgb(34 197 94)',
		transformOrigin: '50% 50%',
		strokeDasharray: 48,
		strokeDashoffset: 48,
		animation: 'stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards',
	}

	return (
		<svg key={randId} style={wrapper} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" strokeWidth={2}>
			<circle style={outer_circle} cx="26" cy="26" r="25" fill="none" />
			<path style={checkmark_check} fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
		</svg>
	)
}