import {Component} from 'react'
import Comments from '../comments/Comments';

const Comment = ({ author, body, date}) => {
  
  return (
    
    <>
      <h3>{author}</h3>
      <h4>body: { body }</h4>
      <p>{date}</p>
    </>
  )
}
export default Comment;