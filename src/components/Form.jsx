
const Form = () => {
  return (
    <form action="" method="post" className="flex flex-col gap-[40px] ">

      <div className="relative">
        <label htmlFor="nom"
          className="absolute z-1 top-[-15px] left-[50px] after:absolute after:content-[''] after:w-[34px] after:h-[2px] after:bg-white after:left-[4px] after:bottom-[4px] after:z-[-1] md:top-[-20px] md:after:w-[43px]"
        >Nom</label>
        <input type="text" id="nom" nom="user_name" required className="w-full h-[50px] border-2 border-solid border-dark rounded-[10px] p-[10px] outline-orange" />
      </div>

      <div className="relative">
        <label htmlFor="email"
          className="absolute z-1 top-[-15px] left-[50px] after:absolute after:content-[''] after:w-[40px] after:h-[2px] after:bg-white after:left-[7px] after:bottom-[4px] after:z-[-1] md:top-[-20px] md:after:w-[50px] "
        >Email</label>
        <input type="Email" id="email" nom="user_email" required className="w-full h-[50px] border-2 border-solid border-dark rounded-[10px] p-[10px] outline-orange" />
      </div>

      <div className="relative">
        <label htmlFor="message"
          className="absolute z-1 top-[-15px] left-[50px] after:absolute after:content-[''] after:w-[70px] after:h-[2px] after:bg-white after:left-[4px] after:bottom-[4px] after:z-[-1] md:top-[-20px] md:after:w-[88px]"
        >Message</label>
        <textarea id="message" name="message" required
          placeholder="Bonjour, je souhaite vous contacter à propos de..."
          className="w-full h-[250px] border-2 border-solid border-dark rounded-[10px] outline-orange resize-none p-[20px] text-xs md:text-sm"
        ></textarea>
      </div>

      <button type="submit" className="w-full text-white text-xl bg-grey rounded-[15px] py-[6px]">Envoyer</button>
    </form>
  )
}

export default Form