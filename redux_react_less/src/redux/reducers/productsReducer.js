import {
    SET_PRODUCTS,
    SET_PRODUCTS_LOADING,
    RESET_PRODUCTS_LOADING,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from '../actionTypes'


const initialState = {
    products: [],
    wishList: [],
    cart: [],
    isProductsLoading: false,
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }

        }
        case SET_PRODUCTS_LOADING: {
            return {
                ...state,
                isProductsLoading: true
            }

        }
        case RESET_PRODUCTS_LOADING: {
            return {
                ...state,
                isProductsLoading: false
            }
        }
        case ADD_TO_WISHLIST: {
            // id of product
            const {payload} = action;
            const alreadyExists = state.wishList.find(({id}) => id === payload);
            if (alreadyExists) {
                return state
            }
            const itemInProducts = state.products.find(el => el.id === payload);
            return {
                ...state,
                wishList: [...state.wishList, itemInProducts]
            }
        }
        case REMOVE_FROM_WISHLIST: {
            const {payload} = action;
            const isMissing = !state.wishList.find(({id}) => id === payload);
            if (isMissing) {
                return state
            }
            return {
                ...state,
                wishList: state.wishList.filter(el => el.id !== payload)
            }
        }
        case ADD_TO_CART: {
            const {payload} = action;
            const itemInProducts = state.products.find(el => el.id === payload);
            return {
                ...state,
                cart: [...state.cart, itemInProducts]
            }
        }
        case REMOVE_FROM_CART: {
            const {payload} = action;
            const itemRemoveIndex = state.cart.findIndex(({id}) => id === payload);
            if (itemRemoveIndex >= 0)
                return {
                    ...state,
                    cart: state.cart.splice(itemRemoveIndex,1)
                };
            return state
        }
        default:
            return state
    }
}