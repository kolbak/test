import { Button, Navbar as NavbarBp, Nav, NavDropdown, Dropdown, DropdownButton } from 'react-bootstrap';

import logo1440 from '../../images/logo1440.png'
import iconFootball from '../../images/football.png'
import ava from '../../images/Ava.png'
import bag from '../../images/bag.png'

import './navbar.scss'

function Navbar() {
  return (
    <NavbarBp bg="light" expand="lg">
      <NavbarBp.Brand href=""><img className="logo1440" src={logo1440} alt="" /></NavbarBp.Brand>
      <NavbarBp.Toggle aria-controls="basic-navbar-nav" />
      <NavbarBp.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="">Расписание</Nav.Link>
          <Nav.Link href="">Игровые отчёты</Nav.Link>
          <Nav.Link href="">Статистика</Nav.Link>
          <NavDropdown title="Ещё" id="more">
            <NavDropdown.Item href="">Подраздел №1</NavDropdown.Item>
            <NavDropdown.Item href="">Подраздел №2</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <DropdownButton
          menuAlign="right"
          title={<img src={iconFootball} alt=""></img>}
          id="football"
        >
          <NavDropdown.Item href="">Подраздел №1</NavDropdown.Item>
          <NavDropdown.Item href="">Подраздел №2</NavDropdown.Item>
        </DropdownButton>
        <Button className="btn-nav" id="btn-ava"><img src={ava} alt="" /></Button>
        <Button className="btn-nav" id="btn-bag"><img src={bag} alt="" /></Button>
      </NavbarBp.Collapse>
    </NavbarBp>
  );
}

export default Navbar;
