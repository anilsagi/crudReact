import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import Form from './Form';
// import Portal from './Portal'
import {deleteData, getData, postData, putData} from './api';
import './App.css';
// import Crud from './basicCrud';





const App = () => {

  const [products,setProdcuts] = useState([]); //initially table empty
  const [showForm, setShowForm] = useState(false);//form to enter data
  const [edit, setEdit] = useState(false);//edit flag
  const [initForm,setForm] = useState({     //initial form values
    name:'', price:'' ,category:''
  })

  useEffect(()=>{
    getProducts();   //setting data to table, calling
  },[])

  let getProducts = async ()=>{  //function to set data to table
    let res = await getData();
     console.log("res", res.data);
     setProdcuts(res.data);
  }

  let deleteProduct = async (id)=>{  // function to data from the table
    await deleteData(id);
    getProducts();
  }

  let addProduct = async (prod)=>{ // add data to
    let data = {
      name:prod.name,
      price:prod.price,
      category:prod.category
    }
    if(edit){
      await putData(prod.id,data); //edit 2 pargs thru put-method
    } else 
    await postData(data);  //post one arg
    getProducts();
    setShowForm(false);     //form close
  }

  let editProduct = async (data)=>{
    // await postData(data);
    setForm(data);
    setShowForm(true);
    setEdit(true);
  }


  let openForm= ()=>{
    setShowForm(!showForm);
    setForm({ name:'', price:'' ,category:''})

  }

  let closeForm= ()=>{
    setShowForm(false);
  }

  return (
    <div className='wrapper m-5 w-50'>
    {/* <div><Portal/></div> */}
    <h2 className='text-primary'>CRUD Operations</h2>
    <button className='btn btn-primary' onClick={openForm} >Add Prodcuts</button>
    <Table productData={products} deleteProd={deleteProduct} edit={editProduct}/>
    {showForm && <Form close={closeForm} data={initForm} add = {addProduct} />}
    {/* <Crud/> */}
    </div>
  )
}

export default App