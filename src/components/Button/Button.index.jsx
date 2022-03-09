import React from "react";

export default function Button(props) {
  return (
    <button
      className="bg-[#1976D2] py-1 px-4 rounded-full text-sm text-white border border-[#1976D2] hover:bg-white hover:text-[#1976D2]"
      href={props.urlToGo}
    >
      {props.children}
    </button>
  );
}
