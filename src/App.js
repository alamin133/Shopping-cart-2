import Navbar from "./components/Navbar";
import classes from './App.module.css';
import Cart from "./components/Cart";
function App() {
  return (
    <div className={classes.App}>
     <Navbar/>
     <Cart/>
    </div>
  );
}

export default App;
