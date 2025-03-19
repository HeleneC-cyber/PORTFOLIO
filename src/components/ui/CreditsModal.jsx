// DEPENDENCIES
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion"
// COMPONENTS
import H3 from "../typography/H3"
// IMAGE
import womanPencil from "../../assets/woman-pencil.png"



const CreditsModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="fixed inset-0 z-30" onClick={() => setIsOpen(false)}>
          <motion.div
            className="absolute bottom-0 right-[5%] lg:right-[100px] max-w-[90%] bg-white text-blue pt-[27px] px-[50px] pb-[135px] w-[425px] shadow-custom shadow-black/50 rounded-t-[25px]"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 200 }}
            transition={{ duration: 0.6 }}
            key="modal"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-[20px] right-[20px] cursor-pointer" onClick={() => setIsOpen(false)}>
              <rect x="0.107422" y="17.7843" width="25" height="5" rx="2.5" transform="rotate(-45 0.107422 17.7843)" fill="#081645" />
              <rect x="3.53516" width="25" height="5" rx="2.5" transform="rotate(45 3.53516 0)" fill="#081645" />
            </svg>

            <H3 title="Crédits" customClass="mx-auto" />
            <p className="font-primary text-md mt-[30px]">Merci aux artistes dont les oeuvres, disponible sur iStock, ont enrichi ce projet :</p>
            <div className="flex items-end justify-between">
              <ul className="mt-[30px] flex-1">
                <li className="text-blue text-md font-primary underline mb-[20px]"><a href="https://www.istockphoto.com/fr/portfolio/ponomariova_maria?assettype=image&mediatype=illustration" target="_blank">Mary Long</a></li>
                <li className="text-blue text-md font-primary underline mb-[20px]"><a href="https://www.istockphoto.com/fr/portfolio/ma_rish?mediatype=illustration" target="_blank">ma_rish</a></li>
                <li className="text-blue text-md font-primary underline mb-[20px]"><a href="https://www.istockphoto.com/fr/portfolio/RomanEgorov?mediatype=illustration" target="_blank">SpicyTruffel</a></li>
                <li className="text-blue text-md font-primary underline mb-[20px]"><a href="https://www.istockphoto.com/fr/portfolio/OksanaLatysheva?mediatype=illustration" target="_blank">Oksana Latysheva</a></li>
                <li className="text-blue text-md font-primary underline mb-[20px]"><a href="https://www.istockphoto.com/fr/portfolio/volkovaolena2682?mediatype=illustration" target="_blank">Vector</a></li>
              </ul>

              <img src={womanPencil} alt="Demoiselle tenant un crayon géant" className="w-[129px] mb-[23px]"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default CreditsModal