import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
        'X-RapidAPI-Key': 'befea706c8msh2c3524181ec817ep1751bbjsn8ea04be21d6d',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
};

export const dataFetchBodyPart = async () => {

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}