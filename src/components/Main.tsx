import * as React from "react";
import CitySelectorList from './CitySelectorList';
import "../styles/Main.css";
import {Container} from 'react-bootstrap';
import UseFetch from '../hooks/UseFetch';
import {API_KEY, API_BASE_URL} from '../apis/config';
import WeatherList from './WeatherList';


const Main = () => {
    const {data, error, isLoading, setUrl} = UseFetch(null);
    console.log(data);

    const getContent = () => {
        if(error) return <h2>Error when fetching: {error}</h2>
        if(!data && isLoading) return <h2>LOADING...</h2>
        if(!data) return null;
        return <WeatherList weathers={data.list} />
      };
    
      return (
        <Container className="Main">
          <CitySelectorList onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&lang=ru&appid=${API_KEY}&units=metric`)} />
    
          {/* don't forget the change */}
          {getContent()}
        </Container>
      );
};



export default Main;