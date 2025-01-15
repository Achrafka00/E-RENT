import React, { useState } from "react";
import "./hero.css";

const Hero = () => {
  // State for form inputs
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
  });

  // State for filtered results and showing search results
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [showResults, setShowResults] = useState(false); // To control visibility of results

  // Constant property data
  const properties = [
    { id: 1, location: "New York", type: "Apartment", price: 500 },
    { id: 2, location: "Los Angeles", type: "House", price: 1200 },
    { id: 3, location: "Chicago", type: "Studio", price: 800 },
    { id: 4, location: "New York", type: "House", price: 1500 },
    { id: 5, location: "New York", type: "House", price: 500 },
    { id: 6, location: "New York", type: "House", price: 2000 },

  ];

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Handle search button click
  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission

    setShowResults(true); // Show results after search

    const results = properties.filter((property) => {
      const matchesLocation = filters.location === property.location;
      const matchesType = filters.propertyType === property.type;
      const matchesPrice = filters.priceRange
        ? property.price <= parseInt(filters.priceRange, 10)
        : true;

      return matchesLocation && matchesType && matchesPrice;
    });

    setFilteredProperties(results);
  };

  return (
    <section className="hero">
      <div className="container">
        <h1 className="title">Search Your Next Home</h1>
        <p className="subtitle">
          Find new & featured property located in your local city.
        </p>

        {/* Search Form */}
        <form className="flex" onSubmit={handleSearch}>
          <div className="box">
            <label>City/Street</label>
            <select
              name="location"
              value={filters.location}
              onChange={handleChange}
              required
            >
              <option value="">Select Location</option>
              {Array.from(new Set(properties.map((p) => p.location))).map(
                (location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                )
              )}
            </select>
          </div>
          <div className="box">
            <label>Property Type</label>
            <select
              name="propertyType"
              value={filters.propertyType}
              onChange={handleChange}
              required
            >
              <option value="">Select Type</option>
              {Array.from(new Set(properties.map((p) => p.type))).map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="box">
            <label>Price Range</label>
            <input
              type="number"
              name="priceRange"
              placeholder="Max Price"
              value={filters.priceRange}
              onChange={handleChange}
            />
          </div>
          <div className="search-box">
            <label>Search</label>
            <input type="submit" className="btn1" value="Search" />
          </div>
        </form>

        {/* Filter Results */}
        {showResults && (
          <div className="results">
            <h2>Search Results:</h2>
            {filteredProperties.length > 0 ? (
              <ul>
                {filteredProperties.map((property) => (
                  <li key={property.id}>
                    {property.location} - {property.type} - ${property.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No properties match your criteria.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
