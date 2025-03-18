// DEPENDENCIES
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"
// SVG
import arrowTop from "../../assets/icons/arrow-move-up.svg"



const BtnScrollToTop = ({ customClass }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <motion.button
    onClick={scrollToTop}
    aria-label="Bouton pour retourner en haut de la page"
    className={`cursor-pointer ${customClass}`}
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.4, duration: 1 }}
  >
    <motion.img
      src={arrowTop} alt="flèche vers un bouton"
      className="size-[50px]"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    />
  </motion.button>
  )
}

export default BtnScrollToTop;