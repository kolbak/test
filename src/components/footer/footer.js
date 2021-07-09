import React, { useState } from 'react';
import { Card, Button, DropdownButton, Dropdown, Table } from 'react-bootstrap';

import './footer.scss'

import logo1440 from '../../images/logo1440-light.png'
import apple from '../../images/apple.png'
import gplay from '../../images/cib_google-play.png'
import fb from '../../images/FB.png'
import vk from '../../images/VK.png'
import ig from '../../images/IG.png'
import tg from '../../images/Telegram.png'
import wa from '../../images/WA.png'
import yt from '../../images/YT.png'

function Footer() {
  return (
    <Card className="footer-card">
      <img src={logo1440} className="footer-logo1440" alt="" />
      <div className="btns-download">
        <Button className="button btn-appstore">
          <img src={apple} alt="" className="icon" />
          <div>
            <p className="dwnld-p">Download on the</p>
            <p className="os">App Store</p>
          </div>
        </Button>
        <Button className="button">
          <img src={gplay} alt="" className="icon" />
          <div>
            <p className="dwnld-p">GET IT ON</p>
            <p className="os">Google play</p>
          </div>
        </Button>
      </div>
      <div className="info-table">
        <Table responsive striped borderless >
          <thead>
            <tr>
              <th><h5>Разделы</h5></th>
              <th><h5>Виды спорта</h5></th>
              <th><h5>Полезное</h5></th>
              <th><h5>Чё почём</h5></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="">Главная</a></td>
              <td><a href="">Футбол</a></td>
              <td><a href="">Как записаться</a>?</td>
              <td><a href="">Абонементы</a></td>
            </tr>
            <tr>
              <td><a href="">Расписание</a></td>
              <td><a href="">Баскетбол</a></td>
              <td><a href="">Ответы на вопросы</a></td>
              <td><a href="">Корп. клиентам</a></td>
            </tr>
            <tr>
              <td><a href="">Игровые отчеты</a></td>
              <td><a href="">Волейбол</a></td>
              <td><a href="">Достижения</a></td>
              <td><a href="">Партнёры</a></td>
            </tr>
            <tr>
              <td><a href="">Статистика</a></td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="our-contacts">
        <h5>Наши контакты</h5>
        <p>+7 (495) 109-03-09</p>
        <p>go@crossball.ru</p>
      </div>
      <hr />
      <div className="all-rights">
        <p>© Все права защищены</p>
        <div className="social-links">
          <a href=""><img src={ig} alt="" /></a>
          <a href=""><img src={vk} alt="" /></a>
          <a href=""><img src={fb} alt="" /></a>
          <a href=""><img src={yt} alt="" /></a>
          <a href=""><img src={tg} alt="" /></a>
          <a href=""><img src={wa} alt="" /></a>
        </div>
        <p>Сделали в Spans</p>
      </div>
    </Card>
  );
}

export default Footer;