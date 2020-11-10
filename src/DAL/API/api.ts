import axios from "axios";

export const  userAPI = {
    getCurrentWeather()  {
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&appid=15a0c1a2d2be9b2201f410148fdec32f&units=metric&lang=ru`)
            .then(response => {
                return response.data
            })
    },
    getTime(time:number){
        return axios.get(`https://showcase.api.linx.twenty57.net/UnixTime/fromunix?timestamp=${time}`)
            .then(response=>{
                let time= response.data
                return time
            })
    }
}

