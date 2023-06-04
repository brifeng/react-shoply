import Product from './Product';
import { useSelector } from 'react-redux/es/exports';

const ProductList = ({ add, remove }) => {
    const products = useSelector(state => state.products);
    // const products = Object.values(p);

    // const productList = Object.keys(products).map(id => (
    //     <Product
    //         id={id}
    //         key={id}
    //         name={products[id].name}
    //         price={products[id].price}
    //         description={products[id].description}
    //         image_url={products[id].image_url}
    //         add={() => add(id)}
    //         remove={() => remove(id)}
    //     />
    // ))

    const productList = Object.keys(products).map(id => (
        <li key={id}>
            <a href={`products/${id}`}>
                {products[id].name}
                <p>${products[id].price}</p>
            </a>
            <button onClick={() => add(id)}>Add to Cart</button>
            <button onClick={() => remove(id)}>Remove from Cart</button>
        </li>
    ))

    return (
        <div>
            <ul>
                {productList}
            </ul>
        </div>
    )
}

export default ProductList;