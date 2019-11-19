import React, { useState, useEffect } from "react";

export default function WithHooks() {
  const [city, setCity] = useState("");
  const [count, setCount] = useState(-1);

  useEffect(() => {
    setCount(count + 1);
  }, [city]);

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form>
        <label>
          City:
          <input name="city" value={city} onChange={handleChange} />
        </label>
      </form>
      <br />
      {count > 0 && <span>Number of input changes: {count}</span>}
    </div>
  );
}
