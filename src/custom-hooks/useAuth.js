import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

const useAuth = () => {
  const [currentUser, setcurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user);
        
      } else {
        setcurrentUser(null);
        // setdisplayName("");
        // dispatch(REMOVE_ACTIVE_USER());
      }
    });
  });

  return { currentUser };
};

export default useAuth;
