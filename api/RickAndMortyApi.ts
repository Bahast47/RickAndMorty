import Axios from "axios";


Axios.defaults.baseURL = `https://rickandmortyapi.com/api/character/`;


export type stuff ={
    results: {
        name: string;
        id: number;
        image: string;
    }[]
};


let id = 1;


const getCharacters = async () => {
        try {
            const response = await Axios.get<stuff>(`?page=` + id)
            return response.data

        } catch (error) {
            throw "Klarte ikke å hente characters " + error;
        }
}


export function nextPage() {
    window.scrollTo(0, 0)
    return id++
}

export function previousPage() {
    if (1 !< id) {
        window.scrollTo(0, 0)
        return id--
    }

}


export default  {
    getCharacters,
}
