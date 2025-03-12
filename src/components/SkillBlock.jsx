import H3 from "./H3";


const SkillBlock = ({title, icons = []}) => {
  return (
    <div className="mb-[30px] md:mb-[40px]">
      <H3 title={title} />
      <ul className="flex flex-wrap gap-[10px] mt-[10px]">
        {icons.map((icon, index)=>{
          return <li key={index}><img src={icon} alt="icon" className="h-[50px]" /></li>
        })}

      </ul>
    </div>
  );
};

export default SkillBlock;