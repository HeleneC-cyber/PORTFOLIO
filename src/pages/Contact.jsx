// DEPENDENCIES
import { Link } from "react-router"
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
// COMPONENTS
import Header from "../components/Header"
import H1 from "../components/H1"
import Form from "../components/Form"
import Blob from "../components/Blob"
// IMAGE
import womanLaptopMobile from "../assets/woman-laptop.png"
import womanLaptop from "../assets/woman-laptop-with-circle.png"
// ICON SVG
import github from "../assets/icons/github-contact.svg"
import linkedin from "../assets/icons/linkedin.svg"
import email from "../assets/icons/email.svg"


const Contact = () => {
  return (
    <>
      <Header />
      <main className="main-container font-primary text-dark text-xs mt-[20px] md:text-md md:mt-[50px]">
        <H1 title="Contact" />
        <div className="flex flex-col mt-[30px] justify-between items-center gap-[158px] md:flex-row md:items-start md:gap-[40px] mb-[90px] md:mb-[180px]">
          <div className="w-[620px] max-w-[100%]">
            <motion.p
              className="mb-[20px] md:mb-[50px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <strong className="font-p-bold ">Un projet, une opportunité ? </strong>
              Discutons-en autour d’un thé… virtuel ou réel, c’est vous qui décidez !
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Vous pouvez aussi me retrouver sur :</motion.p>
            <motion.ul
              className="flex gap-[30px] mt-[20px] md:mt-[30px] justify-center md:justify-start md:ml-[30px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <li>
                <Link to="https://github.com/HeleneC-cyber" aria-label="" >
                  <motion.img
                    src={github} alt="logo Github"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </Link>
              </li>
              <li>
                <Link to="https://www.linkedin.com/in/helene-canovas-48710b141/" aria-label="Linkedin" >
                  <motion.img
                    src={linkedin} alt="logo Linkedin"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                </Link>
              </li>
              <li>
                <Link
                  to="mailto:canovas.helene@gmail.com?subject=Demande de contact&body=Bonjour, je souhaite vous contacter à propos de..."
                  aria-label="Mail"
                  className="cursor-pointer"
                ><motion.img
                    src={email} alt="icone mail"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  /></Link>
              </li>
            </motion.ul>
            <motion.div 
            className="relative mt-[180px] flex justify-center hidden md:block" 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            >
              <img src={womanLaptop} alt="Femme assise devant un ordinateur avecun thé" />

              <Blob color="#357F76" position="absolute -bottom-[190px] -left-[50px] -z-1" />

            </motion.div>
          </div>

          {/* SIDE FORM */}
          <motion.div 
          className=" w-[390px] max-w-full md:w-[500px] md:mr-[40px] relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1 }}
          >
            <img src={womanLaptopMobile} alt="Femme devant un ordinateur portable" className="block md:hidden absolute bottom-full right-0" />
            <Form />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Contact;