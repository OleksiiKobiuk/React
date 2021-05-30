import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    // setProducts,
    // setProductsLoading,
    // resetProductsLoading,
    fetchProducts,
    addToWishList,
    removeFromWishList,
    addToCart,
    removeFromCart
} from './redux';

const Header = () => {
    const {wishList} = useSelector(({products}) => products);
    const wishListTotalPrice = wishList.reduce((acc,el) => {
        return (acc+=el.price);
    }, 0);
    return (
        <>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h3>Our nice shop!</h3>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <h3 style={{marginRight: '20px'}}>cart: {0}</h3>
                    <h3 title={wishListTotalPrice}>wishlist: {wishList.length}</h3>
                </div>
            </header>
            <hr/>
        </>
    )
};
const isInWishList = (wishlist, id) => !!wishlist.find(el => el.id === id);

const Products = () => {
    const {wishList} = useSelector(({products}) => products);
    const {products, isProductsLoading} = useSelector(({products}) => products);
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     try {
    //         dispatch(setProductsLoading());
    //         const resp = await fetch('https://fakestoreapi.com/products');
    //         const data = await resp.json();
    //         dispatch(setProducts(data));
    //
    //     } catch (e) {
    //         console.log(e)
    //     } finally {
    //         dispatch(resetProductsLoading());
    //     }
    // };
    useEffect(() => {
        dispatch(fetchProducts({
            field: 'price',
            order: 'ASC'
        }));
    }, []);

    if (isProductsLoading) {
        return <div>LOADING</div>
    }
    return (
        <div>
            {products.map(product => (
                <div key={product.id}
                     style={{
                         width: '70%',
                         margin: '20px auto'
                     }}>
                    <button onClick={() => {
                        isInWishList(wishList, product.id) ? dispatch(removeFromWishList(product.id))
                            : dispatch(addToWishList(product.id))

                    }}>
                        {isInWishList(wishList, product.id)
                            ? 'remove from wishlist'
                            : 'add to wishlist'}
                    </button>
                    <h4>{product.title}
                    <br/>
                    Price: {product.price}</h4>
                    <p>{product.description}</p>
                    <img alt="test" style={{width: '100%'}}
                         src={product.image}/>

                </div>
            ))}
        </div>);
}

export default function App() {

    return (
        <div>
            <Header/>
            <Products/>
        </div>
    );
}
