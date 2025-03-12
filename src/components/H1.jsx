// import propTypes from 'prop-types'

const H1 = ({title}) => {
  return (
    <h1 className="font-secondary text-dark text-3xl relative w-fit after:absolute after:size-[42px] after:rounded-full after:bg-red after:content-[''] after:right-[-21px] after:bottom-[8px] after:z-[-1]">
      {title}
    </h1>
  )
}

// H1.propTypes = {
//   title: PropTypes.string.isRequiered
// }

export default H1


// ml-[20px] mb-[20px]