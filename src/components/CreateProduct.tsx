import React from 'react';

const CreateProduct = () => {
    return (
        <form>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title..."
            />
            <button type={"submit"} className={"py-2 px-4 border rounded-[15px] bg-yellow-400 hover:bg-blue-700 hover:text-white"}>
                Create
            </button>

        </form>
    );
};

export default CreateProduct;