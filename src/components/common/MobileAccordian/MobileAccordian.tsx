import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'

interface PropTypes {
	HeaderComponent?: any
	DetailsComponent?: any
}

export default function MobileAccordian({ HeaderComponent, DetailsComponent }: PropTypes) {

	const [isActive, setIsActive] = useState(false)
	return (
		<>
			<div className={`flex justify-between ${isActive?'bg-darkBlue text-white':'bg-white'} items-baseline px-5 py-4`}>
				<div>{HeaderComponent}</div>
				<div onClick={() => setIsActive(!isActive)} >{(isActive) ? (
					<FaAngleUp size='1rem' />
				) : (
					<FaAngleDown size='1rem' />
				)}</div>
			</div>
			{isActive && <div className='bg-white'>{DetailsComponent}</div>}
		</>
	)
}
