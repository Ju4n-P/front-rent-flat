import React from "react";
import FormAddFlat from "../../components/FormAddFlat/FormAddFlat";
import FormProfile from "../../components/FormProfile/FormProfile";
import AddsList from "../../components/AddsList";
import CrudFlats from "../../components/CrudFlats/CrudFlats";
import AddPage from "../AddPage/AddPage"

import "./profile.scss";

const Profile = () => {

  return (
      <div className="main-container">
        <CrudFlats/>
        <AddPage/>
   </div>
       
      

  );
};

export default Profile;
