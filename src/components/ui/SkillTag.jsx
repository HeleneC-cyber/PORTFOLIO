// DEPENDENCIES
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"



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
    <motion.ul
      className="flex gap-[5px] flex-wrap items-center mt-[10px] mb-[20px]"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.2 }}
    >
      {tags.map((tag) => {
        return <motion.li
          key={tag}
          className={`font-secondary text-sm px-[10px] rounded-[25px] pt-[4px] pb-[2px] cursor-default ${getTagColor(tag)}`}
          whileHover={{ scale: 1.2 }}
        >
          {tag}
        </motion.li>
      })}
    </motion.ul>
  )
}

export default SkillTag