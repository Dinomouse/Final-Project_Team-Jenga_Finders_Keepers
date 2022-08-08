import React from "react";
import "./ProfilePage.css";
import Axios from "axios";
import Item from "./item.js";
import Carousel from "react-elastic-carousel";
import { useState, useEffect } from "react";
import {
  getLocation,
  getLocationByUser,
  deleteLocation,
} from "../../models/models.js";
const Profile = ({ user, isAuthenticated, isLoading }) => {
  // const [toDelete, setToDelete] = useState("");
  const [savedLocations, setSavedLocations] = useState([]);
  useEffect(() => {
    if (user) {
      getSavedLocation();
    }
  }, [user]);
  async function getSavedLocation() {
    let savedLocation = await getLocationByUser(user);
    // console.log("Function", savedLocation);
    setSavedLocations(savedLocation.data);
    //console.log("Function", savedLocation);
  }
  async function deleteLocation(locationId) {
    Axios.delete(
      `https://pacific-journey-78384.herokuapp.com/https://8a50g75era.execute-api.eu-west-2.amazonaws.com/prod/location/${locationId}`
    ).then((response) => {
      console.log(response);
    });
    setSavedLocations([
      ...savedLocations.filter((element) => element.locationId !== locationId),
    ]);
  }
  console.log("Main", savedLocations);
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        {/*<button onClick={getLocation}>press me for everything</button>
     <button onClick={() => getLocationByUser(user)}>
     press me for filtered result
    </button> */}
        {/* <button onClick={() => deleteLocation(toDelete)}>
     Delete your favourite location
    </button> */}
        {/* <input type="text" onChange={handleChange} /> */}
        <Carousel itemsToShow={4}>
          {savedLocations == 0
            ? []
            : savedLocations?.map((e) => (
                <div className="Carousel" key="{savedLocations.locationId}">
                  <h1>
                    {e.locationName.charAt(0).toUpperCase() +
                      e.locationName.slice(1)}
                  </h1>
                  <img className="image" src={e.locationImage} alt="none"></img>
                  <button
                    className="sign"
                    onClick={() => deleteLocation(e.locationId)}
                  >
                    remove
                  </button>
                </div>
              ))}
        </Carousel>
      </div>
    )
  );
};
export default Profile;
