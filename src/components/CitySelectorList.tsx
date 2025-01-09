import * as React from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';


const CitySelectorList = ({ onSearch }) => {
    const [city, setCity] = React.useState('');

    return (
      <>
        <Row>
          <Col>
            <h1>Погода в вашем городе на ближайшие 5 дней</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <FormControl
              placeholder="Введите название города"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>

        <Row>
          <Col>
           {/* don't forget to edit our function  */}
            <Button onClick={() => onSearch(city)}>Узнать погоду</Button>
          </Col>
        </Row>
      </>
    );
  };

export default CitySelectorList;
