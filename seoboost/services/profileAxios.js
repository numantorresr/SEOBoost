import InitAxios from './initAxios';

class ProfileAxios extends InitAxios {
    constructor() {
        super('/profile');
    }

    me(token) {
        return this.axios.get('/', {
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then((response) => response.data);
    }



    static getInstance() {
        if (!this.instance) {
            this.instance = new ProfileAxios();
        }
        console.log(this.instance);
        return this.instance;
    }

}

export default ProfileAxios.getInstance();