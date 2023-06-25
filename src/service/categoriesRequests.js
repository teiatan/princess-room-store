import axios from 'axios';

axios.defaults.baseURL = 'https://cors-proxy.fringe.zone/http://54.167.99.119:8080/';

export async function getAllCategories() {
    const { data } = await axios.get(`categories`);
    return data;
};

export async function addNewCategory(name) {
    const newCategory = {
        name
    }
    const { data } = await axios.post(`categories`, newCategory);
    return data;
};

export async function getCategoryById(id) {
    const { data } = await axios.get(`categories/${id}`);
    return data;
};

export async function updateCategory(id, name) {
    const updatedCategory = {
        name
    };
    const { data } = await axios.put(`categories/${id}`, updatedCategory);
    return data;
};

export async function deleteCategory(id) {
    const { data } = await axios.delete(`categories/${id}`);
    return data;
};

