import { RequestOptions } from "../models/request-options";



const fetchServerResponse = async (url: string, options: RequestOptions) => {
    try {
        const response = await fetch(url, {
            ...options,
            credentials: 'include',
            headers: {
                ...options.headers, 
            }
        })
        if(!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }
        
        return await response;
    } catch(e) {
        throw e;
    }
}

export default fetchServerResponse;