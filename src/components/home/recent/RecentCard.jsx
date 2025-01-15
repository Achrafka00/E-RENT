import React, { useState } from "react";
import { list } from "../../data/Data";

const RecentCard = () => {
  // State to track which icon is clicked
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleIconClick = (index) => {
    // Update the state with the clicked index
    setClickedIndex(index === clickedIndex ? null : index); // Toggle behavior
  };

  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background:
                        category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i
                    className="fa fa-heart"
                    style={{
                      color: clickedIndex === index ? "gold" : "#bec7d8", // Change color based on state
                      cursor: "pointer",
                    }}
                    onClick={() => handleIconClick(index)} // Handle click event
                  ></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button>{" "}
                  <label htmlFor="">/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
