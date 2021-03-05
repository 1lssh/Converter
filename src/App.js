import { Button } from '@material-ui/core';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import './App.css';
import Converter from './pages/Converter';
import Home from './pages/Home';
import { getValutes, getDate } from './redux/valutesReducer';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
      .then(Response => {
        dispatch(getValutes(Response.data.Valute))
        dispatch(getDate(Response.data.Date))
      })

  }, [])


  const valutes = useSelector(({ valutes }) => valutes.valutes)
  const date = useSelector(({ valutes }) => valutes.date)
  return (
    <div className="container">
      <Button variant="contained" color="primary"><Link to='converter'>Converter</Link></Button>
      <Button variant="contained" color="primary"><Link to='home'>Valutes List</Link></Button>
      <Route path='/home' render={() => <Home date={date} valutes={valutes} />} />
      <Route path='/converter' render={() => <Converter valutes={valutes} />} />
    </div>
  );
}

export default App;
