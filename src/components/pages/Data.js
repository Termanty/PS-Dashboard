import Doughnut from "../Data/Doughnut";
import FilterData from "../Data/FilterData";
import StackedBar from "../Data/StackedBar";
import StackedBar1 from "../Data/StackedBar1";
import LineChart from "../Data/LineChart";




function Data() {

  return (
    <div>
      <Doughnut/>
      <FilterData/>
      {/* <StackedBar/> */}
      <StackedBar1/>
      <LineChart/>
    
     
  </div>
  );
}

export default Data;
