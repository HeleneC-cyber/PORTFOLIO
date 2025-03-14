import { useState } from "react"


const Input = ({ label, id, type, name, placeholder, value, onChange, regex, errorMessage }) => {

  const [error, setError] = useState("")
  const handleValidation = (e) => {
    const val = e.target.value.trim()
    if (regex && !regex.test(val)) {
      setError(errorMessage || "Format invalide")
    } else {
      setError("")
    }
    onChange(e)
  }


  return (
    <div>
      <div className="relative text-xs md:text-md">
        <label htmlFor={id} className="absolute z-2 top-[-15px] md:top-[-20px] left-[50px] after:absolute after:content-[''] after:w-[92%] after:h-[2px] after:bottom-[4px] after:bg-white after:left-1/2 after:-translate-x-[calc(50%-2px)] after:-z-1">{label}</label>


        {type === "textarea" ? (
          <textarea
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleValidation}
            required
            className={` w-full h-[250px] border-2 border-solid border-dark rounded-[10px] outline-orange resize-none p-[20px] text-xs md:text-sm ${error ? "border-red" : "border-dark"}`}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={handleValidation}
            required
            className={`w-full h-[50px] border-2 border-solid border-dark rounded-[10px] p-[10px] outline-orange ${error ? "border-red" : "border-dark"}`}
          />
        )}
        {error && <div className="absolute bottom-[-25px] left-[20px] text-red text-2xs md:text-xs mt-[5px]">{error}</div>}
      </div>
    </div>


  )
}

export default Input