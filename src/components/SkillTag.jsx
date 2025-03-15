


const SkillTag = ({ tags }) => {

  const getTagColor = (tag) => {
    switch (tag) {
      case "HTML5":
      case "Express":
        return "bg-red text-white"
      case "CSS3":
      case "Sass":
      case "TailwindCSS":
      case "Motion":
        return "bg-dark text-white"
      case "JS":
      case "Node.js":
      case "React":
        return "bg-orange text-dark"
      case "Figma":
      case "Adobe Xd":
      case "Notion":
        return "bg-green text-white"
      case "Agile":
      case "Kanban":
      case "MongoDB":
        return "bg-sand text-dark"
      default:
        return "bg-grey text-white"
    }
  }


  return (
    <ul className="flex gap-[5px] flex-wrap items-center mt-[10px] mb-[20px]">
      {tags.map((tag) => {
        return <li key={tag} className={`font-secondary text-sm px-[10px] rounded-[25px] pt-[4px] pb-[2px] ${getTagColor(tag)}`}>{tag}</li>
      })}
    </ul>
  )
}

export default SkillTag