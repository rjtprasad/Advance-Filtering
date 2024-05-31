import './navigation.css';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";


function Navigation() {
  return (
    <nav>
        <div>
        <input type='text' placeholder="Enter shoes to search" />
      </div>

      <div>
          <a><FiHeart className='nav-icons'/></a>
          <a><AiOutlineShoppingCart className='nav-icons'/></a>
          <a><AiOutlineUserAdd className='nav-icons'/></a>
      </div>
    </nav>
    
  )
}

export default Navigation
