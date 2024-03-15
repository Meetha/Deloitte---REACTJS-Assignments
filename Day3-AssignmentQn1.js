//   DAY 3 - Assignment Qn 1
//   FOR 1 PRODUCT  - get details and print total with discount


import React from "react";
import {useState} from "react";


function Day3a()
{
    
    const [name, setPname] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQty] = useState("");
    const [total, setTotal] = useState("");
   
    function buttonClick()
    {
            // setTotal(quantity*price);    ----->  without considering discount 
        
        if(quantity<10)
        {
            setTotal(quantity*price);
        }

        else if(10<quantity<20)
        {
            setTotal(quantity*price*0.95);
        }

        else if(20<quantity<30)
        {
            setTotal(quantity*price*0.90);
        }

        else
        {
            setTotal(quantity*price*0.85);
        }

    };

    return(
        <>
        <h3>Product Demo</h3>
        <hr/>
        <br/>
        <p>Product Name:</p>
        <input type="text" value={name} onChange={ (event) => setPname(event.target.value) }  />
        <p>Product Price:</p>
        <input type="text" value={price} onChange={ (event) => setPrice(event.target.value) }  /> 
        <p>Product Quantity:</p> 
        <input type="text" value={quantity} onChange={ (event) => setQty(event.target.value) }  />   

        <input type="button" onClick={buttonClick} value="Get Total"></input>
        <h1>The Total value: {total}</h1>
        </>

    );
}

//export default Day3a;