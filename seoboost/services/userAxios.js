import InitAxios from './initAxios';

class UserAxios extends InitAxios {
    constructor() {
        super('/user');
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserAxios();
        }
        // console.log(this.instance);
        return this.instance;
    }

}

export default UserAxios.getInstance();
