import { useState } from "react";
import Star from "./Star";

function StarRating() {
    const [star, setStar] = useState(0);
    const clickStar = (num) => {
        setStar(num);
    }
    return(
        <section className="star-part">
            <h2>Rate Us</h2>
            <div className="star-line">
             {[1,2,3,4,5].map((item, index) => {
             return(
               <Star key={index} num={item} color={ item <= star? "gold": "gray"}
                 clickStar={clickStar}
               />
                );

                })}
            </div>
            <p className="rating-word">
               {star === 1 ? "Poor" : star === 2 ? "Fair" : star === 3 ? "Good" :
                star === 4 ? "Great" : star === 5 ? "Excellent" :  ""}
            </p>
        </section>
    );
}
export default StarRating;