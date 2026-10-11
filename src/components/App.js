import React, { useState } from "react";
import './../styles/App.css';

const products = {
  Male: ["Shirts", "Facial-grooming kits", "Hair styling", "Jeans", "Shoes"],
  Female: ["Tops", "Skirts", "Makeup items", "Jewellery", "Sandals"],
};

const App = () => {
  const [category, setCategory] = useState("Male");

  return (
    <div>
      {/* Do not remove the main div */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <ul>
        {products[category].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;