import React from "react"

const Hero: React.FC = () => {
	return (
		<div className='pb-10 bg-white flex lg:flex-row pt-[5rem] lg:pt-[10rem] justify-center gap-[2rem] lg:gap-[5rem] md:flex-col flex-col overflow-hidden align-center'>
			<h1 className='lg:pt-[10rem] pb-5 font-bold text-black lg:text-6xl md:text-4xl text-3xl tracking-[0.13em] leading-[1.5em] lg:leading-[6rem] text-center lg:text-left'>
				OFFICE OF <br /> STUDENTS’ <br />
				WELFARE:
			</h1>
			<div className='flex flex-col lg:gap-[4rem] gap-[2rem] justify-center align-center'>
				<div className='flex justify-center'>
					<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-[255px]'>
						<img
							src='/assets/Clubs.png'
							className='max-w-xs rounded-2xl hover:blur-xl'
							alt='Clubs'
						/>
						<a href='#!'>
							<div
								className='text-center tracking-widest opacity-100 lg:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-5xl text-white font-semibold rounded-[1.4rem]'
								style={{ backgroundColor: "rgba(0, 0, 0,0.7)" }}
							>
								CLUBS
							</div>
						</a>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-[255px]'>
						<img
							src='/assets/teams.png'
							className='max-w-xs rounded-2xl hover:blur-xl'
							alt='Teams'
						/>
						<a href='#!'>
							<div
								className='text-center tracking-widest opacity-100 lg:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-5xl text-white font-semibold rounded-[1.4rem]'
								style={{ backgroundColor: "rgba(0, 0, 0,0.7)" }}
							>
								TEAMS
							</div>
						</a>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-[255px]'>
						<img
							src='/assets/counselling.png'
							className='max-w-xs rounded-2xl hover:blur-xl'
							alt='COUNSELLING DIVISON '
						/>
						<a href='#!'>
							<div
								className='text-center tracking-widest opacity-100 lg:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-[1.4rem]'
								style={{ backgroundColor: "rgba(0, 0, 0,0.7)" }}
							>
								COUNSELLING DIVISON
							</div>
						</a>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-[255px]'>
						<img
							src='/assets/student-council.png'
							className='max-w-xs rounded-2xl hover:blur-xl'
							alt='STUDENT COUNCIL'
						/>
						<a href='#!'>
							<div
								className='text-center tracking-widest opacity-100 lg:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-4xl text-white font-semibold rounded-[1.4rem]'
								style={{ backgroundColor: "rgba(0, 0, 0,0.7)" }}
							>
								STUDENT COUNCIL
							</div>
						</a>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-[255px]'>
						<img
							src='/assets/program-init.png'
							className='max-w-xs rounded-2xl hover:blur-xl'
							alt='PROGRAMME REPRESENTATIVES'
						/>
						<a href='#!'>
							<div
								className='text-center tracking-widest opacity-100 lg:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold rounded-[1.4rem]'
								style={{ backgroundColor: "rgba(0, 0, 0,0.7)" }}
							>
								PROGRAMME REPRESENTATIVES
							</div>
						</a>
					</div>
				</div>
			</div>
			<div className='flex flex-col lg:gap-[4rem] gap-[2rem] align-center'>
				<div className='flex justify-center'>
					<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-[255px]'>
						<img
							src='/assets/chapters.png'
							className='max-w-xs rounded-2xl hover:blur-xl'
							alt='CHAPTERS'
						/>
						<a href='#!'>
							<div
								className='text-center tracking-widest opacity-100 lg:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-4xl text-white font-semibold rounded-[1.4rem]'
								style={{ backgroundColor: "rgba(0, 0, 0,0.7)" }}
							>
								CHAPTERS
							</div>
						</a>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-[255px]'>
						<img
							src='/assets/newsletter.png'
							className='max-w-xs rounded-2xl hover:blur-xl'
							alt='NEWSLETTER'
						/>
						<a href='#!'>
							<div
								className='text-center tracking-widest opacity-100 lg:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-[1.4rem]'
								style={{ backgroundColor: "rgba(0, 0, 0,0.7)" }}
							>
								NEWSLETTER
							</div>
						</a>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='relative overflow-hidden bg-no-repeat bg-cover h-auto max-w-[255px]'>
						<img
							src='/assets/grievance.png'
							className='max-w-xs rounded-2xl hover:blur-xl'
							alt='GRIEVANCE CELL'
						/>
						<a href='#!'>
							<div
								className='text-center tracking-widest opacity-100 lg:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-4xl text-white font-semibold rounded-[1.4rem]'
								style={{ backgroundColor: "rgba(0, 0, 0,0.7)" }}
							>
								GRIEVANCE CELL
							</div>
						</a>
					</div>
				</div>
				<div className='flex justify-center'>
					<div className='relative overflow-hidden bg-no-repeat bg-cover max-w-[255px]'>
						<img
							src='/assets/campus-event.png'
							className='max-w-xs rounded-2xl hover:blur-xl'
							alt='CAMPUS EVENTS'
						/>
						<a href='#!'>
							<div
								className='text-center tracking-widest opacity-100 lg:opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-4xl text-white font-semibold rounded-[1.4rem]'
								style={{ backgroundColor: "rgba(0, 0, 0,0.7)" }}
							>
								CAMPUS EVENTS
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
