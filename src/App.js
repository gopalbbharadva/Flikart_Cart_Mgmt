import "./App.css";
import { ProductListing } from "./Pages/ProductListing";
import { Route, Routes } from "react-router-dom";
import { CartPage } from "./Pages/Cart/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
// {
//     "id":7,
//     "brand":"Spykar",
//     "size":"M",
//     "gender":"Female",
//     "price":349,
//     "image":"https://rukminim1.flixcart.com/image/503/604/kdvzwcw0-0/t-shirt/c/n/c/s-wkt-01bj-008-deep-wine-spykar-original-imafuzzruhfgscfr.jpeg?q=50"
// },
// {
//     "id":8,
//     "brand":"Spykar",
//     "size":"XL",
//     "gender":"Female",
//     "price":965,
//     "image":"https://rukminim1.flixcart.com/image/503/604/l3vxbbk0/t-shirt/t/y/5/s-wkt-01ba-013-spykar-original-imagewn5rk3wm5bd.jpeg?q=50"
// },
// {
//     "id":9,
//     "brand":"Levis",
//     "size":"S",
//     "gender":"Male",
//     "price":554,
//     "image":"https://rukminim1.flixcart.com/image/503/604/ktvucnk0/t-shirt/c/k/v/xl-81786-0064-levi-s-original-imag74suspyahx9z.jpeg?q=50"
// },
// {
//     "id":10,
//     "brand":"Levis",
//     "size":"M",
//     "gender":"Female",
//     "price":447,
//     "image":"https://rukminim1.flixcart.com/image/503/604/kvtuxe80/t-shirt/i/h/6/s-23771-0248-levi-s-original-imag8ncp3erxrgmz.jpeg?q=50"
// }
