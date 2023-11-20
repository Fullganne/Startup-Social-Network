import React from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";
import ModelUser from "../Post/userModel.jsx";
import SearchUser from "./searchUser.jsx"
const SearchCard=()=>{
    return(
    <div className="flex w-full justify-center items-center">   
        <div className="searchContainer bg-slate-50">
            <div className="rounded ">
                <h1>Tìm kiếm</h1>
                <input className="searchInput" type="text" placeholder="Tìm kiếm"/>
            </div>
            <div className="border-t border-gray-400">
            {[1,1,1,1].map((item)=><SearchUser/>)} 
            </div>
        </div>
    </div> 
    )  
}
export default SearchCard;


