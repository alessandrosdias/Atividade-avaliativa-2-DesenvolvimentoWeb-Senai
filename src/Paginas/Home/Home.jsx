import Rodape from "../../Components/Rodape/Rodape"
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Example from "./Carousel";
import MenuAgora from "../../Components/Menu/NavManu";



function Home(){
    return(
        <>
        <MenuAgora />
        {/* <Menu /> */}
        <Example />
        <br />
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Sasuke Uchiha:</Accordion.Header>
        <Accordion.Body>
          Um membro do Clã Uchiha e um dos integrantes do time 7 junto com Naruto, Sakura e Kakashi.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Broly:</Accordion.Header>
        <Accordion.Body>
          Membro da raça dos Sayajins que são uma raça guerreira com a aparência bem parecida com a dos humanos, porém viviam em outro planeta chamado "Planeta Vegeta".
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Ayanokoji Kiyotaka:</Accordion.Header>
        <Accordion.Body>
          Um gênio com mais de 210 de QI que está no ensino médio e estuda em um colégio de prestígio no Japão onde só os melhores conseguem entrar, e tem 100% de chances de conseguir ingressar em uma das melhores faculdades do Japão ou arrumar um emprego.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
   
        <Rodape />
        </>
    )
}
export default Home