import { getallConstants} from '../constants/Getall'
import store from '../store/index'
export const  useraction = {
    getAll:getAll
}
const URL = 'http://localhost:3201';



export function getAll()
{return dispatch =>{
  return fetch(URL+'/users', {
    method: 'GET',
    headers: {'Content-Type':'application/json;charset=UTF-8'}
   
   
}).then((res)=>{
  res.json().then(data =>{
    console.log("res data", data);
    dispatch({
      type: getallConstants.getallcons.GETALL_SUCCESS,
      payload: data
  
    })
  })
 


})
}
} 
