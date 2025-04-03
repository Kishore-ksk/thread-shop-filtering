import React from 'react'
import "./Header.css";
import LOGO from '../images/LOGO.svg'
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import Nav from '../Navigation/Nav'
export default function Header({ handleInputChange, query }) {
  return (
    <header id='container'>
      <div className='brand'>
        <img src={LOGO} alt="" className='logo' />
        <p>THREAD</p>
      </div>
      <nav id='navContainer'>
        <ul className='nav'>
          <li><a href="#">Collections</a></li>
          <li><a href="#" className='selected'>Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <ul className='profile'>
        <Nav handleInputChange={handleInputChange} />
        <li><button>
          <FaSearch />
        </button></li>
        <li><button>
          <FaRegHeart />
        </button></li>
        <li><button>
          <GrCart />
        </button></li>
        <li><button>
          <VscAccount />
        </button></li>
      </ul>
    </header>
  )
}
