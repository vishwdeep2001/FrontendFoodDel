import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { categorizeIngredients } from "../util/catgorizeIngredients";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../State/Cart/Action";
const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"],
  },
  {
    category: "Protein",
    ingredients: ["Chicken", "Bacon Strips"],
  },
];
const MenuCard = ({ item }) => {
    const [selectedIngredients, setSelectedIngredients]=useState([]);
    const dispatch=useDispatch();

  const handleCheckBoxChange = (itemName) => {
    console.log("value",itemName);
    if(selectedIngredients.includes(itemName)){
        setSelectedIngredients(selectedIngredients.filter((item)=>item!==itemName))
       }
       else{
        setSelectedIngredients([...selectedIngredients,itemName])
  };}
  const handleAddItemToCart=(e)=>{
    e.preventDefault()
    const reqData={
    token:localStorage.getItem("jwt"),
    cartItem:{
        foodId: item.id,
        quantity:1,
        ingredients:selectedIngredients,
    },
    };
    dispatch(addItemToCart(reqData))
    console.log("reqData",reqData)
    
  };


  return (
    <div>
      {" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex items-center justify-between">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src={item.images[0]}
                alt=""
              ></img>
              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl"> {item.name}</p>
                <p>
                  <CurrencyRupeeIcon></CurrencyRupeeIcon>
                  {item.price}
                </p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleAddItemToCart}>
            <div className="flex gap-5 flex-wrap">
              {Object.keys(categorizeIngredients(item.ingredients)).map(
                (category) => (
                  <div>
                    <p>{category}</p>
                    <FormGroup>
                      {categorizeIngredients(item.ingredients)[category].map(
                        (item) => (
                          <FormControlLabel
                            key={item.id}
                            control={
                              <Checkbox
                                onChange={() => handleCheckBoxChange(item.name)}
                              />
                            }
                            label={item.name}
                          />
                        )
                      )}
                    </FormGroup>
                  </div>
                )
              )}
            </div>
            <div className="pt-5">
              <Button  variant="contained" disabled={false} type="submit">
                {true ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MenuCard;
