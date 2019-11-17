import React, { useState, useEffect } from "react";

// Hooks can't be use in a class component
function WithHooks() {
  const [city, setCity] = useState("");
  const [count, setCount] = useState(0);

  // side effect
  useEffect(() => {
    setCount(count + 1);
  }, [city !== ""]);

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
      {count > 0 && <span>{<span>Number of mouse enter {count}</span>}</span>}
    </div>
  );
}

export default WithHooks;
