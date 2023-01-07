import React from "react"

const AdmDiv: React.FC = () => {
	return (
		<ul className='h-full flex flex-col align-center justify-start w-full absolute left-[12.5rem] lg:left-[20rem] overflow-hidden lg:max-w-full max-w-[10rem]'>
			<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out'>
				<a
					href='/'
					className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
				>
					Overview
				</a>
			</li>
			<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out'>
				<a
					href='/'
					className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
				>
					Programs Offered
				</a>
			</li>
			<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out'>
				<a
					href='/'
					className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
				>
					Undergraduate
				</a>
			</li>
			<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out'>
				<a
					href='/'
					className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
				>
					Postgraduate
				</a>
			</li>
			<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out'>
				<a
					href='/'
					className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
				>
					International
				</a>
			</li>
			<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-500 ease-in-out'>
				<a
					href='/'
					className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
				>
					STARS
				</a>
			</li>
		</ul>
	)
}

export default AdmDiv
