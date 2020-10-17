import Layout from "../components/layout"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Timeline from "../components/timeline"

const Swann = () => (
  <Layout>
    <Parallax pages={4}>
      <Hero offset={0} factor={1} />
      <Projects offset={1} factor={1} />
      <Timeline offset={2} factor={1} />
      {/* <About offset={4} factor={1} />
      <Contact offset={5} factor={1} /> */}
    </Parallax>
  </Layout>
)

export default Swann
