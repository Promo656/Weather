import axios from 'axios';

export const userAPI = {
    async getCurrentWeather() {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=55.751244&lon=37.618423&appid=15a0c1a2d2be9b2201f410148fdec32f&units=metric&lang=ru`)
        return response.data
    },
    async getCoordinate() {
        const instance = axios.create({
            baseURL: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Token 8cd2e94533baf9299994d233f07eb04ee9ebb0d3'
            }
        })
        let response = await instance.get(`/address?lat=55.878&lon=37.653`)
        return response.data
    }
}


