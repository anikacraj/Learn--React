import React, { useState } from 'react';

export default function FAQ({ title, desc }) {
  const [Toggle, setToggle] = useState(false);

  return (
    <div>
      <article>
        <h3>{title}</h3>
        {Toggle && <p>{desc}</p>}
        <button
          onClick={() => {
            setToggle(!Toggle);
          }}
        >
          {Toggle ? "-" : "+"}
        </button>
       
      </article>
    </div>
  );
}
