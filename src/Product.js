import { useParams } from "react-router";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Product = ({ add, remove }) => {
    const { id } = useParams();
    const products = useSelector(state => state.products);
    const { name, price, description, image_url } = products[id];

    return (
        <div>
            <p>{name}</p>
            <small>
                <p>{description}</p>
            </small>
            <p>${price}</p>
            <img width="300" src={image_url} alt={name}></img>
            <button onClick={() => add(id)}>Add to Cart</button>
            <button onClick={() => remove(id)}>Remove from Cart</button>
        </div>
    )
}

export default Product;