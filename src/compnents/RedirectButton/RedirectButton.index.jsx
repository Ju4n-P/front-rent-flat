import React from "react";

export default function RedirectButton(props) {
  return (
    <a
      className="bg-[#1976D2] py-1 px-4 rounded-full text-sm text-white border border-[#1976D2] hover:bg-white hover:text-[#1976D2]"
      href={props.urlToGo}
    >
      {props.children}
    </a>
  );
}
