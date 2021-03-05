import { v4 as uuidv4 } from 'uuid';

const noCache = (url: string) => { 
    let c = url.includes('?') ? '&' : '?';
    return url + c + 'noCache=' + uuidv4();
}

export default noCache;