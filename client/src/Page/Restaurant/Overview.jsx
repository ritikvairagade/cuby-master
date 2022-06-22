import React, { useState, useEffect } from "react";
import { Link , useParams} from 'react-router-dom';
import {IoMdArrowDropright} from "react-icons/io";
import Slider from 'react-slick';
import { useSelector, useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";


//component
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/restaurant/MenuSimilarRestaurantCard';
import { NextArrow,PrevArrow } from '../../Components/CarousalArrow';
import ReviewCard from '../../Components/restaurant/Reviews/reviewCard';
import Mapview from '../../Components/restaurant/Mapview';


//Redux Action
import { getImage } from "../../Redux/Reducer/Image/Image.action";
import { getReviews } from "../../Redux/Reducer/Reviews/review.action";


const Overview = () => {
    const [menuImage, setMenuImages] = useState({ images: [] });
    const [Reviews, setReviewss] = useState([]);


    const {id} = useParams()

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
    );
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (reduxState) {
          dispatch(getImage(reduxState?.menuImages)).then((data) => {
            const images = [];
            data.payload.image.images.map(({ location }) => images.push(location));
            setMenuImages(images);
          });

          dispatch(getReviews(reduxState?._id)).then((data) =>
            setReviewss(data.payload.reviews)
          );
        }
    }, []);


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    const getLatLong = (mapAddress) => {
        return mapAddress?.split(",").map((item) => parseFloat(item));
    };
    
    console.log(
        reduxState?.mapLocation?.split(",").map((item) => parseFloat(item))
    );

    return (
        <>
            <div className="flex flex-col md:flex-row relative">
                <div className="w-full md:w-8/12">
                 <h1 className="font-semibold text-lg md:text-2xl my-4">About this place</h1>
                 <div className="flex justify-between items-center">
                     <h2 className="text-lg font-medium">Menu</h2>
                     <Link to={`/restaurant/${id}/menu`}>
                     <span className="flex items-center gap-1 text-cuby-400">See all menus <IoMdArrowDropright /></span>
                     </Link>
                 </div>
                 <div className="flex flex-wrap gap-3 my-4">
                     <MenuCollection menuTitle="Menu" pages="3" image={menuImage} />
                     </div>
                   
                     <h4 className="font-semibold text-lg md:text-xl my-4">Cuisine</h4>
                   <div className="flex flex-wrap gap-2">
                   {reduxState?.cuisine.map((data) => (
                         <span className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full">
                            {data}
                        </span>
                    ))}
                   </div> 
                   <div>
                   <h4 className="font-semibold text-lg md:text-xl my-4">Average Cost</h4>
                   <h6>₹{reduxState?.averageCost} for one order (approx.)</h6>
                   <small className="text-gray-500">Exclusive of applicable taxes and charges, if any</small>
                   </div>
                   <div className="my-4">
                   <h4 className="font-semibold text-lg md:text-xl my-4">Similar Restaurant</h4> 
                  <Slider {...settings}>
                  <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/reviews_photos/079/82e172548e48f4bb7779f412e5ea9079_1596718611.jpg?fit=around|771.75:416.25crop=771.75:416.25;*,*"
                   title="Cosmos Pizza" />
                   <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/4/19760534/b407934bf1e0fa1c225a9c94c5458698_o2_featured_v2.jpg"
                   title="House Of Pizzas" />
                   <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/2/19065282/cd84797efce08aee9e4218718afca817_featured_v2.jpg?output-format=webp"
                   title="La Pasta" />
                   <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/1/19354911/813f33c33fec3a4865cc825d53a41634_o2_featured_v2.jpg"
                   title="Hungry Bites" />
                   <MenuSimilarRestaurantCard image="https://b.zmtcdn.com/data/pictures/3/19125703/3cc48b223d1fa1546cd9867d2182141d_o2_featured_v2.jpg"
                   title="Kutchking" />
                  </Slider>
                   </div>
                   
                   <div className="my-4">
                       <h4 className="text-lg font-medium">
                           Rate Your delivery experience
                       </h4>
                       <ReactStars
                        count={5}
                        onChange={ratingChanged}
                           size={24}
                             activeColor="#ffd700"
                        />
                        {Reviews.map((reviewData) => (
                            <ReviewCard {...reviewData} />
                        ))}
                   </div>
                   <div className="my-4 w-full md:hidden flex flex-col gap-4">
                    <Mapview
                        title={reduxState?.name}
                        phno={`+91${reduxState?.contactNumber}`}
                        mapLocation={getLatLong(reduxState?.mapLocation)}
                        address={reduxState?.address}
                    />
                   </div>
                   <div className="my-4 flex flex-col gap-4"></div>
                    
                </div>
                <aside style={{height: "fit-content"}} className="hidden md:flex md:w-4/12 sticky rounded-xl top-2 bg-white p-3 shadow-md flex flex-col gap-4">
                <Mapview
                    title={reduxState?.name}
                    phno={`+91${reduxState?.contactNumber}`}
                    mapLocation={getLatLong(reduxState?.mapLocation)}
                    address={reduxState?.address}
                />
                </aside>
            </div>
        </>
    )
}

export default Overview;
