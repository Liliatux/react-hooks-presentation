import React, { useState } from "react";

export default function WithHooks() {
  const [city, setCity] = useState("");

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
