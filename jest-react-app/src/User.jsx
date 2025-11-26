// User.js

import React, { useEffect, useState } from 'react';

import axios from 'axios';




const User = () => {

  const [user, setUser] = useState(null);




  useEffect(() => {

    const fetchData = async () => {

      const response = await axios.get('http://localhost:3001/users/get/690a1dc961974a2ed8706db6');

      setUser(response.data);

    };




    fetchData();

  }, []);




  if (!user) {

    return 'Loading...';

  }




  return <div>{user.fullName}</div>;

};




export default User;