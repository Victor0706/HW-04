import * as React from "react";
import CitySelectorNow from './CitySelectorNow';
import "../styles/Main.css";
import {Container} from 'react-bootstrap';
import UseFetch from '../hooks/UseFetch';
import {API_KEY, API_BASE_URL} from '../apis/config';
import WeatherNow from './WeatherNow';


const Now = () => {
    const {data, error, isLoading, setUrl} = UseFetch(null);
    console.log(data);

    const getContent = () => {
        if(error) return <h2>Error when fetching: {error}</h2>
        if(!data && isLoading) return <h2>LOADING...</h2>
        if(!data) return null;
        return <WeatherNow weathers={data.list}/>
      };
    
      return (
        <Container className="Main">
          <CitySelectorNow onSearch={(city) => setUrl(`${API_BASE_URL}/data/2.5/forecast?q=${city}&cnt=1&lang=ru&appid=${API_KEY}&units=metric`)} />
    
          {/* don't forget the change */}
          {getContent()}
        </Container>
      );
};

export default Now;