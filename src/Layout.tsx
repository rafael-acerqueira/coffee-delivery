import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { CarContextProvider } from "./contexts/CartContext";

export function Layout() {
  return (
    <CarContextProvider>
      <Header />
      <Outlet />
    </CarContextProvider>
  )
}