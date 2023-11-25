import React, { useContext, useEffect, useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import ReqUserPostCard from "./ReqUserPostCard";
import "./ReqUserPostCard.css";
import { Link, Outlet } from "react-router-dom";
import PostCard from "../Post/post";
import postService from "../../services/postService";
import { UserContext } from "../../Context/UserContext";
import userService from "../../services/userService";
const ReqUserPostPart = () => {
    const { userData } = useContext(UserContext);
    const [dataPost, setDataPost] = useState(userData.post);
    const [activeTab, setActiveTab] = useState("POSTS");
    const tabs = [
        {
            tab: "POSTS",
            icon: <AiOutlineTable></AiOutlineTable>,
            activeTab: "",
            link: "/posts",
        },
        {
            tab: "IMAGES",
            icon: <BiBookmark />,
            link: "/images",
        },
        {
            tab: "TAGGED",
            icon: <AiOutlineUser></AiOutlineUser>,
            link: "",
        },
    ];

    const handleFetchPost = async () => {
        const tmp = await userService.getById(userData.id);
        console.log(tmp);

        setDataPost(tmp.data.post);
    };

    useEffect(() => {
        handleFetchPost();
    }, [handleFetchPost]);

    console.log("ds post ne: ", dataPost);
    return (
        <div>
            <div className="tab flex items-center justify-center space-x-16 border-t relative">
                {tabs.map((item) => (
                    <div
                        onClick={() => setActiveTab(item.tab)}
                        className={`${
                            activeTab === item.tab
                                ? "border-t border-black"
                                : "opacity-60"
                        } flex items-center cursor-pointer py-2 text-md font-semibold`}
                    >
                        {/* <Link to={item.link}> */}
                        <p>{item.icon}</p>
                        <p className="ml-1">{item.tab}</p>
                        {/* </Link> */}
                    </div>
                ))}
            </div>
            {/* <div>
            <div className='flex flex-wrap'>
                {[1,1,1,1,1,1].map((item)=><ReqUserPostCard/>)}
            </div>
        </div> */}
            {/* <Outlet/> */}

            <div className="w-[50%] mx-auto">
                {console.log(userData)}
                {dataPost?.map((item) => {
                    return (
                        <PostCard
                            handleFetchPost={handleFetchPost}
                            key={item.id_post}
                            id={item.id_post}
                            data={item}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default ReqUserPostPart;
