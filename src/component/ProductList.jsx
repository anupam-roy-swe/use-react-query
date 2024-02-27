import axios from "axios";
import { useQuery } from "@tanstack/react-query";
const receiveProducts = async () => {
  const response = await axios.get(`http://localhost:3000/products`);
  return response.data;
};
const ProductList = () => {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products"],
    queryFn: receiveProducts,
  });

  if (isLoading) return <div>fetching products</div>;
  if (error) return <div>error is coming :{error.message}</div>;

  return (
    <div className='flex flex-col justify-center items-center w-3/5'>
      <h2 className='text-3xl my-2'>Product List</h2>
      <ul className=' flex flex-wrap justify-center items-center'>
        {products &&
          products.map((products) => (
            <li
              className='flex flex-col items-center m-2 border rounded-sm'
              key={products.id}
            >
              <img
                className='object-contain h-64 w-96 rounded-sm'
                src={products.thumbnail}
                alt={products.title}
              />
              <p className='text-xl my-3'>{products.title}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
