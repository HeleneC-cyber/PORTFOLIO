import SimpleSlider from "../components/Slider";
//DATA
import data from "../data/projects.json"




const Test = () => {
  return (
    <div className="h-[1000px] flex justify-center ">
      <SimpleSlider projectData={data.projects} />
    </div>
  );
};

export default Test;