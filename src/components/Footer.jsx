import copyright from "../assets/icons/copyright.svg";

const Footer = () => {
  return (
    <footer className="bg-grey w-full py-[28px] " >
      <div className="main-container flex flex-row items-center justify-between text-sand">
        <p className="font-primary text-sm ">Tous droits réservés</p>
        <div className="flex flex-row items-center">
          <img src={copyright} alt="icone copyright" className="size-[23px]" />
          <p className="font-primary text-sm ml-[10px]">Hélène CANOVAS, 2025</p>
        </div>
        <p className="font-primary text-sm">@ Crédits</p>
      </div>
    </footer>
  )
}

export default Footer