const Service = ({ job, description, price, id, deleteService }) => {
  return (
    <>
      <h1>{job}</h1>
      <h3>Price: { price }</h3>
      <p>{description}</p>
      <button onClick={() => deleteService(id)}>
        Delete
      </button>
    </>
  )
}
export default Service;