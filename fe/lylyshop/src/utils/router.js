export const ADMIN_PATH = "/admin"

export const ROUTERS = {
    USER:{
        HOME: "",
        PROFILE:"/profile",
        PRODUCT:"/product",
        DETAIL:"/product/chitiet/:id",
        POST: "/post",
        CONTACT: "/contact",
        CART: "/cart",
        CHECKOUT: "/pay"
    },
    ADMIN:{
        LOGIN:`${ADMIN_PATH}/login`,
        ORDERS:`${ADMIN_PATH}/orders`,
        LOGOUT:`${ADMIN_PATH}/logout`,
    }
}