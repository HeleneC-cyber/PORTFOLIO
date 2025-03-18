
const H3 = ({title, customClass}) => {
  return (
    <h3 className={`font-p-bold text-dark text-md w-fit z-2 relative before:absolute before:size-[42px] before:rounded-full before:bg-red before:content-[''] before:left-[-21px] before:top-[-8px] before:z-[-1] ${customClass}`} >
      {title}
    </h3>
  )
}

export default H3

