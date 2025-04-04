import React from "react";

const ResultCard = ({ title, drivers }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-300 h-160 mx-auto my-4">
      {/* Race Title */}
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>

      {/* Podium Drivers */}
      <div className="flex justify-center items-end gap-6">
        {/* 2nd Place - Left Lower */}
        <div className="relative bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center w-90 h-122 translate-y-8">
          <div className="absolute top-2 left-2 text-2xl font-bold">{drivers[1].position}</div>
          <div className="text-center mt-6">
            <p className="text-xl text-gray-600">{drivers[1].firstName.toUpperCase()}</p>
            <p className="text-3xl font-bold text-blue-600">{drivers[1].lastName.toUpperCase()}</p>
          </div>
          <img src={drivers[1].country} alt="Flag" className="w-12 h-10 mt-1 rounded-md" />
          <p className="font-bold text-lg mt-2">{drivers[1].team}</p>
          <img src={drivers[1].image} alt={drivers[1].lastName} className="w-60 h-60 object-cover rounded-xl mt-4" />
          <div className="text-3xl font-bold mt-2 text-gray-700">{drivers[1].carNumber}</div>
        </div>

        {/* 1st Place - Middle */}
        <div className="relative bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center w-90 h-122">
          <div className="absolute top-2 left-2 text-2xl font-bold">{drivers[0].position}</div>
          <div className="text-center mt-6">
            <p className="text-xl text-gray-600">{drivers[0].firstName.toUpperCase()}</p>
            <p className="text-3xl font-bold text-blue-600">{drivers[0].lastName.toUpperCase()}</p>
          </div>
          <img src={drivers[0].country} alt="Flag" className="w-12 h-10 mt-1 rounded-md" />
          <p className="font-bold text-lg mt-2">{drivers[0].team}</p>
          <img src={drivers[0].image} alt={drivers[0].lastName} className="w-60 h-60 object-cover rounded-xl mt-4" />
          <div className="text-3xl font-bold mt-2 text-gray-700">{drivers[0].carNumber}</div>
        </div>

        {/* 3rd Place - Right More Lower */}
        <div className="relative bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center w-90 h-122 translate-y-12">
          <div className="absolute top-2 left-2 text-2xl font-bold">{drivers[2].position}</div>
          <div className="text-center mt-6">
            <p className="text-xl text-gray-600">{drivers[2].firstName.toUpperCase()}</p>
            <p className="text-3xl font-bold text-blue-600">{drivers[2].lastName.toUpperCase()}</p>
          </div>
          <img src={drivers[2].country} alt="Flag" className="w-12 h-10 mt-1 rounded-md" />
          <p className="font-bold text-lg mt-2">{drivers[2].team}</p>
          <img src={drivers[2].image} alt={drivers[2].lastName} className="w-60 h-60 object-cover rounded-xl mt-4" />
          <div className="text-3xl font-bold mt-2 text-gray-700">{drivers[2].carNumber}</div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
