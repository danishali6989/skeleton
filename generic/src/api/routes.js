import { post, get} from './requests';
import { getAppConfiguration } from '../config';

const login = async (data) => {
    const result = await post(getAppConfiguration().BASE_URL + 'NextDoorUserLogin/NextDoorUserlogin', data);
    return result;
};

const getAllFeed = async () => {
    const result = await get(getAppConfiguration().BASE_URL + 'users');
    return result;
};

export {
    login,
    getAllFeed,
};
