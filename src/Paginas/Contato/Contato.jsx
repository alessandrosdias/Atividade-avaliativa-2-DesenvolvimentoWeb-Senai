import Menu from "../../Components/Menu/Menu"
import MenuAgora from "../../Components/Menu/NavManu"
import BasicExample from "../../Components/Menu/NavManu"
import Rodape from "../../Components/Rodape/Rodape"
import FormExample from "./formulario"
import Formular from "./formulario"


function Contato(){
    return(
        <>
        <MenuAgora />
        {/* <Menu /> */}
       
        <div className="container">
            <div>
                <FormExample /> 
            </div><br />
        </div>
       <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Rodape />
        </>
    )
}
export default Contato