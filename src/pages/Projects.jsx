// DEPENDENCIES
import { useState } from "react"
// COMPONENTS
import Header from "../components/Header"
import H1 from "../components/H1"
import SimpleSlider from "../components/Slider"
import ProjectView from "../components/ProjectView"
// DATA
import data from "../data/projects.json"






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
          <div className="mx-[20px] md:mx-[0px]">
            <H1 title="Mes projets" />
            {/* SLIDER */}
              <SimpleSlider projectData={data.projects} setActiveProjectId={setId} />
          </div>


          {/* DESKTOP RIGHT SIDE : PROJECT VIEW */}
          <ProjectView projectData={data.projects[id]} />


        </main>

      </div>
    </>
  );
};

export default Projects






{/* <button className="cursor-pointer px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 duration-200">
Figma
</button> */}

