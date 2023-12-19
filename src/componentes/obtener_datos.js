function convertir(kelvin) {
   return (kelvin- 273.15).toFixed(0);
}


export const obtener_datos = (props) => {
    var datos = {
        cityName: props.name,
        temp: convertir(props.main.temp),
        feel: convertir(props.main.feels_like),
        temp_max: convertir(props.main.temp_max),
        temp_min: convertir(props.main.temp_min),
        pressure: props.main.pressure,
        humidity: props.main.humidity,
        wind: props.wind.speed,
        descripcion : props.weather[0].description,
        src_img : props.weather[0].main
      
    };

    return datos;
};

