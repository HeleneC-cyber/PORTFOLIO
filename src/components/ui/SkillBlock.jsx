// COMPONENTS
import H3 from "../typography/H3";



const SkillBlock = ({ techData }) => {

  return (
    <div className="mb-[30px] md:mb-[40px]">
      <H3 title={techData.catégorie} customClass="ml-[21px]" />
      <ul className="flex flex-wrap gap-[10px] mt-[10px] ml-[30px]">
        {techData?.icons.map((icon)=>{
          return <li key={icon.id}><img src={icon.path} alt={icon.nom} className="h-[50px]" /></li>
        })}

      </ul>
    </div>
  )
}

export default SkillBlock