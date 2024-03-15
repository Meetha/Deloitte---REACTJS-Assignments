// DAY 3 - Assignment QN 1 
// For n products using CRUD operations


import React from "react";
import { useState } from "react";


function ProductCart() {
    const [productArray, setProductArray] = useState([]);

    // For reading data from user through textboxes
    const [pname, setPname] = useState("");
    const [price, setPrice] = useState("");
    const [qty, setQty] = useState("");

    function getProductButton_click() 
    {
        let tempArray = 
        [
            { pname: "Car", price: 150, qty: 5 },
            { pname: "Doll", price: 200, qty: 40 },
            { pname: "Shirt", price: 900, qty: 15 },
            { pname: "Pant", price: 150, qty: 25 },
            
        ];

        setProductArray(tempArray);

    }


    function addProductButton_click() 
    {
        let prodObj = {};
        prodObj.pname = pname;
        prodObj.price = price;
        prodObj.qty = qty;


        let tempArray = [...productArray];
        tempArray.push(prodObj);
        setProductArray(tempArray);

        clearFields();
    }


    function clearFields()
    {
        setPname("");
        setPrice("");
        setQty("");
    }


    function  deleteProduct_click(pname)
    {
        let tempArray = [...productArray];
       
        let index = tempArray.findIndex(item => item.pname == pname);
        tempArray.splice(index, 1);

        setProductArray(tempArray);
    }


    function  selectProduct_click(pname)
    {
        let prodObj = productArray.find(item => item.pname == pname);

        setPname(prodObj.pname);
        setPrice(prodObj.price);
        setQty(prodObj.qty);
    }

    function updateProductButton_click() 
    {
        let tempArray = [...productArray];
        let index = tempArray.findIndex(item => item.pname == pname);
        tempArray[index].price = price ;
        tempArray[index].qty = qty;

        setProductArray(tempArray);
        clearFields();
    }

    let resultArray = productArray.map((item, index) => 
    {
        return <tr key={index}>
                        <td>   {item.pname}  </td>
                        <td>   {item.price}  </td>
                        <td>   {item.qty}  </td>
                        <td>
                            <a  onClick={() => selectProduct_click(item.pname)} href="javascript:void(0);">Select</a> |
                            <a  onClick={() => deleteProduct_click(item.pname)} href="javascript:void(0);">Delete</a>
                        </td>
                </tr>
    });


    return (<>

        <h3>Working with State -- CRUD Operations on Array of Objects</h3>
        <br/>
        <h3>PRODUCT CART DEMO</h3>
        <hr />

        <input type="text" placeholder="Product Name" value={pname}   onChange={(e) => setPname(e.target.value)} />
        <input type="text" placeholder="Price" value={price}   onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder="Quantity" value={qty}  onChange={(e) => setQty(e.target.value)} />
        <hr />

        <input type="button" onClick={getProductButton_click} value="Get Product" />
        <input type="button" onClick={addProductButton_click} value="Add Product" />
        <input type="button" onClick={updateProductButton_click} value="Update Product" />
        <hr />

        <table border="2" width="500" cellspacing="0" cellpadding="5">
            <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th></th>
            </tr>
            {resultArray}
        </table>

    </>
    );
}

export default ProductCart;