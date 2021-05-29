import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    setProducts,
    setProductsLoading,
    resetProductsLoading
} from './redux';

const Header = () => {
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
                    <h3>wishlist: {0}</h3>
                </div>
            </header>
            <hr/>
        </>
    )
};

const Products = () => {
    const {products, isProductsLoading} = useSelector(({products}) => products);
    const dispatch = useDispatch();
    const fetchProducts = async () => {
        try {
            dispatch(setProductsLoading());
            const resp = await fetch('https://fakestoreapi.com/products');
            const data = await resp.json();
            dispatch(setProducts(data));

        } catch (e) {
            console.log(e)
        } finally {
            dispatch(resetProductsLoading());
        }
    };
    useEffect(() => {
        fetchProducts();
    }, []);

    if (isProductsLoading) {
        return <div>LOADING</div>
    }
    return (
        <div>
            {products.map(product =>(
                <div key={product.id}>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <img src={product.image}/>

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
