import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import {AiOutlinePlus} from "react-icons/ai"


//Redux Action
import { getFood } from "../../../Redux/Reducer/Food/Food.action";
import { getImage } from "../../../Redux/Reducer/Image/Image.action";

const FoodItem = (props) => {
    const [food, setFood] = useState({});

    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getFood(props._id)).then((data) => {
        setFood(data.payload.foods);
        dispatch(getImage(data.payload.foods.photos)).then((data) => {
          const { images } = data.payload.image;
          images.length &&
            setFood((prev) => ({ ...prev, image: images[0].location }));
        });
      });
    }, []);


    return (
        
        <>
          {food?.name &&(
           <div className="flex items-start gap-2 ">
            {food?.image && (
             <div className="w-3/12 h-24 md:h-28 lg:h-36  md:px-3">
              <img
                src={food?.image}
                alt="food"
                className="w-full h-full rounded-lg"
              />
              </div>
            )}
               <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
                   <div className="flex items-center justify-between">
                       <h3 className="text-xl font-semibold">{food?.name}</h3>
                       <button className="md:hidden flex items-center gap-2 text-cuby-400 bg-cuby-50 border border-cuby-400 px-2 py-1 rounded-lg">
                    <AiOutlinePlus /> Add
                    </button>
                   </div>
                    <ReactStars count={5} value={food?.rating || 0} />
                    <h5>₹{food?.price}</h5>
                    <p className="truncate">{food?.descript}</p>
               </div>
               <div className="hidden md:block w-2/12">
                   <button className=" flex items-center gap-2 text-cuby-400 bg-cuby-50 border border-cuby-400 px-4 py-2 rounded-lg">
                    <AiOutlinePlus /> Add
                    </button>
               </div>
            </div> 
          )}
        </>
    )
}

export default FoodItem