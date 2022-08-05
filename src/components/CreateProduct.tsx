import React, {useState} from 'react';
import {IProduct} from "../models";
import product from "./Product";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const mockingData: IProduct = {
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: () => void;
}

const CreateProduct = ({onCreate} : CreateProductProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();


        if(value.trim().length === 0) {
            setError('Please enter a valid title')
            return
        }

        mockingData.title = value
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', mockingData)
        console.log(response);

        onCreate();
    }

    const changeHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        setError('')
    }

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
                value={value}
                onChange={changeHandler}
            />

            {error && <ErrorMessage error={error} />}

            <button type={"submit"}
                    className={"py-2 px-4 border rounded-[15px] bg-yellow-400 hover:bg-blue-700 hover:text-white"}>
                Create
            </button>

        </form>
    );
};

export default CreateProduct;