import React from 'react'

const Table = (props) => {
        return(
            <table className='table m-3'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>category</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.productData.map(
                        (data) =>
                   ( <tr key={data.id} >
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.category}</td>
                        <td><button className='btn btn-primary m-2' 
                        onClick={()=>{
                            props.edit(data)  //pass data as object from app.js
                        }} >Edit</button></td>
                        <td><button className='btn btn-danger m-2'
                         onClick={()=>{
                            props.deleteProd(data.id)  //pass id to delete particular id
                        }}>Delete</button></td>
                    </tr>))} 
                </tbody>
            </table>
        
        )
    }

export default Table