import axios from 'axios';

export const getProductsByQuery = async (searchQuery: string) => { 
    const result = await axios({   
        method: 'POST',
        url: process.env.NEXT_PUBLIC_DOMAIN + '/api/search',
        data: { searchQuery } 
    });
    return result
}
