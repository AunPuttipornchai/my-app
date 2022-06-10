import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductItem from "./component/product/ProductItem";

function App() {
  return (
    <div>
      <Header/>
      <ProductItem productName = "Iphone 11" unitPrice = "145000"/>
      <ProductItem productName = "Iphone SE" unitPrice = "125000"/>
      <ProductItem productName = "Ipad mini" unitPrice = "245000"/>

      <Footer company = "Aunlab" email = "Aun@aunlab.com"/>
    </div>
  );
}

export default App;


//hello World