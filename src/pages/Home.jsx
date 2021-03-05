import { TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Valute from '../components/Valute';

function Home({ date }) {

    const [searchValute, setSearchValute] = useState('')
   
    const onSearchChange = (e) => {
        let text = e.target.value
        setSearchValute(text)
    }
    
    return (
        <div>
            <div>{date}</div>
            <h3>Список валют</h3>
            <TextField onChange={onSearchChange} value={searchValute} id="standard-basic" label="Искать" />
            <div>
                <Valute searchValute={searchValute}/>
            </div>
        </div>
    )
}

export default Home
