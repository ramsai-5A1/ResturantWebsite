import {atom} from 'recoil';

export const userData = atom({
    key: "userData",
    default: {
        email: "dummy@gmail.com",
        id: "",
        name: "dummy"
    }
});

export const userCredentials = atom({
    key: "userCredentials",
    default: {
        name: "",
        email: "",
        password: ""
    }
});