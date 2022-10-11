import axios from 'axios';
class InitAxios {
    constructor(path) {
        this.axios = axios.create({
            baseURL: `https://seoboost.herokuapp.com/api${path}`
        })
    }
}
export default InitAxios;