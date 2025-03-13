import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'



const Collapse = ({ data }) => {
  return (
    <Accordion sx={{ color: "#081645", borderBottom: "3px solid #F95D44", boxShadow: "none", borderRadius: "0 !important", borderTop:"none" }}>
      <AccordionSummary 
      sx={{ fontFamily: "MontserratAlternates Bold, sans-serif", fontSize: "18px", padding: "5px 0"}} 
      aria-controls='panel1-content' 
      id="panel1-header" 
       expandIcon={<ExpandMoreIcon sx={{ color: "#F95D44", fontSize: "40px" }}/>}
      >
        {data.title}
        
      </AccordionSummary>
    <AccordionDetails sx={{ padding: "8px 0 0" }}>
      {data.desc.map(item => {
        return <p key={item} className="pb-[20px] text-xs md:text-sm " >{item}</p>
      })}
      

    </AccordionDetails>
    </Accordion>
  )
}

export default Collapse