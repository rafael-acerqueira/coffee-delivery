import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Layout } from "./Layout";
import { PurchaseConfirmed } from "./pages/PurchaseConfirmed";

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/delivery' element={<PurchaseConfirmed />} />
      </Route>
    </Routes>
  )
}