import Axios from "axios";


Axios.defaults.baseURL = `https://rickandmortyapi.com/api/character/`;


export type stuff ={
    results: {
        name: string;
        id: number;
        image: string;
    }[]
};

const getCharacters = async (id: number) => {
        try {
            const response = await Axios.get<stuff>(`?page=` + id)
            return response.data

        } catch (error) {
            throw "Klarte ikke å hente characters " + error;
        }
}


export default  {
    getCharacters
}
