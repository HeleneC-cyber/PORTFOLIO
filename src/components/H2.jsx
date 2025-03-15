// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"


const H2 = ({ title, customClass }) => {
  return (
    <motion.h2 className={`font-secondary text-2xl ${customClass}`}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 1 }}
    >
      {title}
    </motion.h2>
  )
}

export default H2