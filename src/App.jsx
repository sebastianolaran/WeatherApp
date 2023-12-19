import { useState } from 'react';
import './App.css';
import axios from "axios"
import { obtener_datos } from './componentes/obtener_datos';


const clave_api = "e2410851ae1da9f1a73d8b9dfd906ae3";


function App() {
  const [data, setData] = useState({});
  
  const [newCiudad, setNewCiudad] = useState('');

  
  const handleInputChange = (event) => {
    setNewCiudad(event.target.value);
  };


 
  const handleSubmit = (event) => {
    event.preventDefault()
    
    const apiUrlDay = 'https://api.openweathermap.org/data/2.5/weather?q='+ newCiudad +'&appid=' + clave_api;
    
    axios.get(apiUrlDay).then(response =>{
      setData(obtener_datos(response.data));

      
    })
    .catch(error => {
      console.error(error)
    })
    setNewCiudad("")
    setData({})
   

  };

  

  return (
    <>
    <div className="root">
      <div className="navbar">
        <h1>React Clima</h1>
      </div>
      <div className='formulario'>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Ingrese una ciudad' value={newCiudad} onChange={handleInputChange}/>
        </form>
      </div>

      {data && Object.keys(data).length > 0 ? (
        <div className="pronostico_hoy">
        <h2>Pronostico Diario</h2>
        <div className="info_pronostico">
        <div className="carta_main">
          <h3 className="ciudad">{data.cityName ? data.cityName : '--'}</h3>
          <div className="temperaturas">
          <img src={`./src/assets/${data.src_img}.png`} alt="" />
            <h2 className='valor'>{data.temp ? `${data.temp} ºC` : '--'}</h2>
          </div>
          
        </div>
        <div className="carta_main">
          <div className="info_pronostico_extra">
          <h3 className="sentimiento">{data.feel ? `Sensación térmica: ${data.feel}
          ºC` : '--'}</h3>

          <div className="topes">
            <div className="maximo">
              < img src=".\src\assets\high-icon.svg" alt="" />
              <h2 className='valor'>{data.temp_max ? ` ${data.temp_max}
          ºC` : '--'}</h2>
            </div>
            <div className="maximo">
              <img src=".\src\assets\low-icon.svg" alt="" />
              <h2 className='valor'>{data.temp_min ? ` ${data.temp_min}
          ºC`  : '--'}</h2>
            </div>
          </div>
          <div className="infoextra">
            <div className="info">
              <img src=".\src\assets\wind-icon.svg" alt="" />
              <p>Viento :</p>
              <p>{data.wind ? ` ${data.wind}ph` : '--'}</p>
            </div>
            <div className="info">
              <img src=".\src\assets\humidity-icon.svg" alt="" />
              <p className='descripcion'>Humedad :</p>
              <p className='valor'>{data.humidity ? ` ${data.humidity}%` : '--'}</p>
            </div>
            <div className="info">
              <img src=".\src\assets\pressure-icon.svg" alt="" /> 
              <p>Presion :</p>
              <p>{data.pressure ? ` ${data.pressure}hPa` : '--'}</p>
            </div>
          </div>
          <p className='Descripcion'></p>
        </div>
        </div>
        </div>
      </div>) : null}
      
      <footer>
        <p> Diseñado por Sebastian Olaran</p>
        <div className="social">
          <img src=".\src\assets\linkedin.png" href=""></img>
          <img src=".\src\assets\github.png"></img>

        </div>
      </footer>
      </div>

    </>
  );
}

export default App;
