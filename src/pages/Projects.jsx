// DEPENDENCIES
import { useState } from "react"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
// COMPONENTS
import Header from "../components/navigation/Header"
import H1 from "../components/typography/H1"
import SimpleSlider from "../components/ui/Slider"
import ProjectView from "../components/ui/ProjectView"
import Blob from "../components/ui/Blob"
// DATA
import data from "../data/projects.json"
// IMAGE
import sprout from "../assets/sprout.png"



const Projects = () => {
  const [id, setId] = useState(0)
  return (
    <>
      <Header />
      <div className="relative">
        <div className="hidden md:block md:bg-red md:w-[30%] md:h-full  md:absolute  md:top-0 md:right-0 md:-z-1 ">
        </div>

        <main className="full-container font-primary pt-[20px] md:main-container md:pt-[50px] md:flex md:items-stretch md:gap-[40px]">

          {/* DESKTOP LEFT SIDE : SLIDER */}
          <div className="mx-[20px] md:mx-[0px] md:flex md:flex-col md:justify-between">
            <H1 title="Mes projets" />
            {/* SLIDER */}
              <SimpleSlider projectData={data.projects} setActiveProjectId={setId} />
              <motion.div 
              className="mt-auto relative hidden md:block"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              >
                <Blob color="#FEF4EB" position="absolute -bottom-[80px] -left-[50px] -z-1" />
                <img src={sprout} alt="Jeune pousse" className="mx-auto"/>
              </motion.div>
          </div>

          {/* DESKTOP RIGHT SIDE : PROJECT VIEW */}
          <ProjectView projectData={data.projects[id]} />

        </main>
      </div>
    </>
  )
}

export default Projects






{/* <button className="cursor-pointer px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 duration-200">
Figma
</button> */}

