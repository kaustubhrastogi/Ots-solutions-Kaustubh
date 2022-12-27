import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Product from './component/Product';
import Cart from './component/Cart';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <div style={{display:'flex', background:'gray', padding:'4px'}}>
        <Link style={{marginRight:'20px'}} to='/'>Product</Link>
        <Link to='/cart'>Cart</Link>
      </div>
      <Provider store={store}>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route  path='/cart' element={<Cart />} />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;




// Reverse words in a given string
// Print duplicate characters from a string
// If two strings are anagrams of each other
// How do you check if a given string is a palindrome


/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Given an integer x, return true if x is a palindrome, and false otherwise.
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's. Increment the large integer by one and return the resulting array of digits.
*/