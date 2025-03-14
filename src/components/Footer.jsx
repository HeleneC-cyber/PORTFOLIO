// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import copyright from "../assets/icons/copyright.svg"



const Footer = () => {
  return (
    <motion.footer 
    className="bg-grey w-full py-[28px]"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2, duration: 1 }}
    >
      <div className="main-container flex flex-col md:flex-row items-center justify-between text-sand font-primary text-sm gap-[10px]  ">
        <p className="">Tous droits réservés</p>
        <div className="flex flex-row items-center">
          <img src={copyright} alt="icone copyright" className="size-[23px] mr-[5px]" />
          <p>Hélène CANOVAS, 2025</p>
        </div>
        <p>@ Crédits</p>
      </div>
    </motion.footer>
  )
}

export default Footer