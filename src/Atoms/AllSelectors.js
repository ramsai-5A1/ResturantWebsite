import { selector } from 'recoil';
import { userCredentials } from './AllAtoms';

export const userEmailSelector = selector({
    key: "userEmailSelector",
    get: ({ get }) => {
        const user = get(userCredentials);
        return user.email;
    }
});

export const userNameSelector = selector({
    key: "userNameSelector",
    get: ({ get }) => {
        const user = get(userCredentials);
        return user.name;
    }
});