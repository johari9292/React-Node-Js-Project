import {gettodo} from '../constants/todos';
import {addtodo} from '../constants/todos';
import {deletetodoc, updatetodo} from '../constants/todos'

import store from '../store/index'
import axios from 'axios'
export const  useraction = {
    gettodoaction:gettodoaction
}
const URL = 'http://localhost:3201';



export function gettodoaction()
{return dispatch =>{
  return fetch(URL+'/get', {
    method: 'GET',
    headers: {'Content-Type':'application/json;charset=UTF-8'}
   
   
}).then((res)=>{
  res.json().then(data =>{
    console.log("res data", data);
    dispatch({
      type: gettodo.GETSUCCESS,
      payload: data
  
    })
  })
 


})
}
} 

export function addtodoaction(payload) {
  return dispatch => {
    axios
      .post(URL + '/add', payload)
      .then(() => dispatch(createProductSuccess(payload)))
      .catch(error => console.error('createProduct failed:', error))
  }
}

export function createProductSuccess(payload) {
  return { type: addtodo.ADDSUCCESS, payload }
}


  
export function deletetodo(id) {
  return dispatch => {
    return fetch(URL + `/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res)=>{
      res.json().then(data =>{
        console.log("res data", data);
        dispatch({
          type:deletetodoc.DELETESUCSESS,
          payload: id
         
      
        })
      })
     
    
    
    })
   
    
  }
}

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}


export function gettodoid(id) {

  return function(dispatch) {
    axios.get(`${URL}/get/${id}`).then(response => {
      // console.log(response);
      dispatch({
        type: gettodo.GETID,
        payload: response.data,
      });
    });
  }
}

export function updatetodoaction({ _id, title, categories, content }, onEditSuccess, historyReplace) {

  return function(dispatch) {
    axios.put(`${URL}/update/${_id}`, {
      _id,
      title,
      categories,
      content,
    }, {
      headers: {authorization: localStorage.getItem('token')},  // require auth
    })
      .then((response) => {
        dispatch({
          type: updatetodo.UPDATESUCCESS,
          payload: response.data,
        });
        onEditSuccess();  // set beingEdit to false
        historyReplace(`/posts/${_id}`, null);
      })
      .catch(({response}) => {
        historyReplace(`/posts/${_id}`, {
          time: new Date().toLocaleString(),
          message: response.data.message,
        });
      });
  }
}