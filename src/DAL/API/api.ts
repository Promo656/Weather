import axios from "axios";

export const userAPI = {
    async getCurrentWeather() {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=55.751244&lon=37.618423&appid=15a0c1a2d2be9b2201f410148fdec32f&units=metric&lang=ru`)
        return response.data
    }
}


