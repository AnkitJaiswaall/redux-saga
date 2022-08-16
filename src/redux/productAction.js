import { PRODUCT_LIST,SET_PRODUCT_LIST } from "./constant"

export const productList =() => {

    return {
        type: PRODUCT_LIST,
        data:"Apple"
}
}

export const SetProductList =(data) => {
console.log("set action")
    return {
        type: SET_PRODUCT_LIST,
        data
}
}