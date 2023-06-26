import axios from 'axios';

axios.defaults.baseURL = 'https://cors-proxy.fringe.zone/http://54.167.99.119:8080/';

export async function getAllProducts() {
    const { data } = await axios.get(`https://cors-proxy.fringe.zone/http://54.167.99.119:8080/products`);
    return data;
};

export async function addNewProduct({name, price, categoryName}) {
    const newProduct = {
        name,
        price,
        categoryName
    }
    const { data } = await axios.post(`products`, newProduct);
    return data;
};

export async function getProductById(id) {
    const { data } = await axios.get(`https://cors-proxy.fringe.zone/http://54.167.99.119:8080/products/${id}`);
    return data;
};

export async function updateProduct({id, name, price, categoryName}) {
    const updatedProduct = {
        id,
        name,
        price,
        categoryName
    };
    const { data } = await axios.put(`products/${id}`, updatedProduct);
    return data;
};

export async function deleteProduct(id) {
    const { data } = await axios.delete(`products/${id}`);
    return data;
};

