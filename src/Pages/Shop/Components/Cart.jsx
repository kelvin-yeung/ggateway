import CartItem from './CartItem.jsx'

export default function Cart({ setIsCartOpen, cart }) {
  return (
    <div className={`fixed right-0 top-0 z-20 h-screen w-1/4 bg-[#202020]`}>
      <button
        className="absolute right-2 top-2"
        onClick={() => setIsCartOpen(false)}
      >
        Close Cart
      </button>
      {cart.map((item) => (
        <CartItem key={item.title} title={item.title} img={item.img} price={item.price} />
      ))}
    </div>
  );
}