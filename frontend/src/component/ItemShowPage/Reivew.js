import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, getUser } from "../../store/users";

const Review = ({ review }) => {
    const dispatch = useDispatch();
    const reviewer = useSelector(getUser(review.reviewerId))
    
    console.log(review.reviewerId)
    useEffect(() => {
        dispatch(fetchUser(review.reviewerId))
    },[])
    

    if (reviewer) {
        return (
            <div className="review-container">
                <div className="review-left">{reviewer.name}</div>
                <div className="review-right">
                    
                </div>
            </div>
        );
    } else {
        return (
            <div>Loading....</div>
        )
    }
}
 
export default Review;