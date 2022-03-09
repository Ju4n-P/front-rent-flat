import React from "react";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/stateUser/userAction";

export default function LogOut() {
  const dispatch = useDispatch();

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("id");
    dispatch(userLogout());
    window.location.href = "/";
  };

  return (
    <div>
      <button
        className="bg-[#1976D2] py-1 px-4 rounded-full text-sm text-white border border-[#1976D2] hover:bg-white hover:text-[#1976D2]"
        onClick={() => logout()}
      >
        Logout
      </button>
    </div>
  );
}
