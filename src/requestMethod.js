import axios from "axios"

const BASE_URL="https://immense-crag-28554-725ccbfb5e9c.herokuapp.com/vehicle/"


export const publicRequest=axios.create({
    baseURL:BASE_URL
})