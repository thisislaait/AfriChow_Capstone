import React from "react";
import Image from "../assets/Camp Images/Onay Beach.jpg";
import Nav from "../components/Nav";

const Profile = () => {

    return (
      <div>
        <Nav />
        <section className="my-24 mx-10">
            <img src={ Image } alt="" srcset="" className="w-40 h-40 rounded-full"/>
            <h3></h3>
        </section>

      </div>
    )
  }
  
  export default Profile