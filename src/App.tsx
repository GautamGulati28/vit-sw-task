import React from "react"
import Intro from "./components/Intro"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

const App: React.FC = () => {
	return (
		<main className='font-poppins m-0 p-0'>
			<Intro />
			<Hero />
			<Footer />
		</main>
	)
}

export default App
