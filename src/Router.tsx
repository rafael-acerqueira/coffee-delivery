import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./Layout";


export function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  )
}