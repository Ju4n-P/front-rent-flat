import React from "react";
import FormAddFlat from "../../components/FormAddFlat/FormAddFlat";
import FormProfile from "../../components/FormProfile/FormProfile";
import AddsList from "../../components/AddsList";

import "./profile.scss";

const Profile = () => {

  return (
      <div className="main-container">
        <FormProfile/>
        <FormAddFlat />

        <AddsList urlToFetch="https://api-rails-immocoin.herokuapp.com/articles/" />
      </div>
       
      

  );
};

export default Profile;
