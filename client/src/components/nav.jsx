import {  NavLink } from "react-router-dom";
import axios from 'axios'

function Nav({handleSearch, search}) {

  

  return (
    <div className="p-2 bg-blue-200">
      <div className="p-3 flex justify-evenly items-center">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          placeholder="Search"
          className="p-3 w-3/4 rounded-full bg-gray-100 focus:outline-none"
        />
        <div className="px-3">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="px-3">
          <NavLink to="/addcontact">+ Contact</NavLink>
        </div>
      
      </div>
    </div>
  );
}

export default Nav;
