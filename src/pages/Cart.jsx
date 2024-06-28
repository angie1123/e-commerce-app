import {  Container } from "react-bootstrap"
import {  useSelector } from "react-redux"
import CartItem from "../components/CartItem"

export default function Cart() {

  const cart = useSelector(state => state.cart)
  let subtotal = 0
  
  cart.forEach((item) => {
    //assumes price is in the format 'RMxx'
    //now it multiplies by the amount
    subtotal += parseInt(item.price.substring(2))*item.amount;
  })

  
  return (
  <Container>
      <h2>Your Cart:</h2>
      {cart.map((item, index) => (/*() return*/
        <div key={index}>
          <CartItem item={item} />
        </div>
      )  
      )}
      <h4>Subtotal: RM {subtotal}</h4>
    </Container>
  )
}
