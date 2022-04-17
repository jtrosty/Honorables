import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const access = "student";
const historyClass = "HIST301";

const Profile = (props) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);
  const [userType, setType] = useState(null);

  //useEffect(() =>
  //)

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-itxholhm.us.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

  getUserMetadata();
}, [getAccessTokenSilently, user?.sub]);
  return (
    isAuthenticated && (
      <div>
        {isAuthenticated}
        {user.name}
        {user.email}
      </div>
    )
  );
};

export default Profile;

  //  isAuthenticated && (
  //    <div>
  //      {user.name}
  //      {user.email}
  //    </div>
//        <img src={user.picture} alt={user.name} />
//        <h2>{user.name}</h2>
//        <p>{user.email}</p>
//        <h3>User Metadata</h3>
//        {userMetadata ? (
//          <pre>{JSON.stringify(userMetadata, null, 2)} </pre>
//        ) : (
//          "No user metadata defined"
//        )}