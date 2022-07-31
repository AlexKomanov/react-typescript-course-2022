import {useEffect, useState} from "react";
import {IProduct} from "../models";
import axios, {AxiosError} from "axios";

export const useProducts = () => {


    const [items, setItems] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchProducts = async () => {
        try {
            setError('');
            setLoading(true)
            const response = await axios
                .get<IProduct[]>('https://fakestoreapi.com/products?limit=6')
            setItems(response.data)
            setLoading(false);
        }
        catch (e) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return { items, error, loading };


}