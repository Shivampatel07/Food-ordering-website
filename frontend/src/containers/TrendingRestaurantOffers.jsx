import React from "react";
import CardRestaurant from "../components/CardRestaurant";

function TrendingRestaurantOffers() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-10">
        Trending restaurants at Ahmedabad
      </h1>
      <div className="flex justify-center items-center mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-14  ">
          <CardRestaurant
            src="/assets/Ahmedabad Food Guide.webp"
            alt="ahmedabad"
            title="Restaurant no.1"
            rating={4.5}
            famous="Chinese, Italian, Mexican, North Indian"
            location="Chandlodia, Ahmedabad-382481"
            offers="150$ off above 300$"
          />
          <CardRestaurant
            src="/assets/Ahmedabad Food Guide.webp"
            alt="ahmedabad"
            title="Restaurant no.1"
            rating={3.5}
            famous="Chinese, Italian, Mexican, North Indian"
            location="Chandlodia, Ahmedabad-382481"
            offers="150$ off above 300$"
          />
          <CardRestaurant
            src="/assets/Ahmedabad Food Guide.webp"
            alt="ahmedabad"
            title="Restaurant no.1"
            rating={4.5}
            famous="Chinese, Italian, Mexican, North Indian"
            location="Chandlodia, Ahmedabad-382481"
            offers="150$ off above 300$"
          />
          <CardRestaurant
            src="/assets/Ahmedabad Food Guide.webp"
            alt="ahmedabad"
            title="Restaurant no.1"
            rating={4.5}
            famous="Chinese, Italian, Mexican, North Indian"
            location="Chandlodia, Ahmedabad-382481"
            offers="150$ off above 300$"
          />
          <CardRestaurant
            src="/assets/Ahmedabad Food Guide.webp"
            alt="ahmedabad"
            title="Restaurant no.1"
            rating={4.5}
            famous="Chinese, Italian, Mexican, North Indian"
            location="Chandlodia, Ahmedabad-382481"
            offers="150$ off above 300$"
          />
          <CardRestaurant
            src="/assets/Ahmedabad Food Guide.webp"
            alt="ahmedabad"
            title="Restaurant no.1"
            rating={4.5}
            famous="Chinese, Italian, Mexican, North Indian"
            location="Chandlodia, Ahmedabad-382481"
            offers="150$ off above 300$"
          />
        </div>
      </div>
    </div>
  );
}

export default TrendingRestaurantOffers;
