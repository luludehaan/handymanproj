const Service = ({ job, description, price, id, deleteService }) => {
  
  return (
    
    <>
      <h3>{job}</h3>
      <h4>Price: { price }</h4>
      <p>{description}</p>
     
      <button onClick={() => deleteService(id)}>
        Delete Service
      </button>
    </>
  )
}
export default Service;