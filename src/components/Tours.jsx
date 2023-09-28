import React, { useState } from "react";

function Tours({ tours, deleteTour }) {
  const [tourReadMore, setTourReadMore] = useState("");

  const toggleBtn = (id) => {
    if (tourReadMore === id) {
      setTourReadMore("");
    } else {
      setTourReadMore(id);
    }
  };

  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
      {tours.map((tour) => {
        const { id, name, info, image, price } = tour;
        const toggle = tourReadMore === id;

        return (
          <li
            key={id}
            className="hover:shadow-lg rounded-lg transition duration-150 ease-in-out flex flex-col w-full md:w-full lg:max-w-[352px] bg-white"
          >
            <div className="image-wrapper relative">
              <img 
                src={image}
                alt={name}
                className="object-cover lg:h-[320px] lg:w-[352px] w-full rounded-t-md 	"
              />
              <span className="rounded-tr-lg absolute bg-[#10B981] text-white py-1 px-2 top-0 right-0">
                ${price}
              </span>
            </div>
            <div className="px-7 py-8">
              <h3 className="text-2xl text-center mb-4">{name}</h3>
              <p className="text-slate-400 inline-block">
                {toggle ? info : `${info.substring(0, 150)}...`}
              </p>
              {info.length > 100 && (
                <button
                  className="text-green-500 font-xl mb-5 inline-block outline-none"
                  onClick={() => toggleBtn(id)}
                >
                  {toggle ? "Show Less" : "Read More"}
                </button>
              )}
              {
                <button
                  onClick={() => deleteTour(id)}
                  className="shadow border-2 text-emerald-400 rounded-sm border-emerald-400 block w-full pt-1 pb-1 transition duration-150 hover:bg-emerald-400 hover:text-white"
                >
                  Not Interested
                </button>
              }
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Tours;
