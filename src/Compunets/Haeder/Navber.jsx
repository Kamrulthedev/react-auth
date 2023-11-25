import { Link, NavLink } from "react-router-dom";


const Navber = () => {


    const Links = <>
         <li><NavLink className="text-xl font-bold" to={'/'}>PRODUCTS</NavLink></li>
         <li><NavLink className="text-xl font-bold" to={'/About'}>ABOUT</NavLink></li>
         <li><NavLink className="text-xl font-bold" to={'/Contact'}>CONTACT</NavLink></li>
         <li><NavLink className="text-xl font-bold" to={'/Blog'}>BLOG</NavLink></li>
       
    </>

    return (
        <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {Links}
      </ul>
    </div>
   <h1 className="btn btn-ghost text-3xl font-bold">CLASSES</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {Links}
    </ul>
  </div>
  <div className="navbar-end">
 <Link to={'/Login'}> <button className="text-xl font-bold btn">LOGIN</button></Link>
  </div>
</div>
        </div>
    );
};

export default Navber;