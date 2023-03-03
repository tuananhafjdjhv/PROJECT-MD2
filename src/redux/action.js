import * as actionTypes from "./constanst/actionTypes";

//USER
export const act_get_user = () => {
    return {
        type: actionTypes.USER_GET
    }
}
export const act_user_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    }
};
export const act_post_user = (newUser) => {

    return {
        type: actionTypes.USER_POST,
        payload: newUser
    }
};


// Product

export const act_get_pro = () => {
    return {
        type: actionTypes.PRO_GET,
    };
};
export const act_pro_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    };
};
export const act_post_pro = (newPro) => {
    return {
        type: actionTypes.PRO_POST,
        payload: newPro
    };
};
export const act_delete_pro = (idDel) => {
    return {
        type: actionTypes.PRO_DELETE,
        payload: idDel,
    };
};
export const act_update_pro = (proUpdate) => {
    return {
        type: actionTypes.PRO_UPDATE,
        payload: proUpdate,
    };
};

// Cart

export const act_get_cart = (action) => {
    return {
        type: actionTypes.CART_GET,
        paload: action
    };
};
export const act_cart_success = (actionType, data) => {
    return {
        type: actionType,
        payload: data
    };
};
export const act_post_cart = (cart) => {
    return {

        type: actionTypes.CART_POST,
        payload: cart
    };

};
export const act_delete_cart = (idDel) => {
    return {
        type: actionTypes.CART_DELETE,
        payload: idDel,
    };
};
export const act_update_cart = (cartUpdate) => {
    return {
        type: actionTypes.CART_UPDATE,
        payload: cartUpdate,
    };
};
export const act_quantity = (quantity) => {
    return {
        type: actionTypes.CART_QUANTITY,
        payload: quantity,
    };
};