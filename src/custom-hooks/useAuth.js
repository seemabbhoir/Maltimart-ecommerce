import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config";

const useAuth = () => {
  const [currentUser, setcurrentUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setcurrentUser(user);
        // console.log(user);
        // if (user.displayName == null) {
        //   const u1 = user.email.substring(0, user.email.indexOf("@"));
        //   const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
        //   setdisplayName(uName);
        // } else {
        //   setdisplayName(user.displayName);
        // }
        // dispatch(
        //   SET_ACTIVE_USER({
        //     email: user.email,
        //     userName: user.displayName ? user.displayName : displayName,
        //     userID: user.uid,
        //   })
        // );
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
