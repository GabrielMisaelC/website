import { Container, Row, Column, H1 } from './styles';
import { BsCart, BsPersonCircle, BsHandbag, BsPerson } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Titulo } from '../Titulo';


// import Logo from './logo_Beatriz_Afonco.jpg';

export function Top() {
  return (
    <Container>
      <Row>
        <Column>
          <Link to='/login'>
            <BsPerson size={30} color={'#000000	'} /> </Link>
        </Column>
        <Column>
          <Row style={{
            gap: 100,
            justifyContent: 'center',
          }}>
            <H1>Beauty Academy</H1>
          </Row>
        </Column>
        <Column>
          <Row style={{
            gap: 50,
            justifyContent: 'center',
          }}>
            <MdOutlineLocationOn size={30} color={'#000000	'} />
            <BsHandbag size={30} color={'#000000	'} />
          </Row>
        </Column>
      </Row>
    </Container>
  )
}
