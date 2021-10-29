import { createReducer } from '@reduxjs/toolkit'
import { addPost, deletePost } from '../actions/postsActions'

const initialState = {
  posts: [],
}

const postsReducer = createReducer(initialState, (builder) => {
  builder.addCase(addPost, (state, action) => ({
    ...state,
    posts: [...state.posts, action.payload],
  }))
  builder.addCase(deletePost, (state, action) => ({
    ...state,
    posts: state.posts.filter((post) => post.id !== action.payload.id),
  }))
})

export default postsReducer
