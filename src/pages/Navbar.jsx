import reactLogo from "../assets/react.svg";
import { useNavigate } from "react-router-dom";

export default function Navbar({ selected }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-20 bg-gray-600 flex justify-between">
      <div className="h-full flex items-center">
        <img className="m-2" src={reactLogo} />
        <p className="w-0.5 h-10 bg-white m-2"></p>
        <p className="m-2 text-white">Nahl Syareza Rahidra</p>
      </div>
      <div className="h-full flex items-center">
        <p
          className={`m-2 text-white w-16 text-center ${
            selected == "home" ? "font-bold" : ""
          }`}
          onClick={(e) => {
            navigate("/home");
          }}
        >
          Home
        </p>
        <p className="w-0.5 h-10 bg-white m-2"></p>
        <p
          className={`m-2 text-white w-16 text-center ${
            selected == "counter" ? "font-bold" : ""
          }`}
          onClick={(e) => {
            navigate("/counter");
          }}
        >
          Counter
        </p>
        <p className="w-0.5 h-10 bg-white m-2"></p>
        <p className="m-2 text-white w-16 text-center">About</p>
        <p className="w-0.5 h-10 bg-white m-2"></p>
        <p className="m-2 text-white w-16 text-center">Products</p>
        <p className="w-0.5 h-10 bg-white m-2"></p>
        <p className="m-2 text-white w-16 text-center">Signup</p>
        <p className="w-0.5 h-10 bg-white m-2"></p>
        <p className="m-2 text-white w-16 text-center">Login</p>
      </div>
    </div>
  );
}
