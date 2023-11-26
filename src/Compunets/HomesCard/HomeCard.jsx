import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const HomeCard = () => {
     const [Cards, setCard] = useState()
    const {id} = useParams();
    const idIn = parseInt(id)
    const HomeCard = useLoaderData();
    useEffect(()=>{
        const findCard = HomeCard.find(Cards => Cards.id == idIn)
        setCard(findCard)
    },[idIn, HomeCard])
    
console.log(HomeCard)

    return (
        <div>
          <Card Cards={Cards}></Card>
        </div>
    );
};

export default HomeCard;