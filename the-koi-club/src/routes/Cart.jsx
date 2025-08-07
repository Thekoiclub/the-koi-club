export default function Cart() {
  const items = [
    { id: 1, name: 'Kusuri Pro Formalin & Malachite', qty: 1, price: 19.99 }
  ]
  const total = items.reduce((s,i)=>s+i.price*i.qty,0).toFixed(2)
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">Cart</h2>
      <div className="card space-y-2">
        {items.map(i => (
          <div key={i.id} className="flex justify-between items-center">
            <div>
              <div className="font-medium">{i.name}</div>
              <div className="text-xs text-gray-500">Qty: {i.qty}</div>
            </div>
            <div>£{i.price.toFixed(2)}</div>
          </div>
        ))}
        <div className="flex justify-between border-t pt-2 font-semibold">
          <span>Total</span><span>£{total}</span>
        </div>
        <button className="btn w-full">Checkout (Stripe test)</button>
      </div>
    </div>
  )
}
