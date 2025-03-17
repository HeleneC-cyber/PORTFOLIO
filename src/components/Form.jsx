// DEPENDENCIES
import { useState } from "react"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
// COMPONENTS
import Input from "./Input"
import PopUp from "./PopUp"



const Form = () => {

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })
  const form = useRef()

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }


  // CONST FOR POP-UP
  const [openModal, setOpenModal] = useState(false)
  const handleClose = () => setOpenModal(false)
  const [popupType, setPopupType] = useState("") //"success" or "failed"

  //CONST FOR FORM VALIDATE
  const [isErrorName, setIsErrorName] = useState(null)
  const [isErrorEmail, setIsErrorEmail] = useState(null)
  const [isErrorMessage, setIsErrorMessage] = useState(null)

  // useEffect(() => {
  //     console.log("isErrorName", isErrorName)
  //     console.log("isErrorEmail", isErrorEmail)
  //     console.log("isErrorMessage", isErrorMessage)
  // }, [isErrorName, isErrorEmail, isErrorMessage])


  // SEND EMAIL
  const sendEmail = (e) => {
    e.preventDefault()

    // ISNT VALIDATE FORM
    if(isErrorName===true || isErrorEmail===true || isErrorMessage===true) return


    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_API_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!')
          setFormData({
            user_name: "",
            user_email: "",
            message: ""
          })
          setOpenModal(true)
          setPopupType("success");
        },
        (error) => {
          console.log('FAILED...', error.text)
          setOpenModal(true)
          setPopupType("failed");
        },
      )
  }

  return (
    <>
      <form ref={form} method="post" onSubmit={sendEmail} className="flex flex-col gap-[45px] ">
        <Input
          label="Nom"
          id="name"
          type="text"
          name="user_name"
          placeholder=""
          value={formData.user_name}
          onChange={handleFormChange}
          regex={/^[A-Za-zÀ-ÖØ-öø-ÿ -]{3,}$/}
          errorMessage="Veuillez entrer un nom valide" 
          isError={setIsErrorName}
          />

        <Input
          label="Email"
          id="email"
          type="email"
          name="user_email"
          placeholder=""
          value={formData.user_email}
          onChange={handleFormChange}
          regex={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
          errorMessage="Veuillez entrer un email valide" 
          isError={setIsErrorEmail}
          />

        <Input
          label="Message"
          id="message"
          type="textarea"
          name="message"
          placeholder="Bonjour, je souhaite vous contacter à propos de..."
          value={formData.message}
          onChange={handleFormChange}
          regex={/^(\S|\s\S){50,}$/}
          errorMessage="Au moins 50 caractères (hors espace)" 
          isError={setIsErrorMessage}
          />

        <button
          type="submit"
          value="Envoyer"
          className="w-full text-white text-xl bg-grey rounded-[15px] py-[6px]">
          Envoyer
        </button>
      </form>

      {/* SNACKBAR */}
     <PopUp type={popupType} openModal={openModal} handleClose={handleClose} />
      </>

  )
}


export default Form