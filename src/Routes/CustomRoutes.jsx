import { Routes,Route } from "react-router-dom"
import TextArea from "../components/TextArea"
import About from "../components/About";

function CustomRoutes({mode,showAlert}){

    return(
<Routes>
    <Route path="/" element={     <TextArea
        heading="Enter the text to analyze below"
        mode={mode}
        showAlert={showAlert}
      />} />
    <Route path="/about" element={<About/>} />
</Routes>
    )
}
export default CustomRoutes;