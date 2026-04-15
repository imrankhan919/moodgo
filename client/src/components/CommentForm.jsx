import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEventComment } from '../features/event/eventSlice'
import { useParams } from 'react-router-dom'

const CommentForm = () => {
    const { eid } = useParams()
    const dispatch = useDispatch()

    const [rating, setRating] = useState(1)
    const [review, setReview] = useState("")

    const handleSubmit = (e) => {
        dispatch(addEventComment({ eventId: eid, rating: +rating, text: review }))

        setRating(1)
        setReview("")
    }


    return (
        <div className='border border-gray-800 p-4 rounded-lg my-6'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="rating" className='text-gray-400 font-semibold'>Select Rating</label>
                <select value={rating} onChange={(e) => setRating(e.target.value)} id='rating' className='px-2 border border-gray-800 w-full my-2 p-2 rounded-lg text-gray-600'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">2</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label htmlFor="rating" className='text-gray-400 font-semibold'>Enter Review</label>
                <textarea value={review} onChange={(e) => setReview(e.target.value)} className='border border-gray-800 text-gray-400 w-full my-2 p-2 rounded-lg' name="review" id="review"></textarea>
                <button className='bg-emerald-500 hover:bg-emerald-600 w-full p-2 rounded-md text-white font-bold cursor-pointer'>Submit Review</button>
            </form>
        </div>
    )
}

export default CommentForm
