const Card = (props) => {
  console.log(props)

    const handleChange = (e) =>{
        onUpdate({...props,[e.target.name] : e.target.value})
    }
  return (
    <div className="card bg-base-100 w-[100%] shadow-sm">
      <figure>
        <img
          src={props.imgUrl}
          alt={props.alt}
        />
      </figure>
      <div className="card-body">
        <input
          type="text"
          value={props.title}
          className="text-lg font-semibold"
          onChange={handleChange}
        />
        <textarea
          name="description"
          className="border-none resize-none h-16"
          value={props.description}
          onChange={handleChange}
        ></textarea>
        {/* <h2 className="card-title">Card Title</h2> */}
        {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p> */}
        <div className="card-actions justify-end">
          <input type="submit" className="btn btn-primary" value={props.btn} />
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
