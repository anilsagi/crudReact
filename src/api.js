import axios from "axios";
import React from "react";

const url = 'http://localhost:3002/Products';
export async function getData(){
    return await axios.get(url)
}

export async function deleteData(id){
    return await axios.delete(`${url}/${id}`)
}

export async function postData(data){
    return await axios.post(url,data,{
        headers: {
            'Content-Type': "application/json",
        }
    })
}

export async function putData(id,data){  //need to pass which 'id' data has to pass, it takes 2 arg
    return await axios.put(url+'/'+id,data,{
        headers: {
            'Content-Type': "application/json",
        }
    })
}