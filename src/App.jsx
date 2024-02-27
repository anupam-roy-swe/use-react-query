import ProductList from "./component/ProductList";
import ProductsDetails from "./component/ProductsDetails";

const App = () => {
  return (
    <div className=''>
      <ProductList />
      <ProductsDetails id={1} />
    </div>
  );
};

export default App;
