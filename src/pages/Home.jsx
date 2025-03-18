// DEPENDENCIES
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react'
import { Link } from 'react-router'
// COMPONENTS
import Header from '../components/navigation/Header'
// IMAGES
import illustrationHome from '../assets/illustration-home-static.png'
import plantL from '../assets/animated-plant-L.svg'
import plantR1 from '../assets/animated-plant-R-red.svg'
import plantR2 from '../assets/animated-plant-R-yellow.svg'



const Home = () => {

  return (
    <div className="main-container">
      <div className="opacity-0">
        <Header />
      </div>
      <main className="font-primary text-dark relative min-h-[10%] flex flex-col items-center mb-[80px]">
        <motion.h1
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 leading-[1.2] text-2xl w-[420px] max-w-[95%] md:w-[720px] after:size-[20px] md:after:size-[30px] after:bg-red after:rounded-full after:content-[''] after:inline-block after:ml-[5px] md:after:ml-[10px] md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, top: 80, }}
          transition={{
            opacity: { duration: 2, delay: 0.2, ease: "easeInOut" },
            top: { duration: 1.5, delay: 1.5, ease: [0, 0.1, 0.2, 1.01] }
          }}
        >
          Bienvenue sur mon portfolio de frontend
        </motion.h1>

        {/* MAIN ILLUSTRATION */}
        <div className="relative w-fit mt-[230px] mx-[30px]">
          <motion.img
            src={illustrationHome} alt="Femme devant un ordinateur avec un lapin et des plantes" className="w-[670px] max-w-[97%]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.5, ease: "easeInOut" }}
          />
          <motion.img
            src={plantL} alt="Feuille allongée de couleur sable"
            className="absolute w-[180px] -z-1 max-w-[23%] bottom-[25px] -left-[20px] md:max-w-full md:bottom-[35px] md:-left-[40px]"
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: [5, -5] }}
            transition={{
              opacity: { duration: 1, delay: 3, ease: "easeInOut", },
              rotate: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", },
            }}
          />
          <motion.img
            src={plantR1} alt="Feuille de monsterra en rouge"
            className="absolute -z-1 w-[215px] bottom-[60%] right-[30px] md:bottom-[60%] md:right-[30px] max-w-[23%] md:max-w-full"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: [5, -5], opacity: 1 }}
            transition={{
              opacity: { duration: 1, delay: 3.5, ease: "easeInOut" },
              rotate: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", },
            }}
          />
          <motion.img
            src={plantR2} alt="Feuille allongée de couleur jaune"
            className="absolute bottom-[20px] right-0 w-[230px] -z-1 max-w-[30%] md:max-w-full md:-right-[20px]"
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: [6, -4], opacity: 1 }}
            transition={{
              opacity: { duration: 1, delay: 3, ease: "easeInOut" },
              rotate: { duration: 2.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
            }}
          />

          {/* BLOBS */}
          <motion.svg
            className="absolute bottom-[30px] -z-2 max-w-[100%] md:block hidden"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 3.5, ease: "easeInOut" }}
          >
            <motion.path
              fill="#081645"
              d="M44.9,-61.3C58.9,-51.7,71.3,-39.4,76.7,-24.5C82.1,-9.7,80.3,7.9,75,24.4C69.7,40.9,60.8,56.2,47.7,64.9C34.6,73.6,17.3,75.6,1,74.3C-15.4,73,-30.8,68.3,-42.7,59.2C-54.7,50.2,-63.1,36.7,-69.4,21.5C-75.8,6.4,-80,-10.5,-76.9,-26.5C-73.8,-42.5,-63.4,-57.6,-49.3,-67.2C-35.3,-76.8,-17.6,-80.8,-1.1,-79.3C15.5,-77.9,30.9,-70.9,44.9,-61.3Z"
              transform="translate(100 100)"
              animate={{ 
                d: [
                  "M44.9,-61.3C58.9,-51.7,71.3,-39.4,76.7,-24.5C82.1,-9.7,80.3,7.9,75,24.4C69.7,40.9,60.8,56.2,47.7,64.9C34.6,73.6,17.3,75.6,1,74.3C-15.4,73,-30.8,68.3,-42.7,59.2C-54.7,50.2,-63.1,36.7,-69.4,21.5C-75.8,6.4,-80,-10.5,-76.9,-26.5C-73.8,-42.5,-63.4,-57.6,-49.3,-67.2C-35.3,-76.8,-17.6,-80.8,-1.1,-79.3C15.5,-77.9,30.9,-70.9,44.9,-61.3Z",
                  "M44.7,-62C59.1,-51,72.8,-39.6,78.2,-24.9C83.6,-10.3,80.7,7.5,72.5,20.7C64.3,33.9,50.7,42.5,37.7,50.6C24.7,58.8,12.4,66.5,1.1,65.1C-10.2,63.6,-20.4,52.9,-33.3,44.7C-46.2,36.5,-61.8,30.8,-67.6,20.2C-73.4,9.7,-69.4,-5.8,-66,-23.1C-62.6,-40.3,-59.8,-59.4,-48.9,-71.5C-38,-83.6,-19,-88.8,-1.9,-86.1C15.1,-83.4,30.2,-72.9,44.7,-62Z",
                  "M52.8,-71.5C68.6,-61.1,81.7,-46,87.5,-28.4C93.3,-10.8,91.7,9.2,85.1,27.1C78.5,44.9,66.9,60.5,51.9,71.6C36.8,82.6,18.4,89.2,0.2,88.9C-18,88.6,-35.9,81.4,-50.5,70.2C-65.1,59,-76.3,43.7,-82,26.6C-87.6,9.4,-87.7,-9.5,-81.8,-26.3C-75.9,-43,-64.1,-57.4,-49.4,-68.1C-34.8,-78.9,-17.4,-85.9,0.5,-86.7C18.5,-87.4,36.9,-81.8,52.8,-71.5Z",
                ],
              }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 7, ease: "easeInOut" }}
            />
          </motion.svg>

          <motion.svg
            className="absolute -bottom-[270px] -left-[500px] -z-2 scale-30 md:block hidden"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5, ease: "easeInOut" }}
          >
            <motion.path
              fill="#FC8B2B"
              d="M44.9,-61.3C58.9,-51.7,71.3,-39.4,76.7,-24.5C82.1,-9.7,80.3,7.9,75,24.4C69.7,40.9,60.8,56.2,47.7,64.9C34.6,73.6,17.3,75.6,1,74.3C-15.4,73,-30.8,68.3,-42.7,59.2C-54.7,50.2,-63.1,36.7,-69.4,21.5C-75.8,6.4,-80,-10.5,-76.9,-26.5C-73.8,-42.5,-63.4,-57.6,-49.3,-67.2C-35.3,-76.8,-17.6,-80.8,-1.1,-79.3C15.5,-77.9,30.9,-70.9,44.9,-61.3Z"
              transform="translate(100 100)"
              animate={{
                d: [
                  "M44.9,-61.3C58.9,-51.7,71.3,-39.4,76.7,-24.5C82.1,-9.7,80.3,7.9,75,24.4C69.7,40.9,60.8,56.2,47.7,64.9C34.6,73.6,17.3,75.6,1,74.3C-15.4,73,-30.8,68.3,-42.7,59.2C-54.7,50.2,-63.1,36.7,-69.4,21.5C-75.8,6.4,-80,-10.5,-76.9,-26.5C-73.8,-42.5,-63.4,-57.6,-49.3,-67.2C-35.3,-76.8,-17.6,-80.8,-1.1,-79.3C15.5,-77.9,30.9,-70.9,44.9,-61.3Z",
                  "M44.7,-62C59.1,-51,72.8,-39.6,78.2,-24.9C83.6,-10.3,80.7,7.5,72.5,20.7C64.3,33.9,50.7,42.5,37.7,50.6C24.7,58.8,12.4,66.5,1.1,65.1C-10.2,63.6,-20.4,52.9,-33.3,44.7C-46.2,36.5,-61.8,30.8,-67.6,20.2C-73.4,9.7,-69.4,-5.8,-66,-23.1C-62.6,-40.3,-59.8,-59.4,-48.9,-71.5C-38,-83.6,-19,-88.8,-1.9,-86.1C15.1,-83.4,30.2,-72.9,44.7,-62Z",
                  "M52.8,-71.5C68.6,-61.1,81.7,-46,87.5,-28.4C93.3,-10.8,91.7,9.2,85.1,27.1C78.5,44.9,66.9,60.5,51.9,71.6C36.8,82.6,18.4,89.2,0.2,88.9C-18,88.6,-35.9,81.4,-50.5,70.2C-65.1,59,-76.3,43.7,-82,26.6C-87.6,9.4,-87.7,-9.5,-81.8,-26.3C-75.9,-43,-64.1,-57.4,-49.4,-68.1C-34.8,-78.9,-17.4,-85.9,0.5,-86.7C18.5,-87.4,36.9,-81.8,52.8,-71.5Z",
                ]
              }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 7, ease: "easeInOut" }}
            />
          </motion.svg>


          {/* HOMEPAGE LINKS FOR DESKTOP*/}
          {/* PROJECTS */}
          <motion.div
            className="md:block md:absolute md:top-[50px] md:left-[-20%] md:z-1 md:before:absolute md:before:content-[''] md:before:size-[18px] md:before:rounded-full md:before:bg-sand md:before:top-[160px] md:before:right-[-27%] md:after:absolute md:after:content-[''] md:after:w-[170px] md:after:h-[5px] md:after:bg-sand md:after:rotate-52 md:after:left-[150px] md:after:top-[100px] md:after:z-[-1] hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, }}
            transition={{ duration: 1, delay: 4, ease: "easeInOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/projects" className="text-xl bg-sand py-[10px] px-[20px] rounded-[15px] z-2 cursor-pointer hover:bg-orange duration-200 ease-in-out">Mes projets</Link>
            </motion.div>
          </motion.div>

          {/* ABOUT ME */}
          <motion.div
            className="md:block md:absolute md:top-1/3 md:-right-[60px] md:z-1 md:before:absolute md:before:content-[''] md:before:size-[18px] md:before:rounded-full md:before:bg-sand md:before:top-[230px] md:before:left-[-170px] md:after:absolute md:after:content-[''] md:after:w-[270px] md:after:h-[5px] md:after:bg-sand md:after:-rotate-50 md:after:-left-[215px] md:after:top-[140px] md:after:z-[-1] hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.3, ease: "easeInOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/about-me" className="text-xl bg-sand py-[10px] px-[20px] rounded-[15px] z-2 cursor-pointer hover:bg-orange duration-200 ease-in-out">A propos</Link>
            </motion.div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            className="md:block md:absolute md:bottom-[50px] md:left-[-20px] md:z-1 md:before:absolute md:before:content-[''] md:before:size-[18px] md:before:rounded-full md:before:bg-orange md:before:bottom-[15px] md:before:right-[-360px] md:after:absolute md:after:content-[''] md:after:w-[370px] md:after:h-[5px] md:after:bg-sand after:from-sand after:to-orange after:bg-gradient-to-r md:after:left-[150px] md:after:bottom-[20px] md:after:z-[-1] hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 4.6, ease: "easeInOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
            >
              <Link to="/contact" className="text-xl bg-sand py-[10px] px-[20px] rounded-[15px] z-2 cursor-pointer hover:bg-orange duration-200 ease-in-out">Contact</Link>
            </motion.div>
          </motion.div>
        </div>

        {/* HOMEPAGE LINK FOR MOBILE */}
        <motion.ul
          className="block md:hidden px-[30px] w-full mt-[40px]">
          <motion.li
            className="text-md text-center bg-sand rounded-[15px] py-[10px] mb-[10px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              opacity:{ duration: 0, delay: 3.8, ease: "easeInOut" }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/about-me" className="block">A propos</Link>
          </motion.li>
          <motion.li
            className="text-md text-center bg-sand rounded-[15px] py-[10px] mb-[10px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              opacity : {duration: 0.5, delay: 4, ease: "easeInOut"} 
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/projects" className="block">Mes projets</Link>
          </motion.li>
          <motion.li className="text-md text-center bg-sand rounded-[15px] py-[10px] mb-[10px]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              opacity: {duration: 0.5, delay: 4.2, ease: "easeInOut"} 
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/contact" className="block">Contact</Link>
          </motion.li>
        </motion.ul>
      </main>
    </div>
  )
}

export default Home