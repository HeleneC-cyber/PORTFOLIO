// DEPENDENCIES
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"
import { createPortal } from 'react-dom'
import { useState } from "react"
// COMPONENTS
import CreditsModal from '../ui/CreditsModal';



const Footer = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.footer
      className="bg-grey w-full py-[28px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <div className="main-container flex flex-col md:flex-row items-center justify-between text-sand font-primary text-sm gap-[10px]  ">
        <p className="">Tous droits réservés</p>
        <p>© Hélène CANOVAS, 2025</p>

        <button
          className="cursor-pointer hover:text-orange"
          onClick={() => setIsOpen(true)}
        >@ Crédits</button>
        {createPortal(<CreditsModal setIsOpen={setIsOpen} isOpen={isOpen} />, document.body)}
      </div>
    </motion.footer>
  )
}

export default Footer