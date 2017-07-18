import React from 'react';


const List = props =>(
    <ol>
        {
            props.items.map((items, index) => <li key={index}>{items} </li>)
        }
    </ol>
);

export default List;