// DEPENDENCIES
import { Link } from "react-router"
import Wave from "react-wavify"
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
// COMPONENTS
import Header from "../components/navigation/Header"
import H1 from "../components/typography/H1"
import H2 from "../components/typography/H2"
import SkillBlock from "../components/ui/SkillBlock"
import Collapse from "../components/ui/Collapse"
import BtnScrollToTop from "../components/utils/BtnScrollToTop"
import useIsDesktop from "../components/utils/useIsDesktop"
// DATA
import data from "../data/collapses.json"
import techData from "../data/techIcons.json"
// IMAGE
import womanTea from "../assets/tea-woman.png"
import WomanTeaMobile from "../assets/tea-woman-mini.png"
import rabbitIllustration from "../assets/illustration-rabbit.png"
import womanFlower from "../assets/flower-woman.png"
import womanFlowerMobile from "../assets/flower-woman-mini.png"
// ICON SVG
import cardContact from "../assets/icons/card-contact.svg"
import downloadSvg from "../assets/icons/download-svg.svg"
import smoke from "../assets/fumee-gif.gif"






const About = () => {

  const isDesktop = useIsDesktop(991)

  return (
    <>
      <Header />
      <main className="mt-[50px] text-dark text-xs md:text-sm">
        {/* PRESENTATION SECTION */}
        <section className="main-container mb-[50px] md:mb-[100px] ">
          <H1 title="A propos" />
          <div className="font-primary flex items-start gap-[35px] mt-[20px] md:mt-[50px]">

            {/* IMAGE FOR DESKTOP */}
            {isDesktop && (
              <motion.div
                className="w-[380px] ml-[20px] relative -z-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0, duration: 1 }}
              >
                <img src={womanTea} alt="Femme tenant une énorme tasse de thé" className=" " />
                <img src={smoke} alt="fumée" className="absolute -top-[130px] left-[80px] opacity-[0.3]" />
              </motion.div>
            )}

            <div className="flex-1">

              <div className="flex items-start gap-[15px]">
                {/* IMAGE FOR MOBILE */}
                <motion.img
                  src={WomanTeaMobile} alt="Femme tenant une énorme tasse de thé"
                  className="block md:hidden w-[170px] "
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 1 }}
                />
                <div className="font-secondary mt-[50px] md:mt-[20px]  mb-[30px]">
                  <H2 title="Hello," customClass="ml-[10px]" />
                  <motion.h3
                    className="text-lg"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 1 }}
                  >Moi c'est Hélène Canovas</motion.h3>
                </div>
              </div>

              <motion.div
                className="mt-[20px]"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                >
                <p>Je suis développeuse web en formation et passionnée par la création d’interfaces modernes et créatives. Après plusieurs années à apprendre en autodidacte, j’ai décidé de me lancer à fond dans ce domaine qui me fascine.</p>
                <p className="my-[15px] md:my-[30px]">J’aime concevoir des expériences fluides et accessibles, donner vie aux idées avec du code et toujours apprendre de nouvelles technologies. Curieuse et créative, je puise aussi mon inspiration dans l’art digital et le design.</p>
                <p>Actuellement en recherche d’une alternance en développement front-end ou full stack, je suis basée à Dijon et ouverte au full remote.</p>
                <p className="my-[15px] md:my-[30px]">En dehors du code, j’adore résoudre des énigmes, assembler des puzzles et la musique. Et surtout, je ne dis jamais non à une bonne tasse de thé – qu’il pleuve, qu’il vente ou qu’il soit 3h du matin, c’est toujours le bon moment !</p>
                <div className="mt-[30px] flex items-center justify-center mb-[20px] gap-[5px] md:mb-[40px]  md:gap-[10px] md:justify-start ">
                  <p className="max-w-[70%] md:max-w-[100%] text-center md:text-left">Si mon profil vous intéresse, n’hésitez pas à me contacter</p>
                  <Link to="/contact" aria-label="lien vers la page contact" className="w-[47px] block cursor-pointer rounded-[5px]  duration-200 ease-in-out">
                    <motion.img
                      src={cardContact} alt="icone de contact"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    /></Link>
                </div>

                {/* CV */}
                <div className="flex justify-center">
                  <motion.a
                    href="/CV_Helene_Canovas.pdf" download="CV_Helene_Canovas_2025"
                    className="group flex items-center gap-[5px] w-fit "
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ ease: "easeInOut" }}
                  ><img src={downloadSvg} alt="icone de téléchargement" />
                    <p className="font-secondary text-grey text-center  group-hover:text-orange">Télécharger mon CV</p>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className=" py-[70px] lg:py-[100px] bg-light mt-[100px] relative">
          <Wave
            fill="#FEF4EB"
            paused={false}
            options={{ height: 20, amplitude: 15, speed: 0.2, points: 3 }}
            className="absolute -top-[50px] left-0 w-full h-full -z-1"
          />
          <div className="main-container">
            <H2 title="Mes compétences" customClass="ml-[10px]" />
            <div className="flex items-end gap-[20px] justify-around ">

              <motion.div
                className="mt-[30px] md:mt-[50px]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {/* SKILLBLOCKS */}
                {techData?.techIcons.map(data => {
                  return <SkillBlock key={data.id} techData={data} />
                })}
              </motion.div>
              {isDesktop && (
                <motion.div
                className="mb-[40px] relative z-2 mr-[40px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
                >
                <img src={rabbitIllustration} alt="illustration d'un lapin en flat design" />
                <motion.svg
                  id="visual"
                  viewBox="0 0 500 500"
                  width="500"
                  height="500"
                  className="absolute bottom-[50px] -left-[50px] -z-1"
                  >
                  <g transform="translate(255.7523821056454 287.6678617641759)">
                    <motion.path
                      animate={{
                        d: [
                          "M122.2 -128.9C157.2 -87.2 183.6 -43.6 187.3 3.7C190.9 50.9 171.8 101.8 136.8 122.7C101.8 143.5 50.9 134.3 0.1 134.1C-50.7 134 -101.4 143 -139 122.2C-176.7 101.4 -201.3 50.7 -199.1 2.2C-196.9 -46.2 -167.7 -92.4 -130.1 -134.1C-92.4 -175.7 -46.2 -212.9 -1.3 -211.6C43.6 -210.3 87.2 -170.5 122.2 -128.9",
                          "M129.2 -116C167.8 -90.5 199.9 -45.3 201.7 1.8C203.5 48.8 174.9 97.6 136.2 139.2C97.6 180.9 48.8 215.5 9 206.5C-30.9 197.5 -61.8 145.1 -82.6 103.4C-103.4 61.8 -114.2 30.9 -122.9 -8.7C-131.7 -48.3 -138.3 -96.6 -117.5 -122.1C-96.6 -147.6 -48.3 -150.3 -1.5 -148.8C45.3 -147.3 90.5 -141.5 129.2 -116",
                        ],
                        transition: { repeat: Infinity, repeatType: "mirror", duration: 4, ease: "easeInOut" },
                      }}
                      d="M122.2 -128.9C157.2 -87.2 183.6 -43.6 187.3 3.7C190.9 50.9 171.8 101.8 136.8 122.7C101.8 143.5 50.9 134.3 0.1 134.1C-50.7 134 -101.4 143 -139 122.2C-176.7 101.4 -201.3 50.7 -199.1 2.2C-196.9 -46.2 -167.7 -92.4 -130.1 -134.1C-92.4 -175.7 -46.2 -212.9 -1.3 -211.6C43.6 -210.3 87.2 -170.5 122.2 -128.9"
                      fill="#081645"
                      ></motion.path>
                  </g>
                </motion.svg>
              </motion.div>
                    )}
            </div>
          </div>
        </section>

        {/* CAREER SECTION */}
        <section className="main-container pt-[40px] md:pt-[50px] pb-[100px] md:pb-[150px] ">
          <H2 title="Mon parcours" customClass="ml-[10px]" />
          <div className="md:flex md:justify-around md:items-start md:gap-[20px] mt-[30px] md:mt-[50px] ">
            {isDesktop && (
              <motion.img
              src={womanFlower} alt="Illustration d'une femme dans une fleur l'arrosant pour desktop"
              className="w-[407px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
              />
            )}
            <motion.div
              className="w-full md:max-w-[500px] font-primary no-before "
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              {/* COLLAPSES */}
              {data?.collapses.map(item => {
                return <Collapse key={item.id} data={item} />
              })}
              <div className="mt-[40px] ms:mt-[80px]">
                <strong className=" font-p-bold">Mon objectif ? </strong>
                Trouver une alternance (front/full-stack) ou un poste en développement front-end où je pourrai m’épanouir et apporter ma touche, que ce soit en full remote ou dans la région de Dijon.
              </div>

              {/* BUTTON FOR DESKTOP */}
              <BtnScrollToTop customClass={"mx-auto mt-[80px] cursor-pointer hidden md:block"} />

            </motion.div>
          </div>

          {/* BUTTON AND IMG FOR MOBILE */}
          <div className="flex md:hidden mt-[60px] justify-around items-center">
            <motion.img
              src={womanFlowerMobile} alt="Illustration d'une femme dans une fleur l'arrosant pour mobile "
              className="w-[220px] max-w-[80%]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
            />
            <BtnScrollToTop customClass={"mr-[20px]"} />
          </div>

        </section>
      </main>
    </>
  )
}

export default About