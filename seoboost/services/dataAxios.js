import InitAxios from './initAxios';

class DataAxios extends InitAxios {
    constructor() {
        super('/result');
    }

    search(body) {
        return this.axios.post('', body).then((response) => response.data);
    }


    static getInstance() {
        if (!this.instance) {
            this.instance = new DataAxios();
        }
        return this.instance;
    }

}

export default DataAxios.getInstance();
