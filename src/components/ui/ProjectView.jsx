// DEPENDENCIES
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
// COMPONENTS
import H2 from "../typography/H2"
import SkillTag from "./SkillTag"
import H3 from "../typography/H3"
import ProjectLink from "../utils/ProjectLink"
import BtnScrollToTop from "../utils/BtnScrollToTop"
// SVG
import arrowBullet from "../../assets/icons/arrow-bullet.svg"



const ProjectView = ({ projectData }) => {
  return (
    <section className=" max-w-full rounded-t-[15px] overflow-hidden md:drop-shadow-[0_4px_30px_rgba(0,0,0,0.25)] text-dark mt-[40px] text-xs md:text-sm md:w-[830px]md:mt-[0px]">
      {/* PROJECT CONTEXT */}
      <motion.div
        className="pt-[40px] px-[40px] pb-[40px] md:px-[80px] md:pb-[50px] bg-light "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>{projectData.type}</p>
        <p className="my-[10px]">{projectData.year}</p>
        <H2 title={projectData.title} />
        <SkillTag tags={projectData.tags} />
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >{projectData.desc}</motion.p>
      </motion.div>
      <motion.div
        className=" bg-white pt-[50px] px-[20px] pb-[150px] md:pt-[60px] md:px-[40px] md:pb-[200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >

        {/* OBJECTIVES */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <H3 title="Objectifs" customClass="ml-[21px]" />
          <ul className="mt-[15px] mb-[60px]">
            {projectData.objectives.map((objective) => {
              return <li key={objective} className="flex gap-[5px] mt-[5px] items-start">
                <img src={arrowBullet} alt="Icone flèche utilisée comme puce" className="mt-[4px] md:mt-[6px] " />
                {objective}
              </li>
            })}
          </ul>
        </motion.div>

        {/* PROJECT IMAGES */}
        <motion.div
          className="flex flex-col md:items-end width-full"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <H3 title="Visualisation du projet" customClass="ml-[21px]" />
          <div className="flex flex-wrap w-full justify-center  md:gap-[10px] mt-[30px] mb-[50px] md:mb-[60px] ">
            <img src={projectData.images[0].src} alt={projectData.images[0].alt} className=" w-[513px] max-w-[100%] " />
            <img src={projectData.images[1].src} alt={projectData.images[1].alt} className="hidden md:block w-[161px] " />
          </div>
        </motion.div>

        {/* PROJECT REMARKS */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <H3 title="Remarques" customClass="ml-[21px]" />
          {projectData.remarques.map((remark) => {
            return <p key={remark} className="mt-[20px]">{remark}</p>
          })}
          <div className="flex flex-wrap justify-center gap-[30px] mt-[80px] md:justify-end  md:mt-[100px] md:mr-[40px] ">
            {projectData.github && <ProjectLink link={projectData.github} value="Github" />}
            {projectData.live && <ProjectLink link={projectData.live} value="Demo" />}
          </div>

          <BtnScrollToTop customClass="block mx-auto mt-[80px] md:hidden" />
        </motion.div>

      </motion.div>
    </section>
  )
}

export default ProjectView