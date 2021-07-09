import React, { useState, useContext } from 'react';
import { Card, Accordion, Button, ButtonGroup, AccordionContext, useAccordionToggle, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

import ava from '../../images/Ava.png'

import './aside.scss'

function Aside() {
  function CostumCardHeader({ children, eventKey, callback }) {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey),
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <Card.Header onClick={decoratedOnClick} className={`aside-header ${isCurrentEventKey && 'active'}`}>
        {children}
      </Card.Header>
    );
  }

  function ToggleButtonGroupControlled({ text }) {
    const [value, setValue] = useState(null);

    const handleChange = (val, e) => {
      setValue(val)
    };

    let btns = text.map((item, i) =>
      <ToggleButton key={i} className={`aside-btn ${value === i && 'active'}`} value={i}>{item}</ToggleButton>
    );
    return (
      <ToggleButtonGroup vertical type="radio" name="options" onChange={handleChange}>
        {btns}
      </ToggleButtonGroup>
    );
  }

  return (
    <Card className="aside-content">
      <Card.Header className="card-header-info">
        <div className="aside-header-wrap">
          <div className="info">
            <img src={ava} alt="" />
            <div className="text">
              <p className="rate">89.40</p>
              <p>Елишакашвили Михо</p>
            </div>
          </div>
          <Button className="btn-edit">Редактировать</Button>
        </div>
      </Card.Header>
      <Card.Body>
        <Accordion className="aside-body" >
          <Card>
            <CostumCardHeader eventKey="0">Статистика</CostumCardHeader>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <ToggleButtonGroupControlled text={['Футбол', 'Баскетбол', 'Волейбол']} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CostumCardHeader eventKey="1">Ближайшие игры</CostumCardHeader>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <ToggleButtonGroupControlled text={['Футбол', 'Баскетбол', 'Волейбол']} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CostumCardHeader eventKey="2">Игровые отчёты</CostumCardHeader>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <ToggleButtonGroupControlled text={['Футбол', 'Баскетбол', 'Волейбол']} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <CostumCardHeader eventKey="3">История заказов</CostumCardHeader>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <ToggleButtonGroupControlled text={['Футбол', 'Баскетбол', 'Волейбол']} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Button onClick={(e) => { e.target.classList.add('active') }} variant="light" className="btn-exit">Выйти</Button>
      </Card.Body>
    </Card>
  );
}

export default Aside;