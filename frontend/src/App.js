import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './screens/HomePage'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import EditUserScreen from './screens/EditUserScreen'
import ProductListScreen from './screens/ProductListScreen'


function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage/>} exact />
            <Route path='/product/:id' element={<ProductScreen/>} />
            <Route path='/cart/id?' element={<CartScreen/>} />
            <Route path='/login' element={<LoginScreen/>} />
            <Route path='/profile' element={<ProfileScreen/>} />
            <Route path='/shipping' element={<ShippingScreen/>} />
            <Route path='/payment' element={<PaymentScreen/>} />
            <Route path='/placeorder' element={<PlaceOrderScreen/>} />
            <Route path='/order/:id' element={<OrderScreen/>} />
            <Route path='/register' element={<RegisterScreen/>} />
            <Route path='/admin/userlist' element={<UserListScreen/>} />
            <Route path='/admin/user/:id/edit' element={<EditUserScreen/>} />
            <Route path='/admin/product/:id/edit' element={<ProductListScreen/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App