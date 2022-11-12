import React from 'react';
import './form.css'
import { useDispatch } from 'react-redux'
import { addWeather } from '../slice/weatherSlice'
import axios from 'axios';

const Form = () => {
    const [text, setText] = React.useState('');
    const dispatch = useDispatch()

    const handleSubmit =  (e) => {
        e.preventDefault();
        setText('')
        const city = text
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f7d9a1e9d1ca992f7f31ae1dceff8b09&units=metric&lang=ru`)
          .then(res => {
            dispatch(addWeather(res.data))
    console.log(res.data)
          })
      }
    

    return (
        <div className='formWrapper'>
            <form onSubmit={handleSubmit}>
                <input placeholder='Input your city' onChange={(e) => setText(e.target.value)} value={text}></input>
                <button value='submit' type="submit">submit</button>
            </form>
        </div>
    );

}

export default Form;
