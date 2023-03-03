import { instance } from "./axios";

export const PRO_GET_SERVICE = async () => {

    let response = await instance.get('products');
    return response.data
};
export const PRO_POST_SERVICE = async (newProduct) => {
    await instance.post('products', newProduct)
};
export const PRO_SAGA_DELETE = async (idDel) => {
    await instance.delete("products/" + idDel);
};
export const PRO_SAGA_UPDATE = async (proUpdate) => {
    await instance.put("products/" + proUpdate.id, proUpdate);
};