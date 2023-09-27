import { NavLink } from "react-router-dom";
const Navber = () => {
    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[] p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Home
                        </NavLink>;
                        <NavLink
                            to="/messages"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "red"
                            }
                        >
                            Home
                        </NavLink>;
                        <NavLink
                            to="/messages"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : "red"
                            }
                        >
                            Statistics
                        </NavLink>;
                    
                       
                    </ul>
                </div>
                <img src={"https://i.ibb.co/1qP2Rmc/Logo.png"} alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/Donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                            }
                        >
                           Donation
                        </NavLink>
                        <NavLink
                            to="/Statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-600 underline" : "red"
                            }
                        >
                            Statistics
                        </NavLink>
                    
                </ul>
            </div>
        </div>

    );
};

export default Navber;