import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../features/cart/cartSlice";
import { TextField, Button } from "@mui/material";

export default function Cart() {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>

      {cart.map(item => (
        <div key={item.id} style={{ marginBottom: 20 }}>
          <span>{item.name}</span> - ${item.price}

          <TextField
            type="number"
            value={item.quantity}
            onChange={(e) =>
              dispatch(
                updateQuantity({
                  id: item.id,
                  quantity: Number(e.target.value),
                })
              )
            }
          />

          <Button
            color="error"
            onClick={() => dispatch(removeItem(item.id))}
          >
            Remove
          </Button>
        </div>
      ))}

      <h2>Total: ${total}</h2>
    </div>
  );
}