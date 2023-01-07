import React, { useEffect, createRef, useState, RefObject } from "react"
import AboutDiv from "./AboutDiv"
import AcadDiv from "./AcadDiv"
import AdmDIv from "./AdmDiv"
import CdcDiv from "./CdcDiv"
import { CSSTransition } from "react-transition-group"
import { Transition } from "react-transition-group"

type Props = {
	toggleMenu: boolean
	setToggleMenu: (toggleMenu: boolean) => void
}

const MenuOverlay = (props: Props) => {
	const [toggleAbout, setToggleAbout] = useState(false)
	const [toggleAcad, setToggleAcad] = useState(false)
	const [toggleAdm, setToggleAdm] = useState(false)
	const [togglecdc, setTogglecdc] = useState(false)

	const handleAbout = (toggleAbout: boolean) => setToggleAbout(!toggleAbout)
	const handleAcad = (toggleAcad: boolean) => setToggleAcad(!toggleAcad)
	const handleAdm = (toggleAdm: boolean) => setToggleAdm(!toggleAdm)
	const handlecdc = (togglecdc: boolean) => setTogglecdc(!togglecdc)

	return (
		<nav
			className={`fixed flex top-0 lg:left-0 w-full px-10 z-10 h-screen pt-12 bg-gray-900 transform delay-100 transition-all duration-300 ${
				props.toggleMenu
					? "opacity-100 translate-x-0"
					: "opacity-0 -translate-x-full"
			}`}
		>
			<ul className='w-full flex flex-col items-start max-w-[10rem] '>
				<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'>
					<a
						href='/'
						className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
						onClick={() => {
							props.setToggleMenu(false)
						}}
					>
						Home
					</a>
				</li>
				<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'>
					<a
						href='#'
						className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
						onClick={() => {
							handleAbout(toggleAbout)
							toggleAcad ? handleAcad(toggleAcad) : null
							toggleAdm ? handleAdm(toggleAdm) : null
							togglecdc ? handlecdc(togglecdc) : null
						}}
					>
						About Us
					</a>
				</li>
				<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'>
					<a
						href='#'
						className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
						onClick={() => {
							handleAcad(toggleAcad)
							toggleAbout ? handleAbout(toggleAbout) : null
							toggleAdm ? handleAdm(toggleAdm) : null
							togglecdc ? handlecdc(togglecdc) : null
						}}
					>
						Academics
					</a>
				</li>
				<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'>
					<a
						href='#'
						className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
						onClick={() => {
							handleAdm(toggleAdm)
							toggleAbout ? handleAbout(toggleAbout) : null
							togglecdc ? handlecdc(togglecdc) : null
							toggleAcad ? handleAcad(toggleAcad) : null
						}}
					>
						Admissions
					</a>
				</li>
				<li className='flex w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out'>
					<a
						href='#'
						className='h-full w-full py-2 font-semibold lg:text-3xl text-lg text-white'
						onClick={() => {
							handlecdc(togglecdc)
							toggleAbout ? handleAbout(toggleAbout) : null
							toggleAcad ? handleAcad(toggleAcad) : null
							toggleAdm ? handleAdm(toggleAdm) : null
						}}
					>
						Career Development Center
					</a>
				</li>
			</ul>

			<Transition in={toggleAbout} timeout={300} unmountOnExit>
				{(state) => {
					switch (state) {
						case "entering":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<AboutDiv />
								</div>
							)
						case "entered":
							return (
								<div className='opacity-100 transition-opacity duration-300 ease-in'>
									<AboutDiv />
								</div>
							)
						case "exiting":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<AboutDiv />
								</div>
							)
						case "exited":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<AboutDiv />
								</div>
							)
						default:
							return null
					}
				}}
			</Transition>
			<Transition in={toggleAcad} timeout={300} unmountOnExit>
				{(state) => {
					switch (state) {
						case "entering":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<AcadDiv />
								</div>
							)
						case "entered":
							return (
								<div className='opacity-100 transition-opacity duration-300 ease-in'>
									<AcadDiv />
								</div>
							)
						case "exiting":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<AcadDiv />
								</div>
							)
						case "exited":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<AcadDiv />
								</div>
							)
						default:
							return null
					}
				}}
			</Transition>
			<Transition in={toggleAdm} timeout={300} unmountOnExit>
				{(state) => {
					switch (state) {
						case "entering":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<AdmDIv />
								</div>
							)
						case "entered":
							return (
								<div className='opacity-100 transition-opacity duration-300 ease-in'>
									<AdmDIv />
								</div>
							)
						case "exiting":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<AdmDIv />
								</div>
							)
						case "exited":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<AdmDIv />
								</div>
							)
						default:
							return null
					}
				}}
			</Transition>
			<Transition in={togglecdc} timeout={300} unmountOnExit>
				{(state) => {
					switch (state) {
						case "entering":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<CdcDiv />
								</div>
							)
						case "entered":
							return (
								<div className='opacity-100 transition-opacity duration-300 ease-in'>
									<CdcDiv />
								</div>
							)
						case "exiting":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<CdcDiv />
								</div>
							)
						case "exited":
							return (
								<div className='opacity-0 transition-opacity duration-300 ease-in'>
									<CdcDiv />
								</div>
							)
						default:
							return null
					}
				}}
			</Transition>
		</nav>
	)
}

export default MenuOverlay
