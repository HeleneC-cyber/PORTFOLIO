// DEPENDENCIES
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
// COMPONENTS
import Header from "../components/navigation/Header.jsx"
import Blob from "../components/ui/Blob.jsx"
// IMAGE
import womanHorizon from "../assets/woman-horizon.png"
import blobBg from "../assets/blob-bg.svg"



const pageNotFound = () => {
  return (
    <>  
    <Header />
    <main className="main-container font-primary text-dark flex flex-col justify-center items-center text-sm mt-[50px] mb-[70px] md:mb-[120px]">
      <motion.h1 
      className="text-[96px] md:text-[128px] font-secondary leading-[1] relative after:content-[''] after:absolute after:rounded-full after:bg-red after:size-[54px] after:top-[20px] after:left-full after:-translate-x-1/2 after:-z-1 md:after:size-[67px] md:after:top-[30px] md:after:left-[98%] " 
      initial={{x: -30, opacity: 0}} 
      animate={{x: 0, opacity: 1}} 
      transition={{duration: 1}}
      >404</motion.h1>
      <motion.p 
      className="text-xl"
       initial={{x: -20, opacity: 0}} 
       animate={{x: 0, opacity: 1}} 
       transition={{delay: 0.2, duration: 1}}
      >Page introuvable</motion.p>
      <motion.div 
      className="relative flex justify-center w-full mt-[50px] mb-[40px] md:mt-[90px] md:mb-[50px]"
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      transition={{delay: 0.2, duration: 1}}
      >
        <Blob color="#FEF4EB" position="hidden md:block rotate-50 absolute  top-1/2 -translate-y-1/2 -z-1" />
        <img src={blobBg} alt="Forme arrondie en arrière-plan" className="block md:hidden absolute w-[390px] bottom-[50px] left-1/2 -translate-x-1/2 -z-1" />
        <img src={womanHorizon} alt="Femme sur une échelle" className="w-[187px]" />
      </motion.div>
        <motion.a 
        href="/" 
        className="font-p-bold hover:text-orange md:text-md" 
        initial={{y: 20, opacity: 0}} 
        animate={{y: 0, opacity: 1}} 
        transition={{delay: 0.2, duration: 1}}
        >Retour à l'accueil</motion.a>
    </main>
    </>
  )
}

export default pageNotFound