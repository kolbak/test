import React, { useState } from 'react';
import { Card, Button, DropdownButton, Dropdown, Table } from 'react-bootstrap';

import './main.scss'

import not from '../../images/Achie.png'
import notBw from '../../images/AchieBW.png'

import sortStatusArrow from '../../images/table-sort-icon.png'
import fb from '../../images/FB.png'
import vk from '../../images/VK.png'
import link from '../../images/link.png'

function Main() {
  //? Кнопки сортировки в header'e main
  let [activeBtn, setActiveBtn] = useState(false);
  function sortBtn() {
    setActiveBtn(!activeBtn);
  }

  //? Данные таблицы
  let dataArray = [];
  for (let i = 0; i < 5; i++) {
    dataArray.push({
      seasons: [new Date().getFullYear() - i, new Date().getFullYear() - i - 1],
      games_quantity: (i + 1) * 2,
      goals: (i + 1) * 3,
      passes: (i + 1) * 4,
      goals_passes: (i + 1) * 5,
      rate: (i + 1) * 10,
    })
  }
  let [data, setData] = useState(dataArray);

  //? Сортировка таблицы true - по возрастанию, false - убыванию
  let [sortStatus, setSortStatus] = useState([false, false, false, false, false, false]);
  function sortTable(number) {
    if (number) {
      setData(dataArray.sort((obj1, obj2) => {
        if (sortStatus[number]) {
          if (obj1[Object.keys(obj1)[number]] > obj2[Object.keys(obj2)[number]]) return 1;
          if (obj1[Object.keys(obj1)[number]] < obj2[Object.keys(obj2)[number]]) return -1;
        } else {
          if (obj1[Object.keys(obj1)[number]] < obj2[Object.keys(obj2)[number]]) return 1;
          if (obj1[Object.keys(obj1)[number]] > obj2[Object.keys(obj2)[number]]) return -1;
        }
      }));
    } else {
      setData(dataArray.sort((obj1, obj2) => {
        if (!sortStatus[number]) {
          if (obj1.seasons[1] > obj2.seasons[1]) return 1;
          if (obj1.seasons[1] < obj2.seasons[1]) return -1;
        } else {
          if (obj1.seasons[1] < obj2.seasons[1]) return 1;
          if (obj1.seasons[1] > obj2.seasons[1]) return -1;
        }
      }));
    }

    setSortStatus(sortStatus.map((item, index) => index === number ? !item : false));
  }

  let [screenWidth, setScreenWidth] = useState(window.screen.availWidth);
  window.addEventListener('resize', () => {
    setScreenWidth(window.screen.availWidth);
  })

  return (
    <Card className="main-content">
      <Card.Header className="card-header">
        <div className="header-info">
          <div className="notifics">
            <div className="first">
              {screenWidth >= 825 && <img src={not} alt="" />}
              {screenWidth >= 925 && <img src={not} alt="" />}
              {screenWidth >= 1070 && <img src={not} alt="" />}

            </div>
            <div className="bw">
              {screenWidth >= 765 && <img src={notBw} alt="" />}
              <img src={notBw} alt="" />
            </div>
            <hr />
            <div className="last">
              {screenWidth >= 765 && <img src={not} alt="" />}
              {screenWidth >= 825 && <img src={not} alt="" />}
              {screenWidth >= 925 && <img src={not} alt="" />}
              {screenWidth >= 1070 && <img src={not} alt="" />}
              <img src={not} alt="" />
            </div>
          </div>
          <div className="seasons">
            <div className="sort">
              <Button onClick={sortBtn} className={`sort-btn ${activeBtn ? '' : 'active'}`}>Все сезоны</Button>
              <Button onClick={sortBtn} className={`sort-btn ${activeBtn ? 'active' : ''}`}>Сезон 2020/21</Button>
            </div>
            <div className="info">
              <div className="box"><p>Игры <span>36</span></p></div>
              <div className="box"><p>Гол <span>67</span></p></div>
              <div className="box"><p>Пас <span>136</span></p></div>
              <div className="box"><p>Гол + пас <span>136</span></p></div>
            </div>
          </div>
          <div className="share">
            <p>Поделиться</p>
            <img src={fb} alt="" />
            <img src={vk} alt="" />
            <img src={link} alt="" />
          </div>
        </div>
      </Card.Header>
      <Card.Body className="card-body">
        <DropdownButton id="button-format" title="Формат">
          <Dropdown.Item href="">Формат №1</Dropdown.Item>
          <Dropdown.Item href="">Формат №2</Dropdown.Item>
          <Dropdown.Item href="">Формат №3</Dropdown.Item>
        </DropdownButton>
        <Table responsive className="table">
          <thead>
            <tr className="white">
              <th onClick={() => { sortTable(0) }} key={0}>Сезон <img className={`${sortStatus[0] && 'is-sort'}`} src={sortStatusArrow} alt="" /></th>
              <th onClick={() => { sortTable(1) }} key={1}>Кол-во игр <img className={`${sortStatus[1] && 'is-sort'}`} src={sortStatusArrow} alt="" /></th>
              <th onClick={() => { sortTable(2) }} key={2}>Гол <img className={`${sortStatus[2] && 'is-sort'}`} src={sortStatusArrow} alt="" /></th>
              <th onClick={() => { sortTable(3) }} key={3}>Пас <img className={`${sortStatus[3] && 'is-sort'}`} src={sortStatusArrow} alt="" /></th>
              <th onClick={() => { sortTable(4) }} key={4}>Гол + пас <img className={`${sortStatus[4] && 'is-sort'}`} src={sortStatusArrow} alt="" /></th>
              <th onClick={() => { sortTable(5) }} key={5}>Рейтинг <img className={`${sortStatus[5] && 'is-sort'}`} src={sortStatusArrow} alt="" /></th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: data.length }).map((item, index) => (
              <tr className={`tr-${index} ${index % 2 != 0 && 'white'}`} key={index}>

                {Array.from({ length: 6 }).map((_, _index) => (
                  <td key={_index} className={`td-${_index}`}>
                    {_index === 0 && <span>Сезон {`${data[index].seasons[0]}/${data[index].seasons[1]}`}</span>}
                    {_index === 1 && <span>{data[index].games_quantity}</span>}
                    {_index === 2 && <span>{data[index].goals}</span>}
                    {_index === 3 && <span>{data[index].passes}</span>}
                    {_index === 4 && <span>{data[index].goals_passes}</span>}
                    {_index === 5 && <span className="rate">{data[index].rate}</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Main;