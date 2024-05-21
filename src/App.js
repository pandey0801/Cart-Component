
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink } from 'react-router-dom';
import Home from './component/Home';
import Store from './component/Store';
import About from './component/About';
import CartMain from './cart/CartMain';
import { Context } from './store/Context';
import Contact from './component/Contact';
import ProductDetail1 from './component/ProductDetail1';
import ProductDetail2 from './component/ProductDetail2';
import ProductDetail3 from './component/ProductDetail3';
import ProductDetail4 from './component/ProductDetail4';
import Login from './component/Login';
import LogOut from './component/LogOut';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showCart, setShowCart] = useState(false);
  const initialToken = localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);
  // const [email, setEmail] = useState(localStorage.getItem('email'));
  const [cartItem, setCartItem] = useState([]);
  const [totalItem, setTotalItem] = useState(0);

  const isLoggedIn = !!token;

  const email = localStorage.getItem('email');

  const sanitizedEmail = email ? email.replace(/[@.]/g, '_') : '';

  const login = (token, email) => {
    localStorage.setItem('token', token);
    setToken(token);
    // setEmail(email);
    fetchCartData(token, email);
  };

  const handleSectionClick = (section) => {
    if (section === 'cart') {
      setShowCart(true);
    } else {
      setActiveSection(section);
    }
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  const addCart = (itemname, itemprice) => {
    const newItem = [...cartItem, { name: itemname, price: itemprice }];
    setCartItem(newItem);
    const count = newItem.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    setTotalItem(count);
    addData(newItem);
  };

  const removeCart = (itemname) => {
    const delItem = cartItem.filter((item) => item.name !== itemname);
    setCartItem(delItem);
    const count = delItem.reduce((acc, item) => acc + item.price, 0).toFixed(2);
    setTotalItem(count);
    addData(delItem);
  };

  const addData = async (cartItem) => {
    try {
      const response = await fetch(`https://react-http-af8d1-default-rtdb.firebaseio.com/cartData/${sanitizedEmail}.json?auth=${token}`, {
        method: 'PUT',
        body: JSON.stringify(cartItem),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to store cart data');
      }

      const data = await response.json();
      console.log('Cart data stored successfully:', data);
    } catch (error) {
      console.error('Error storing cart data:', error.message);
    }
  };

  const fetchCartData = async (token, email) => {
    try {
      const sanitizedEmail = email ? email.replace(/[@.]/g, '_') : '';
      console.log(sanitizedEmail);
  
      const response = await fetch(`https://react-http-af8d1-default-rtdb.firebaseio.com/cartData/${sanitizedEmail}.json?auth=${token}`);
      if (!response.ok) {
        throw new Error('Something went wrong while fetching cart data!');
      }
      const data = await response.json();
  
      if (data) {
        // Ensure data is an array
        const cartDataArray = Array.isArray(data) ? data : Object.values(data);
        setCartItem(cartDataArray);
  
        const count = cartDataArray.reduce((acc, item) => acc + item.price, 0).toFixed(2);
        setTotalItem(count);
  
        console.log(`Fetched cart data:${sanitizedEmail}`, cartDataArray);
      }
    } catch (error) {
      console.log('Error fetching cart data:', error.message);
    }
  };

  useEffect(() => {
    if (token && email) {
      fetchCartData(token, email);
    }
  }, [token, email]);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setToken(null);
    alert('are sure you want to LogOut')
    // setEmail(null);

  };

  return (
    <Context.Provider value={{ cartItem, totalItem, addCart, removeCart, token, login, isLoggedIn }}>
      <Router>
        <div>
          <nav className="p-3 flex bg-black justify-center items-center">
            <div className="flex-none w-20 h-7">
              <NavLink to="/home" onClick={() => handleSectionClick('home')} className="text-white">Home</NavLink>
            </div>
            <div className="flex-none w-20 h-7">
              <NavLink to="/store" onClick={() => handleSectionClick('store')} className="text-white">Store</NavLink>
            </div>
            <div className="flex-none w-20 h-7">
              <NavLink to="/about" onClick={() => handleSectionClick('about')} className="text-white">About</NavLink>
            </div>
            <div className="flex-none w-20 h-7">
              <NavLink to="/login" onClick={() => handleSectionClick('login')} className="text-white">Login</NavLink>
            </div>

            <div className="flex-none w-20 h-7">
              <NavLink to="/contact" onClick={() => handleSectionClick('contact')} className="text-white">Contact</NavLink>
            </div>

            <div className="flex-none w-20 h-7">
              {isLoggedIn ? (
                <NavLink to="/logout" onClick={() => { handleSectionClick('logout'); logout(); }} className="text-white">Logout</NavLink>
              ) : null}
            </div>
            
          {isLoggedIn &&  <div className="text-white text-base w-20 h-7 flex items-end">
              <button className="border border-blue-500 px-4" onClick={() => handleSectionClick('cart')}>Cart</button>
            </div> }
          </nav>

          <Switch>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact component={Home} />
            {isLoggedIn && <Route path="/store" exact component={Store} />}
            {!isLoggedIn && <Route path="/store" exact component={Login} />}
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={LogOut} />
            <Route path="/store/1" exact component={ProductDetail1} />
            <Route path="/store/2" exact component={ProductDetail2} />
            <Route path="/store/3" exact component={ProductDetail3} />
            <Route path="/store/4" exact component={ProductDetail4} />
          </Switch>

          {showCart && <CartMain closeCart={handleCloseCart} />}
        </div>
      </Router>
    </Context.Provider>
  );
}

export default App;
