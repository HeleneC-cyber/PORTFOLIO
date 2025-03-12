import { Link } from "react-router"
// import Wave from "react-wavify"

import Header from "../components/Header"
import H1 from "../components/H1"
import SkillBlock from "../components/SkillBlock"

import womanTea from "../assets/tea-woman.png"
import littleWomanTea from "../assets/tea-woman-mini.png"
import cardContact from "../assets/icons/card-contact.svg"
import downloadSvg from "../assets/icons/download-svg.svg"


import copyright from "../assets/icons/copyright.svg";
import H2 from "../components/H2"

const icons = [copyright, { copyright }, { copyright }, { copyright }];


const About = () => {
  return (
    <>
      <Header />
      <main className="mt-[50px] text-dark ">
        <section className="main-container mb-[50px] md:mb-[100px] ">
          <H1 title="A propos" />
          <div className="font-primary text-xs md:text-sm flex items-start gap-[35px] mt-[20px] md:mt-[50px]">
            {/* IMAGE FOR DESKTOP */}
            <img src={womanTea} alt="Femme tenant une énorme tasse de thé" className="hidden md:block w-[380px] md:ml-[20px]" />

            <div>

              <div className="flex items-start gap-[15px]">
                {/* IMAGE FOR MOBILE */}
                <img src={littleWomanTea} alt="Femme tenant une énorme tasse de thé" className="block md:hidden w-[170px] " />
                <div className="font-secondary mt-[50px] md:mt-[20px]  mb-[30px]">
                  <H2 title="Hello," />
                  <p className="text-lg">Moi c'est Hélène Canovas</p>
                </div>
              </div>

              <div className="mt-[20px]">
                <p >Je suis développeuse web en formation et passionnée par la création d’interfaces modernes et créatives. Après plusieurs années à apprendre en autodidacte, j’ai décidé de me lancer à fond dans ce domaine qui me fascine.</p>
                <p className="my-[15px] md:my-[30px]">J’aime concevoir des expériences fluides et accessibles, donner vie aux idées avec du code et toujours apprendre de nouvelles technologies. Curieuse et créative, je puise aussi mon inspiration dans l’art digital et le design.</p>
                <p>Actuellement en recherche d’une alternance en développement front-end ou full stack, je suis basée à Dijon et ouverte au full remote.</p>
                <p className="my-[15px] md:my-[30px]">En dehors du code, j’adore résoudre des énigmes, assembler des puzzles et la musique. Et surtout, je ne dis jamais non à une bonne tasse de thé – qu’il pleuve, qu’il vente ou qu’il soit 3h du matin, c’est toujours le bon moment !</p>

                <div className="mt-[30px] flex items-center justify-center mb-[20px] gap-[5px] md:mb-[40px]  md:gap-[10px] md:justify-start ">
                  <p className="max-w-[70%] md:max-w-[100%] text-center md:text-left">Si mon profil vous intéresse, n’hésitez pas à me contacter</p>
                  <Link to="/contact" aria-label="contact" className="w-[47px] block cursor-pointer rounded-[5px] hover:bg-orange duration-200 ease-in-out"><img src={cardContact} alt="icone de contact" /></Link>
                </div>

                <div className="flex justify-center ">
                  <a href="" download="CV_Helene_Canovas_2025" className="group flex items-center gap-[5px] w-fit " ><img src={downloadSvg} alt="icone de téléchargement" className="group-hover:bg-orange rounded-full" />
                    <p className="font-secondary text-grey text-center  group-hover:text-orange">Télécharger mon CV</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="full-container">
          {/* <Wave 
          fill="#FEF4EB"
          paused={false}
          options={{ height: 20, amplitude: 10, speed: 0.5, points: 3 }}
          className="absolute -top-[50px] left-0 w-full h-full -z-1"
        /> */}
          <div className="main-container">
            <H2 title="Mes compétences" />
            <div className="mt-[30px] md:mt-[50px]">
              <SkillBlock title="Frontend" icons={icons} />
            </div>
          </div>
        </section>





      </main>
    </>
  )
}

export default About