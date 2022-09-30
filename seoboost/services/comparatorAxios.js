import InitAxios from './initAxios';

class ComparatorAxios extends InitAxios {
    constructor() {
        super('/seller');
    }

    comparator(body) {
        return this.axios.post('', body).then((response) => response.data);

    }


    static getInstance() {
        if (!this.instance) {
            this.instance = new ComparatorAxios();
        }
        return this.instance;
    }

}

export default ComparatorAxios.getInstance();