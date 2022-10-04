import InitAxios from './initAxios';

class UserAxios extends InitAxios {
    constructor() {
        super('/user');
    }

    getAll() {
        return this.axios.get(`/users`).then((response) => response.data);
    }

    getOneUser(id) {
        return this.axios.get(`/${id}`).then((response) => response.data);
    }

    editUser(id, body) {
        return this.axios.put(`/${id}`, body).then((response) => response.data);
    }

    addAudit(id, body) {
        return this.axios.put(`/addaudit/${id}`, body).then((response) => response.data);
    }

    deleteUser(id) {
        return this.axios.delete(`/${id}`).then((response) => response);
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserAxios();
        }
        return this.instance;
    }

}

export default UserAxios.getInstance();
