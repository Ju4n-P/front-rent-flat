import React from 'react';
import { useSelector } from "react-redux";
import "./FormProfile.scss"


const FormProfile = () => {
    const [currentUser, setCurrentUser] = React.useState({});
  const userToken = useSelector((state) => state.token);

  React.useEffect(() => {
    if (userToken) {
      window.location = "/login";
    } else {
      let myHeaders = new Headers();
      myHeaders.append("Authorization", `${userToken}`);

      let requestOptions = {
        method: "GET",
        headers: myHeaders,
      };

      fetch(`${process.env.url}/profile`, requestOptions)
        .then((response) => response.json())
        .then((result) => setCurrentUser(result))
        .catch((error) => console.log("error", error));
    }
  }, []);
    return (
        <div>
          <h1 className="title-form">Page Profile</h1>
          <form className="container-form">
            <label htmlFor="title">E-mail</label>
            <input type="text" id="email" 
              placeholder={currentUser.email}
            ></input>
            <button>Valider</button>
          </form>
        </div>
    );
};

export default FormProfile;