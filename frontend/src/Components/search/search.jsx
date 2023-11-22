import React, { useContext, useState } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";
import ModelUser from "../Post/userModel.jsx";
import SearchUser from "./searchUser.jsx"
import { UserContext } from "../../Context/UserContext.js";
const SearchCard=()=>{
    const {userNotId}=useContext(UserContext)
    const [key,setKey]=useState("")
    console.log("user nit id",userNotId)
    return(
    <div className="flex w-full justify-center items-center">   
        <div className="searchContainer bg-slate-50">
            <div className="rounded ">
                <h1>Tìm kiếm</h1>
                <input className="searchInput" type="text" placeholder="Tìm kiếm" onChange={(e)=>setKey(e.target.value)}/>
            </div>
            <div className="border-t border-gray-400">
         {key!==""?userNotId?.filter((item) => {
      return item?.username.toLowerCase().includes(key.toLowerCase());
    })?.map((item)=><SearchUser key={item.id} dataUser={item} />):<div className="p-5">No Result</div>} 
            
            </div>
        </div>
    </div> 
    )  
}
export default SearchCard;


