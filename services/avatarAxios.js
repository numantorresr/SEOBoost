import InitAxios from './initAxios';

class UserAxios extends InitAxios {
    constructor() {
        super('/avatar');
    }

    getAvatar(body) {
        return this.axios.post(`/`, body).then((response) => response.data);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserAxios();
        }
        return this.instance;
    }

}

export default UserAxios.getInstance();
