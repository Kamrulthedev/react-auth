

const Banner = () => {
    return (
      <div >
          <div className="ml-8 mr-8 ">
           <div className="hero w-full h-96 " style={{backgroundImage:"https://i.ibb.co/Qb1XJyN/images-1.jpg"}}>
            <div>
                <img className="mr-96 rounded-lg -ml-96 bg-opacity-40 bg-hero-overlay" src="https://i.ibb.co/Qb1XJyN/images-1.jpg" alt="" />
            </div>
  <div className="hero-overlay bg-opacity-50 "></div>
  <div className="hero-content text-center text-neutral-content ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
  </div>
</div>
        </div>
      </div>
    );
};

export default Banner;