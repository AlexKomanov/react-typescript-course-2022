import React, {useState} from 'react';
import {IProduct} from "../models";

interface ProductProps {
    product: IProduct;
}

const Product = ({product}: ProductProps) => {

    const [details, setDetails] = useState(false);

    const buttonDetailsClasses = ['py-2 px-4 border rounded-3xl text-neutral-200', details ? 'bg-blue-600' : 'bg-amber-600'];

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img className="w-1/6" src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p className="font-bold">{product.price} $</p>
            <button
                className={buttonDetailsClasses.join(' ')}
                onClick={() => setDetails(state => !state)}
            >
                {details ? 'Hide Details' : 'Show Details' }
            </button>

            {details && <div>
                <p>{product.description} </p>
                <p>Rate: <span className="font-bold">{product.rating.rate}</span></p>
            </div>}

        </div>
    );
};

export default Product;