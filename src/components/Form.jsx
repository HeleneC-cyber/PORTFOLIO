// DEPENDENCIES
import { useState } from "react"
// COMPONENTS
import Input from "./Input"



const Form = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <form action="" method="post" className="flex flex-col gap-[45px] ">
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
        value={formData.user_message}
        onChange={handleChange}
        regex={/^(?:\S*\s*){50,}$/}
        errorMessage="Au moins 50 caractères (hors espace)" />

      <button type="submit" className="w-full text-white text-xl bg-grey rounded-[15px] py-[6px]">Envoyer</button>
    </form>
  )
}


export default Form