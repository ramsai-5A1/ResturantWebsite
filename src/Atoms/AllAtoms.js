import {atom} from 'recoil';

export const userData = atom({
    key: "userData",
    email: "dummy@gmail.com",
    id: "",
    name: "dummy"
});

export const userCredentials = atom({
    key: "userCredentials",
    userName: "",
    password: ""
});