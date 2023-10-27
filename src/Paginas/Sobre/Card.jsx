import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function CardSobre() {
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://i0.wp.com/heroisx.com/wp-content/uploads/2019/09/Sasuke-Uchiha-Jutsus-Magenkyou-Sharingan.jpg?resize=640%2C346&ssl=1" />
        <Card.Body>
          <Card.Title>Sasuke Uchiha</Card.Title>
          <Card.Text>
            Seu objetivo é matar o seu irmão mais velho Itachi Uchiha, Itachi exterminou todo o seu clã deixando apenas o seu irmão mais novo vivo para que ele possa ir atrás dele em busca de vingança.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/12/Dragon-Ball-Super.jpg" />
        <Card.Body>
          <Card.Title>Broly</Card.Title>
          <Card.Text>
            Broly foi expulso de seu planeta pelo rei Vegeta graças a seu grande poder de luta ainda bebê que era muito maior que o de seu filho. Quando o planeta dos Sayajins foi destruído pelo imperador Freeza, Broly foi encontrado pelo Imperador e juntos formam uma aliança para se vingar do rei matando o seu filho.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://wallpapers.com/images/hd/kiyotaka-ayanokoji-classroom-of-the-elite-d270iytwbxprdalh.jpg" />
        <Card.Body>
          <Card.Title>Ayanokoji Kiyotaka</Card.Title>
          <Card.Text>
          Ayanokoji é um gênio manipulador que tem o objetivo de chegar na turma A, usando outros alunos como ferramentas para concluir seu objetivo.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}

export default CardSobre