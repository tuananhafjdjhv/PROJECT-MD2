import { instance } from "./axios";

export const CART_GET_SERVICE = async () => {

    let response = await instance.get('products');
    return response.data
};
export const CART_POST_SERVICE = async (cart,id) => {
    await instance.post('cartproducts/'+id, cart);
};
export const CART_SAGA_DELETE = async (idDel) => {
    await instance.delete("cartproducts/" + idDel);
};
export const CART_SAGA_UPDATE = async (cartUpdate) => {
    await instance.put("cartproducts/" + cartUpdate.id, cartUpdate);
};