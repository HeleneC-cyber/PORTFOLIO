// DEPENDENCIES
import { useState } from "react"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
// COMPONENTS
import Input from "./Input"



const Form = () => {

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_API_KEY,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current, {
        publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!')
          setFormData({
            user_name: "",
            user_email: "",
            message: ""
          })
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <form ref={form} method="post" onSubmit={sendEmail} className="flex flex-col gap-[45px] ">
      <Input
        label="Nom"
        id="name"
        type="text"
        name="user_name"
        placeholder=""
        value={formData.user_name}
        onChange={handleChange}
        regex={/^[A-Za-zÀ-ÖØ-öø-ÿ -]{3,}$/}
        errorMessage="Veuillez entrer un nom valide" />

      <Input
        label="Email"
        id="email"
        type="email"
        name="user_email"
        placeholder=""
        value={formData.user_email}
        onChange={handleChange}
        regex={/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/}
        errorMessage="Veuillez entrer un email valide" />

      <Input
        label="Message"
        id="message"
        type="textarea"
        name="message"
        placeholder="Bonjour, je souhaite vous contacter à propos de..."
        value={formData.message}
        onChange={handleChange}
        regex={/^(?:\S*\s*){50,}$/}
        errorMessage="Au moins 50 caractères (hors espace)" />

      <button
        type="submit"
        value="Envoyer"
        className="w-full text-white text-xl bg-grey rounded-[15px] py-[6px]">
          Envoyer
      </button>
    </form>
  )
}


export default Form