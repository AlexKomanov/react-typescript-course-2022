import React, {useState} from 'react';
import Product from "./components/Product";
import {useProducts} from "./hooks/products";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Modal from "./components/Modal";
import CreateProduct from "./components/CreateProduct";

const App = () => {

    const {loading, error, items} = useProducts();
    const [modal, setModal] = useState(true);

    return (
        <div className="container rounded mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            {items.map(item => <Product product={item} key={item.id}/>)}
            {modal && <Modal title="Add new product">
                <CreateProduct onCreate={() => setModal(false)}/>
            </Modal>}
        </div>
    );
}

export default App;
