import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutUser} from "../redux/slices/authSlice";
const Navbar = () => {
const aunthenticated = useSelector(state => state.auth.authenticated);
const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());   
  };
  return (
    <>
      <header className="bg-blue-500 flex  py-3 mt-0 px-10 rounded-sm">
        <nav className=" flex justify-between gap-x-6 items-center w-full  ">
          <div className="text-xl font-bold">
            <h1>DocFinder</h1>
          </div>
         
            { aunthenticated ?(
              <ul className="flex gap-x-6">
                <li><Link to ="/dashboard">Dashboard</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>

              </ul>
               ) : (
                <ul className="flex gap-x-6">

                <li><Link to="/">Home</Link></li>
                <li><Link to ="/dashboard">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>

                </ul>
                   )
            }

        </nav>
      </header>
    </>
  );
};

export default Navbar;
