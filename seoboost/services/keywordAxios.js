import InitAxios from './initAxios';

class KeywordsAxios extends InitAxios {
    constructor() {
        super('/keyword');
    }

    keywords(body) {
        return this.axios.post('', body).then((response) => response.data);

    }


    static getInstance() {
        if (!this.instance) {
            this.instance = new KeywordsAxios();
        }
        return this.instance;
    }

}

export default KeywordsAxios.getInstance();