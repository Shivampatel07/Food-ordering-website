import React, { useEffect } from "react";
import CardRestaurant from "../components/CardRestaurant";
import axios from "axios";
import configureData from "../environments/environments";
import toast from "react-hot-toast";
import { useAuth } from "../authentication/Authcontext";

function TrendingRestaurant() {
  const [restaurantData, setRestaurantData] = React.useState([]);
  const { setIsLoading } = useAuth()

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(configureData.baseUrl + "/api/restaurent/all")
      .then((response) => {
        const allResturentData = response.data
        setRestaurantData(allResturentData.data);
      })
      .catch((error) => {
        toast.error("Internal server error")
      }).finally(() => {
        setIsLoading(false)
      })
  }, []);
  return (
    <div>
      <h1 className="text-xl md:text-3xl font-bold text-center mt-5">
        Trending restaurant at Ahmedabad
      </h1>
      <div className="flex justify-center items-center mt-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14">
          {restaurantData.map((restaurant, index) => {
            return (
              <div key={index}>
                <CardRestaurant
                  src={configureData.restaurantImage + "/" + restaurant.image}
                  alt="ahmedabad"
                  title={restaurant.name}
                  rating={restaurant.rating}
                  famous={
                    restaurant.famous ? restaurant.famous : "Not Available"
                  }
                  location={restaurant.address}
                  url={"/restaurant/" + restaurant._id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TrendingRestaurant;
