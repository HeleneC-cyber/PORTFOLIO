// DEPENDENCIES
import { useState } from "react"
// COMPONENTS
import Header from "../components/Header"
import H1 from "../components/H1"
import ProjectView from "../components/ProjectView"
// DATA
import data from "../data/projects.json"





const Projects = () => {
  const [id, setId] = useState(1)
  return (
    <>
      <Header />
      <div className="relative">
        <div className="hidden md:block md:bg-red md:w-[30%] md:h-full  md:absolute  md:top-[-50px] md:right-0 md:-z-1 ">
        </div>

        <main className="full-container font-primary mt-[20px] md:main-container md:mt-[50px] md:flex md:gap-[40px] md:justify-center md:items-start ">
          <div className="mx-[20px] md:mx-[0px]">
            <H1 title="Mes projets" />


            <div className="w-[390px] max-w-full h-[300px] bg-orange text-2xl">

              {/* <Slider /> */}
    

            </div>



          </div>

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

