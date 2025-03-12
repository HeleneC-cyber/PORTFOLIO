


const H3 = ({title}) => {
  return (
    <h3 className="font-p-bold text-dark text-md w-fit relative before:absolute before:size-[42px] before:rounded-full before:bg-red before:content-[''] before:left-[-21px] before:top-[-8px] before:z-[-1]">
      {title}
    </h3>
  )
}

export default H3

// relative before:absolute before:size-[42px] before:rounded-full before:bg-red before:content-[''] before:right-[-21px] before:bottom-[8px] before:z-[-1]