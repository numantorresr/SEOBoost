import InitAxios from './initAxios';

class UserAxios extends InitAxios {
    constructor() {
        super('/user');
    }

    getOneUser(id) {
        return this.axios.get(`/${id}`).then((response) => response.data);
    }

    editUser(id, body) {
        return this.axios.put(`/${id}`, body).then((response) => response.data);
    }
    deleteUser(id, body) {
        return this.axios.delete(`/${id}`, body).then((response) => response.data);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserAxios();
        }
        return this.instance;
    }

}

export default UserAxios.getInstance();
