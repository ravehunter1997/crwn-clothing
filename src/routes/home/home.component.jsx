import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";
import React from "react";


const Home = () => {
  
  return (
    <div>
      <Outlet />
      <Directory/>
    </div>
  );
};

export default Home;
