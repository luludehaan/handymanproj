const Comment = ({ author, body, date, id}) => {
  
  return (
    
    <>
      
      <h3>{author}</h3>
      <h4>body: { body }</h4>
      <p>{date}</p>
    </>
  )
}
export default Comment;