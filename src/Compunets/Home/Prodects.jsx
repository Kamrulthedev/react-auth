import Prodect from "./Prodect";


const Prodects = ({HomeProdect}) => {
    console.log(HomeProdect)
    return (
        <div>
            <h1 className="text-2xl font-bold ml-12 mt-8">TOP RATED</h1>
           <div className="mt-8">

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 m-8 ">
                {
                      HomeProdect?.map(Prodec =><Prodect key={Prodec.id} Prodec={Prodec}></Prodect>)
                }
            </div>
           </div>
        
        </div>
    );
};

export default Prodects;