import { Badge, Nav, Navbar } from 'react-bootstrap'
import { Provider, useSelector } from 'react-redux'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { store } from './store'
import Home from './pages/Home'
import Cart from './pages/Cart'


export function Layout() {
  //state.cart.value =[] previous state
  //after new item has been added to the array
  //state.cart.value=[{id:1, name:'Pen', description: 'It's a pen', price:"RM10"}](new state)
  const cart = useSelector((state) => state.cart)

  const totalItemsInCart = cart.reduce((accumulator, item) => {
    return accumulator + item.amount;
  },0)
  


    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href='/'>E-commerce app</Navbar.Brand>
          <Nav>
            <Nav.Link href='/cart'>
              <i className='bi bi-cart'></i>
              <Badge pill variant="primary">
                {totalItemsInCart}
              </Badge>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Outlet />
      </>
    )
 }

 

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='cart' element={<Cart />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </Provider>
   )
 }
