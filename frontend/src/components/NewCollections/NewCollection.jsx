import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import './NewCollection.css'

const NewCollection = () => {

const [new_collection,setNew_Collection] = useState([]);

useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((resp)=>resp.json())
    .then((data)=>{setNew_Collection(data)});
},[])

    return (
        <div className='new-collection'>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="new-collection-item">
                {new_collection.map((item, index) => {
                    return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollection
