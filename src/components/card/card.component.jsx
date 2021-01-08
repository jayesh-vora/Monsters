import React from 'react';

import './card.styles.css';

export const Card = (props) => (
  <div className="card">
    <img alt="Monster_Image" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}/>
    <h4>
      {props.monster.name}
    </h4>
    <p>
      {props.monster.email}
    </p>
  </div>
) 