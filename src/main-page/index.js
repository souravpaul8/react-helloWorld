import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedSeries from './featured-series';

function App() {
  const [allSeries, setAllSeries] = useState([]);

  useEffect(() => {
    const fetchSeries = async () => {
      const response = await fetch("/series.json");
      const series = await response.json();
      setAllSeries(series);
    };
    fetchSeries();
  }, []);

 const featuredSeries =  useMemo(() => {
    if(allSeries.length){
      const randomIndex = Math.floor(Math.random()* allSeries.length);
      return allSeries[randomIndex];
    }
  }, [allSeries])

  return (
    <Router>
      <div className ="container">
      <Header subtitle="One stop shop for all your TV/Web Series needs" />
      <Switch>
        <Route path = "/">
          <FeaturedSeries series = {featuredSeries}/>
        </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;