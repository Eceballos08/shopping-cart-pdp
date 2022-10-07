import { CartProvider } from "./context/CartContext";
import Home from "./screens/home/Home";

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
