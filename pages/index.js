import Layout from './components/layout.js'
import Hero from './components/hero.js'
import Menu from './components/menu.js'
import Gallery from './components/gallery.js'
import Reservation from './components/reservation.js'
import Contact from './components/contact.js'
import About from './components/about.js'

const Home = () =>  {
  return (
    <Layout>
			<Hero />
      <Menu />
      <Gallery />
      <Reservation />
      <About />
      <Contact />
		</Layout>
	)
}

export default Home
