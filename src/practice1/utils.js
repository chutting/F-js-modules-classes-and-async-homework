import {ADDRESS, PORT, PATH} from './constant';

const getURL = (address, port, path) => {
    return `${address}:${port}${path}`;
}

export default getURL(ADDRESS, PORT, PATH);
