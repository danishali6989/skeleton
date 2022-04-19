import { getAppConfiguration } from '../config';
import { get } from './requests';

const getallCategory = async () => {
    const result = await get(getAppConfiguration().BASE_URL + 'Categories/get-all');
    return result;
};

export {getallCategory}