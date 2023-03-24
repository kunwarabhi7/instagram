import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      userId: faker.datatype.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    }));
    setSuggestions(suggestions);
  }, []);
  return (
    <div className="mt-4 ml-10">
      <div className="flex flex-col justify-between text-sm mb-5">
        <h3 className="text-sm font-bold  text-gray-400">
          Suggestions for you
        </h3>
        <button className="text-gray-600 font-semibold -mt-5">See All</button>
       
          {suggestions.map((profile) => (
            <div
              className="flex  items-center justify-between mt-3"
              key={faker.datatype.uuid()}
            >
              <img
                className="w-10 h-10 rounded-full border p-[2px]"
                src="faker.image.avatar()"
              />
              <div className="flex-1 flex-row ml-4">

              <h2 className="font-semibold text-sm">{faker.internet.userName()}</h2>{" "}
             <h2 className="text-xs text-gray-400">Works at</h2>
              <button className="text-blue-400 font-bold text-sm">Follow</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Suggestions;
