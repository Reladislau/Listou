import axios from "../axiosConfig";

export async function fetchLists() {
    try {
        const path = `/lists`;
        const response = await axios.get(path);
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar listas:', error);
        return [];
    }
}

export async function createList(list) {
    try {
        const path = `/lists`;
        const response = await axios.post(path, list);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar lista:', error);
        return null;
    }
}