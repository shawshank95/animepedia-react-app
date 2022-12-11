import React, { useState } from "react";
import { createReviewThunk }
    from "../../services/anime-review-thunk.js"
import { useDispatch, useSelector } from "react-redux";
import { Rating } from 'react-simple-star-rating'
const CreateReview = (
    {
        anime_id
    }) => {
    let [reviewByUser, setReviewByUser] = useState('');
    const { currentUser } = useSelector(state => state.userData);

    const [rating, setRating] = useState(0)
    const dispatch = useDispatch();
    const reviewClickHAndler = () => {
        const newReview = {
            animeId: anime_id,
            reviewBy: currentUser,
            review: reviewByUser,
            rating: rating
        }
        console.log(newReview)
        dispatch(createReviewThunk(newReview));
    }

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
    }
    // Optinal callback functions
    const onPointerEnter = () => console.log('Enter')
    const onPointerLeave = () => console.log('Leave')
    const onPointerMove = (value, index) => console.log(value, index)
    return (
        <><h2 className="title">Reviews</h2><div className="card shadow-sm p-3 mb-5 bg-body rounded">
            <div className="card-body">
                <h5>Add a review</h5>
                <Rating
                    onClick={handleRating}
                    onPointerEnter={onPointerEnter}
                    onPointerLeave={onPointerLeave}
                    onPointerMove={onPointerMove} />

                <hr />

                <div>
                    <textarea value={reviewByUser} placeholder="Share what you thought about the anime..."
                        className="form-control border"
                        onChange={(event) => setReviewByUser(event.target.value)}>
                    </textarea>
                </div>
                <hr />
                <div className="float-end">
                    <button className="rounded-pill btn btn-dark float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={reviewClickHAndler}>
                        Add
                    </button>
                </div>
            </div>
        </div></>
    );
}
export default CreateReview;