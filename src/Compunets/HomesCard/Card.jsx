import React from "react";


const Card = ({Cards}) => {
    const { id, name, price, img, description, title } = Cards || {}
   

    const handlerAddtoAout = ()=>{
       const AddAboutItem = [];
   
      const AboutItem = JSON.parse(localStorage.getItem(('About')))
      if(!AboutItem){
        AddAboutItem.push(Cards)
        localStorage.setItem('About', JSON.stringify(AddAboutItem))
        sweetalert("Good Job!", "This is Add About is success");
      }
      else{
        const isExits = AboutItem.find(Cards =>Cards.id == id)
        if(isExits){
            AddAboutItem.push(...AboutItem, Cards)
            localStorage.setItem('About', JSON.stringify(AddAboutItem))
            sweetalert("Good Job!", "Thsi is About", "Success");
        }
        else{
            sweetalert("Error", "Aledy booked Item", "success");
        }
      }
    }

    return (
        <div>
            <div className="relative flex max-w-[46rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none shrink-0 rounded-xl bg-clip-border">
                    <img src={img} alt="" />

                </div>
                <div className="p-6">
                    <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-pink-500 uppercase">
                        {name}
                    </h6>
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {title}
                    </h4>
                    <div className="flex justify-between ">
                        <h2 className="text-xl font-bold">Price: {price}</h2>
                      
                    </div>
                    <div>
                        
                        <span>{description}</span>
                    </div>

                    <div className="mt-24">
                 
                            <button onClick={handlerAddtoAout}
                                className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-pink-500 uppercase align-middle transition-all rounded-lg select-none hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button">ADD TO ABOUT<svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="2"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    class="w-4 h-4">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;