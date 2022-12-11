import axios from "axios";

const API_BASE = 'http://localhost:4000';

export const findAllReviewsForAnime = async (animeId) => {
    const response = await axios.get(`${API_BASE}/review/anime/${animeId}`);
    console.log(response)
    return response.data;;
}

export const findAllReviewsByUser = async (userId) => {
    const response = await axios.get(`${API_BASE}/review/user/`, userId);
    return response.data;
}

export const createReview = async (review) => {
    
    const response = await axios.post(`${API_BASE}/review`, review)
    console.log('in service', response)
    return response.data;
}

export const removeReview = async (reviewId) => {
    const response = await axios.delete(`${API_BASE}/remove-review/${reviewId}`)
    return response.data;
}