import "./styles.css";
import useState from "react";
export default function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 248,
      name: "Apple",
      price: 2,
    },
    {
      id: 486,
      name: "Orange",
      price: 4,
    },
    {
      id: 938,
      name: "Banana",
      price: 3,
    },
  ];

  const addItemToCart = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    if (!cart.find((item) => item.id === id)) {
      setCart([...updatedCart, { ...cart }]);
    }
 

    console.log(id);
  };
  return (
    <div className="App">
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => addItemToCart(product.id)}>add to cart</button>
        </div>
      ))}
    </div>
  );
}

// * render products on the page (DON'T STYLE)
// * build a cart, allowing user to add/remove items
// * show $ total of the cart

// [
//   {
//      id: 248,
//      name: 'Apple',
//      price: 2
//   },
//   {
//      id: 486,
//      name: 'Orange',
//      price: 4
//   },
//   {
//      id: 938,
//      name: 'Banana',
//      price: 3
//   }
// ]
