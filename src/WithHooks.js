import React, { useState, useEffect } from "react";

// Hooks can't be use in a class component
function WithHooks() {
  const [city, setCity] = useState("");

  // side effect
  useEffect(() => {
    setCity("Toulouse");
    if (city === "") {
      setCity("Amiens");
    }
    return () => null;
  }, []);

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <form>
      <label>
        City:
        <input name="city" value={city} onChange={handleChange} />
      </label>
    </form>
  );
}

export default WithHooks;
