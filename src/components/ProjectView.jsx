// DEPENDENCIES
import { Link } from "react-router"
// COMPONENTS
import H2 from "./H2"
import SkillTag from "./SkillTag"
import H3 from "./H3"
import ProjectLink from "./ProjectLink"
// SVG
import arrowBullet from "../assets/icons/arrow-bullet.svg"
// import githubSvg from "../assets/icons/github-light.svg"


const ProjectView = ({ projectData }) => {
  return (
    <section className=" max-w-full rounded-t-[15px] overflow-hidden md:drop-shadow-[0_4px_30px_rgba(0,0,0,0.25)] text-dark mt-[40px] text-xs md:text-sm md:w-[830px]md:mt-[0px]">
      <div className="pt-[40px] px-[40px] pb-[40px] md:px-[80px] md:pb-[50px] bg-light ">
        <p>{projectData.type}</p>
        <p className="my-[10px]">{projectData.year}</p>
        <H2 title={projectData.title} />
        <SkillTag tags={projectData.tags} />
        <p>{projectData.desc}</p>
      </div>
      <div className=" bg-white pt-[50px] px-[20px] pb-[150px] md:pt-[60px] md:px-[40px] md:pb-[200px] ">
        <H3 title="Objectifs" />
        <ul className="mt-[15px] mb-[60px]">
          {projectData.objectives.map((objective) => {
            return <li key={objective} className="flex gap-[5px] mt-[5px] items-start">
              <img src={arrowBullet} alt="Icone flèche utilisée comme puce" className="mt-[4px] md:mt-[6px] " />
              {objective}
            </li>
          })}
        </ul>
        <div className="flex flex-col md:items-end width-full">
          <H3 title="Visualisation du projet" />
          <div className="flex flex-wrap w-full justify-center  md:gap-[10px] mt-[30px] mb-[50px] md:mb-[60px] ">
            <img src={projectData.images[0].src} alt={projectData.images[0].alt} className=" w-[513px] max-w-[100%] " />
            <img src={projectData.images[1].src} alt={projectData.images[1].alt} className="hidden md:block w-[161px] " />
          </div>
        </div>
        <H3 title="Remarques" />
        {projectData.remarques.map((remark) => {
          return <p key={remark} className="mt-[20px]">{remark}</p>
        })}
        <div className="flex justify-center gap-[30px] mt-[80px] md:justify-end  md:mt-[100px] md:mr-[40px] ">
          { projectData.github && <ProjectLink link={projectData.github} value="Github" /> }
          { projectData.live && <ProjectLink link={projectData.live} value="Demo" />  }

        </div>

      </div>
    </section>
  )
}

export default ProjectView