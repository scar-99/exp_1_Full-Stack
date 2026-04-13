import Cart from "./components/Cart";
import { useDispatch } from "react-redux";
import { addItem } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() =>
          dispatch(addItem({ id: 1, name: "Smartphone", price: 299.99 }))
        }
      >
        Add Phone
      </button>

      <button
        onClick={() =>
          dispatch(addItem({ id: 2, name: "Tablet", price: 449.99 }))
        }
      >
        Add Tablet
      </button>

      <Cart />
    </div>
  );
}

export default App;