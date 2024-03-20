import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardd(prop) {
  return (
    
      
    <Card style={{ width: '18rem',  border:"3px solid black" , borderRadius:"30px"}}>
      <Card.Img variant="top" src="../image/araba.png"  style={{ borderRadius:"30px"}}/>
      <Card.Body style={{backgroundColor:"aqua",  borderRadius:"30px"}}>
        <Card.Title>{prop.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
   
  );
}

export default Cardd;