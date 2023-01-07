import React from "react"
import {
	AiFillLinkedin,
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillYoutube
} from "react-icons/ai"
import { FaInstagram, FaGithubSquare } from "react-icons/fa"

const Footer: React.FC = () => {
	return (
		<div className='flex bg-black text-white p-10 justify-evenly flex-col md:flex-row gap-10 w-full lg:flex-row'>
			<div className='max-w-[35rem] pl-4'>
				<div className='mb-5'>
					<h1 className='text-xl mb-3 font-bold'>Important!</h1>
					<p className='lg:text-lg text-md'>
						- WARNING! Don’t Trust Fake {"\u00A0"}
						{"\u00A0"}
						{"\u00A0"}Websites/Pages/Channels
						<br /> - {"\u00A0"}
						<a href='#' className='hover:underline'>
							VIT Campus Tour <br />
						</a>
						- {"\u00A0"}
						<a href='#' className='hover:underline'>
							Career Development Center <br />
						</a>
						-{"\u00A0"}
						{"\u00A0"}
						<a href='#' className='hover:underline'>
							Tender Notifications
						</a>
						<br /> -{"\u00A0"}
						{"\u00A0"}
						<a href='#' className='hover:underline'>
							COVID 19 Initiatives
						</a>
					</p>
				</div>
				<div className='flex gap-8'>
					<a href='#'>
						<AiFillFacebook size={25} />
					</a>
					<a href='#'>
						<AiFillLinkedin size={25} />
					</a>
					<a href='#'>
						<FaInstagram size={25} />
					</a>
					<a href='#'>
						<AiFillTwitterSquare size={25} />
					</a>
					<a href='#'>
						<AiFillYoutube size={25} />
					</a>
				</div>
			</div>
			<div className='flex lg:flex-row flex-col gap-10 overflow-hidden'>
				<div className='flex lg:flex-row gap-10'>
					<ul className='flex flex-col gap-2'>
						<li className='text-[#777] font-bold text-[1.15rem] max-w-[7rem]'>
							Quick Links
						</li>
						<a href='#' className='hover:underline'>
							<li>Admissions</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Ranking & Recognition</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Infrastructure</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Research @ VIT</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>International Relations</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Privacy Policy</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Sitemap</li>
						</a>
					</ul>
					<ul className='flex flex-col gap-2'>
						<li className='text-[#777] font-bold text-[1.15rem] max-w-[7rem] '>
							VITIANS
						</li>
						<a href='#' className='hover:underline'>
							<li>IQAC</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>NATS</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Industrial Visit Form</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Students Code of Conduct</li>
						</a>
					</ul>
				</div>
				<div className='flex lg:flex-row gap-10'>
					<ul className='flex flex-col gap-2'>
						<li className='text-[#777] font-bold text-[1.15rem] max-w-[7rem] '>
							VIT @ CONNECT
						</li>
						<a href='#' className='hover:underline'>
							<li>Intranet</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Student Login</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Peopleorbit</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>VIT Webmail</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>VIT Gmail</li>
						</a>
					</ul>
					<ul className='flex flex-col gap-2'>
						<li className='text-[#777] font-bold text-[1.15rem] max-w-[7rem] '>
							PARENTS
						</li>
						<a href='#' className='hover:underline'>
							<li>Parent Login</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Counselling Divison</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Hotels In Vellore</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Hotels In Vellore</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Campus Life</li>
						</a>
					</ul>
				</div>
				<div className='flex lg:flex-row gap-10'>
					<ul className='flex flex-col gap-2'>
						<li className='text-[#777] font-bold text-[1.15rem] max-w-[7rem] '>
							VISITORS
						</li>
						<a href='#' className='hover:underline'>
							<li>Careers</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Alumni</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Campus Tour</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Contact Us</li>
						</a>
					</ul>
					<ul className='flex flex-col gap-2'>
						<li className='text-[#777] font-bold text-[1.15rem] max-w-[7rem] '>
							COMMITTEESS @ VIT
						</li>
						<a href='#' className='hover:underline'>
							<li>IPR Cell</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Internal Complains Committee</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>General Grievance Redressal Committee</li>
						</a>
						<a href='#' className='hover:underline'>
							<li>Anti Ragging Committee</li>
						</a>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Footer
