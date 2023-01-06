import React from "react"
import hamMenu from "/menu.svg"

const Intro: React.FC = () => {
	return (
		<div
			style={{ backgroundImage: "url('/main-bg.png')" }}
			className='w-full h-auto scroll-smooth'
		>
			<div className='flex flex-row justify-between pt-2'>
				<img src='/favicon.png' alt='' width={200} />
				<button className='flex flex-row-reverse gap-3 lg:text-4xl md:text-3xl text-2xl mt-6 font-semibold pr-7 md:pb-3 pb-4'>
					<h3 className='text-white hover:text-black'>MENU</h3>
					<img
						src={hamMenu}
						alt=''
						className='text-white lg:pt-2 lg:h-9 lg:w-8 '
					/>
				</button>
			</div>
			<div className='w-full flex align-center justify-center mt-12 pt-6 pb-6'>
				<div className='flex flex-col  max-w-[70rem] justify-center m-5'>
					<h1 className='text-left lg:text-6xl md:text-4xl text-2xl font-bold tracking-[0.15em]'>
						STUDENTS’ WELFARE:
					</h1>
					<p className='lg:text-[1.22em] text-md mt-2 tracking-wide '>
						Small steps lead to big changes and so, every attempt is being made
						by the Office of Students' Welfare for the upliftment of the
						students. The management joins hands with VIT’S Clubs and Chapters
						to make every student find an environment where they can learn and
						grow, together. This provides for a very lively, fun, and
						resourceful community to employ their erudite years. Conscious of
						the influence these active years can have on the minds of the
						expectation of our nation and the globe, VIT endeavours to promote,
						introduce, and expand any and all ventures to shape their minds.
						This is why VIT has a well-organized structure that allows for daily
						activities being conducted by the Clubs and Chapters. These events
						are carefully approved and monitored to ensure the students’ growth.
						We also see several external participants gaining an opportunity to
						participate in our cultural and technical events. We believe our
						students are the future leaders and hence, we provide them with
						multiple opportunities to grow in this domain- Students can find
						their place in the Student Council or may even start a new Club or
						Chapter and get it approved from the Office of Students' Welfare.
						The University's student teams provide exposure and a cordial
						experience for students to interact with and work together. VIT
						expresses support by selecting students and distributing
						scholarships. The University also aids in issuing funding for
						National and International student competition participation. <br />{" "}
						The Office of Students' Welfare is responsible for a plethora of
						initiatives for the benefit of the students. The International
						Students' Welfare overlooks the foreign students’ academic progress,
						and if there is any issue, they step in and support them so they can
						have a general fruitful academic stay in the college. The college
						has a 0% tolerance policy for ragging and hence conducts several
						anti-ragging activities. To make sure that every child is looked
						after, each faculty is assigned around 20 children and they hold
						meetings with the students where they solve all their problems
						together. Also, several welfare activities are hosted for our Day
						Scholars and Day Boarders. The primary aim of the Office of
						Students' Welfare is to make every student in VIT stay safe and we
						work hard towards this goal by joining hands with the Counselling
						Division. Every child is unique, and we provide them with a platform
						to hone their skills and emerge as better individuals.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Intro
