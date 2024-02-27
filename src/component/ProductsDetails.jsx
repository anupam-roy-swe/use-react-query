/* eslint-disable react/prop-types */
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const receiveProducts = async () => {
  const response = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return response.data;
};

const ProductsDetails = ({ id }) => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products,", id],
    queryFn: receiveProducts,
  });

  if (isLoading) return <div>products is coming</div>;
  if (error) return <div> error is coming:{error.message} </div>;
  return (
    <div className='w-1/5'>
      <h1 className='text-xl my-2'>products data</h1>
      <div className='border bg-gray-100 p-1  text-md rounded flex flex-col'>
        {" "}
        <img
          className='object-cover h-24 w-24 border rounded-full m-auto '
          src={products.thumbnail}
          alt={products.title}
        />
        <p>{products.title}</p>
        <p>{products.description}</p>
        <p>{products.brand}</p>
        <p>usd {products.price}</p>
      </div>
    </div>
  );
};

export default ProductsDetails;
