import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
    const { _id, bookTitle } = useLoaderData();

    return (
        <div className="mt-28 px-4 lg:px-24">
            <h2>{bookTitle}</h2>
            <p className="text-gray-600 text-lg mt-12 font-medium">ID : {_id}</p>
        </div>
    );
};

export default SingleBook;


