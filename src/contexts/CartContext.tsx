import { ReactNode, createContext, useState } from "react";

interface Coffee {
  id: number,
  name: string,
  price: number,
  quantity: number,
  image: string
}

interface CartContextType {
  coffees: Coffee[],
  cartItems: number,
  deliveryAddress: DeliveryAddress,
  addCoffeeToCart: (coffee: Coffee) => void,
  increaseQuantity: (id: number) => void,
  decreaseQuantity: (id: number) => void,
  removeCoffee: (id: number) => void,
  updateDeliveryAddress: (address: DeliveryAddress) => void,
  clearCart: () => void
}

interface DeliveryAddress {
  cep: string,
  street: string,
  number: number,
  neighboorhood: string,
  city: string,
  uf: string,
  payment_type: string
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CarContextProvider({ children }: CartContextProviderProps) {

  const [coffees, setCoffees] = useState<Coffee[]>([])

  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({})

  const cartItems = coffees.reduce((previous, current) => {
    return previous += current.quantity
  }, 0)


  const totalItemsPrice = coffees.reduce((previous, current) => {
    return previous += current.price * current.quantity
  }, 0)

  function addCoffeeToCart(coffee: Coffee) {

    const alreadyExist = coffees.find(cartCoffee => cartCoffee.id === coffee.id)

    if (alreadyExist) {
      updateCart(coffee)
    } else {
      setCoffees(state => [...state, coffee])
    }
  }

  function updateCart(coffee: Coffee) {
    setCoffees(state => state.map(cartCoffee => {
      if (cartCoffee => cartCoffee.id === coffee.id) {
        return {
          ...cartCoffee,
          quantity: cartCoffee.quantity + coffee.quantity
        }
      } else {
        return coffee
      }
    }))
  }

  function increaseQuantity(id: number) {
    setCoffees(state => state.map(coffee => {
      if (coffee.id === id) {
        return {
          ...coffee,
          quantity: coffee.quantity + 1
        }
      } else {
        return coffee
      }
    }))
  }

  function decreaseQuantity(id: number) {
    setCoffees(state => state.map(coffee => {
      if (coffee.id === id) {
        return {
          ...coffee,
          quantity: (coffee.quantity == 0 ? 0 : coffee.quantity - 1)
        }
      } else {
        return coffee
      }
    }))
  }

  function removeCoffee(id: number) {
    setCoffees(state => state.filter(coffee => coffee.id !== id))
  }

  function clearCart() {
    setCoffees([])
  }

  function updateDeliveryAddress(address: DeliveryAddress) {

    const types = {
      "credit-card": "Cartão de Crédito",
      "debit-card": "Cartão de Débito",
      "cash": "Dinheiro"
    }


    setDeliveryAddress({ ...address, payment_type: types[address.payment_type] })
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        deliveryAddress,
        cartItems,
        addCoffeeToCart,
        increaseQuantity,
        decreaseQuantity,
        removeCoffee,
        updateDeliveryAddress,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}