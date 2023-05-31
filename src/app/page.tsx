import About from './Components/About'
import Home  from './Components/Home'
import Projects from './Components/Projects'

export default function Page() {
  
  return (
    <main className=" min-h-screen p-24 ">
      <Home/>
      <Projects />
      <About />
    </main>
  )
}
