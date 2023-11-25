import { useState } from 'react';
import './Homepage.css';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
        <div class="banner">
            <div class="navbar">
                <img className="logo" alt="logo" src="src/image/Vector.svg" />
                <ul class="container">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <ul class="container2">
                    <li><img className="cart" alt="Cart" src="src/image/Search.svg" /></li>
                    <li><img className="cart" alt="Cart" src="src/image/Cart.svg" /></li>
                </ul>
            </div>

            <div class="content">
                <h1 class="h1">Agriculture</h1>
                <p class="p">We are producing fresh products</p>
                <button type="button"><span></span>Discover more</button>

                <div>
                    <div className="image-and-text-container">
                    <img className="image" alt="logo" src="src/image/ambot1.png" />
                    <div className="text-container">
                        <a>The best quality standards</a>
                    </div>
                    <img className="image" alt="logo" src="src/image/ambot.png" />
                    <div className="text-container">
                        <a>Smart organic service</a>
                    </div>
                    <img className="image" alt="logo" src="src/image/ambot2.png" />
                    <div className="text-container">
                        <a>Natural healthy products</a>
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
  )
}

export default App
