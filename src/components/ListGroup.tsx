import {Fragment} from 'react';

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    items = [];

    if (items.length === 0)
    return <>
            <h1>List</h1>
            <p>No items found</p>
        </>;
    
    return (
        <Fragment>
            <h1>List</h1>
            <ul className="list-group">
            
                {items.map(item => ( 
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </Fragment>
    );
}

export default ListGroup;