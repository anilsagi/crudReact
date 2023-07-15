import React, { useState } from "react";
import './App.css';


function Form(props){
    const[products, setProducts] = useState(props.data);  //to set initial data to form


/* The changeFormData function is called when the user enters new data in the form. 
The event.target object contains the name and value of the input field that was changed.

 The setProducts function is used to update the state of the products object with the new data entered by the user. 
 The spread operator (...) is used to copy all the existing properties of the products object into a new object. 
 The [name]:value syntax is used to add a new property to the 
 new object with the name and value of the input field that was changed.*/
    let changeFormData=(event)=>{
        const {name, value} = event.target;   //replacing the original to values
        setProducts({...products,[name]:value})
    }

    return (
        <> 
            <div className="form-overlay">
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input className="form-control mt-2" type="text" name="name" value={products.name} onChange={changeFormData} placeholder="Enter Name" />
                    </div>
                    
                    <div className="form-group">
                        <label>Price:</label>
                        <input className="form-control mt-2" type="number" name="price" value={products.price} onChange={changeFormData} placeholder="Enter Price" />
                    </div> 

                    <div className="form-group">
                    <label>Category:</label>

                        <select className="form-control mt-2" name="category" 
                        value={products.category}
                        onChange={changeFormData}>
                            <option value="-1"></option>
                            <option value={"mobiles"}>Mobiles</option>
                            <option value={"Laptops"}>Laptops</option>
                            <option value={"TV"}>TV</option>
                        </select>
                    </div>

                    <button className="btn btn-primary float-end mt-2 ml-2" 
                    onClick={
                        (e)=> {e.preventDefault();
                        props.add(products)
                        }  
                        } >Send</button>

                    <button className="btn btn-danger float-end mt-2"
                     onClick={
                        (e)=>{
                            e.preventDefault();
                            props.close();
                        }} >Cancel</button>                    
                </form>
            </div>
        </>
    )
}

export default Form;