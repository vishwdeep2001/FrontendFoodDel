import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantById,
  getRestaurantCategory,
} from "../State/Restaurant/Action";
import { getMenuItemsByRestaurantID } from "../State/Menu/Action";

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian Only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" },
];

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const [foodCategory, setFoodCategory] = useState("all");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth, restaurant, menu } = useSelector((store) => store);
  const { id, city } = useParams();
  const handleFoodTypeChange = (e) => {
    setFoodType(e.target.value);
  };
  const [selectedCategory,setSelectedCategory]=useState("");
  console.log("restaurant", restaurant);
  useEffect(() => {
    dispatch(getRestaurantById({ jwt, restaurantId: id }));
    dispatch(getRestaurantCategory({ jwt, restaurantId: id }));
  }, []);

  useEffect(() => {
    dispatch(
      getMenuItemsByRestaurantID({
        jwt,
        restaurantId: id,
        vegetarian: foodType=="vegetarian",
        nonveg: foodType=="non_vegetarian",
        seasonal: foodType=="seasonal",
        foodCategory: selectedCategory,
      })
    );
  }, [selectedCategory],foodType); // Fetch menu items when selectedCategory changes

  const handleFilterCategory = (e) => {
    setFoodCategory(e.target.value);
    setSelectedCategory(e.target.value); // Update selectedCategory state
  };
  const handleFoodCategory = (e) => {
    setFoodCategory(e.target.value,e.target.name);
  };
  const handleFilter = (e) => {
    setFoodType(e.target.value)
    console.log(e.target.value, e.target.name);
  };
  

  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 mt-100">Restuarant Details</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[0]}
              ></img>
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[1]}
              ></img>
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src={restaurant.restaurant?.images[2]}
              ></img>
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5 ">
          <h1 className="text-4xl font-semibold">
            {restaurant.restaurant?.name}
          </h1>
          <p className="text-gray-500 mt-1">
            {restaurant.restaurant?.description}
          </p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex item-center gap-3">
              <PlaceIcon></PlaceIcon>
              <span>{restaurant.restaurant?.cuisineType}</span>
            </p>
            <p className="text-gray-500 flex item-center gap-3">
              <CalendarTodayIcon></CalendarTodayIcon>
              <span>{restaurant.restaurant?.openingHours} </span>
            </p>
          </div>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter p-5 shad">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_category"
                   value={selectedCategory}
                >
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>
              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilterCategory}
                  name="food_category"
                  value={foodCategory}

                >
                  {restaurant.categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item.name}
                      control={<Radio />}
                      label={item.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.menuItems.map((item) => (
            <MenuCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
