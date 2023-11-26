import { Link } from "react-router-dom";

const Prodect = ({ Prodec }) => {
    const { id, name, price, img, description, title } = Prodec;
    return (
        <div className=" mt-8">
    <div className="relative h-80 w-60 flex flex-col text-gray-700 bg-white shadow-md  rounded-xl bg-clip-border">
                <div className="relative overflow-hidden text-gray-700 bg-white  rounded-xl bg-clip-border">
                    <img
                        src={img}
                        className="w-full object-center object-cover" />
                </div>
                <div className="p-6">
                    <p className="block  font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                        {name}</p>
                    <div>
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900 ">
                            {price}</p>
                    </div>
                    <p>{title}</p>
                </div>

                <div className="p-6 ">
                    <Link to={`/HomeCard/${id}`}>
                        <button className="  rounded-lg bg-zinc-300 py-3 px-6 text-center  font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 "
                            type="button">SEE DETAILES</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Prodect;