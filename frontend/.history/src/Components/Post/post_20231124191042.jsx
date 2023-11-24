import React, { useContext, useState, useEffect } from "react";
import "./post.css";
import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";
import {
    BsThreeDots,
    BsBookmarkFill,
    BsBookmark,
    BsEmojiSmile,
} from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import ModelGuess from "./guess";
import { useDisclosure } from "@chakra-ui/react";
import ModelUser from "./userModel";

import { UserContext } from "../../Context/UserContext";
import postService from "../../services/postService";
import userService from "../../services/userService";

const PostCard = ({ data, handleFetchPost }) => {
    const [like, setLike] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { userData, handleFetchUsers } = useContext(UserContext);

    useEffect(() => {
        // Move your logic here
        if (data.likedUsers.split(";").includes(userData.id)) {
            setLike(true);
        } else {
            setLike(false);
        }

        console.log("Data");
        console.log(data);

        let id = userData.id;
        let likedUser = data.likedUsers || "";
        console.log("Username: " + id);
        console.log("Liked user: " + likedUser);
        console.log("Like: " + like);
    }, [data.likedUsers, userData.id]);

    const handleSavePost = () => {
        setIsSaved(!isSaved);
    };
    let used = "user";
    const handleOpenModel = () => {
        onOpen();
    };
    const handlePostLiked = async () => {
        if (like == false) {
            console.log("Xử lí like");
            await postService.likePost(data.id_post, userData.id);
            await handleFetchPost();
        } else {
            console.log("Xử lí dislike");
            await postService.dislikePost(data.id_post, userData.id);
            await handleFetchPost();
        }
    };

    const handleDeletePost = async () => {
        await postService.deletePost(data.id_post);
        handleFetchPost();
        handleFetchUsers();
    };

    const handleUpdatePost = async (da) => {
        await postService.updatePost(data.id_post, { privacy: da });
        // console.log(data.)
    };

    return (
        <div>
            <div className="border rounded-md w-full mt-20">
                <div className="flex justify-between items-center w-full py-4 px-5">
                    <div className="flex items-center">
                        <Image
                            cloudName="da0ikowpn"
                            // publicId="http://res.cloudinary.com/da0ikowpn/image/upload/v1700754070/wmpl0o8xmngl8ocxzxsv.jpg"
                            publicId={userData.avatar}
                            className="h-12 w-12 rounded-full"
                            alt="Avatar"
                        />

                        <div className="pl-2">
                            <p className="font-semibold text-sm">
                                {userData?.username}
                            </p>
                            <p className="font-thin text-sm">{data?.day}</p>
                        </div>
                    </div>
                    <div className="asss">
                        <BsThreeDots
                            className="dots"
                            onClick={handleOpenModel}
                        />
                    </div>
                </div>
                <div className="pl-[20px] mb-[10px]">{data?.noidung}</div>
                {data?.image && (
                    <div
                        style={{
                            position: "relative",
                            paddingBottom: "56.25%",
                            height: 0,
                        }}
                    >
                        <Image
                            cloudName="da0ikowpn"
                            publicId={data.image}
                            className="w-full"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover", // Add this line
                            }}
                            alt="Post Upload"
                        />
                    </div>
                )}
                <div className="flex justify-between items-center w-full py-4 px-5">
                    <div className="flex items-center space-x-2 ">
                        {/* {isPostLiked? <AiFillHeart className='text-xl hover:opacity-50 cursor-pointer text-red-500' onClick={handlePostUnLiked}/>:<AiOutlineHeart className='text-xl hover:opacity-50 cursor-pointer' onClick={handlePostLiked}/>} */}
                        <AiFillHeart
                            // className="text-xl hover:opacity-50 cursor-pointer "
                            className={`text-xl hover:opacity-50 cursor-pointer ${
                                like ? "text-red-500" : ""
                            }`}
                            onClick={handlePostLiked}
                        />
                        {
                            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
                        }
                        {
                            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                        }
                    </div>
                    <div>
                        {isSaved ? (
                            <BsBookmarkFill
                                onClick={handleSavePost}
                                className="text-xl hover:opacity-50 cursor-pointer"
                            />
                        ) : (
                            <BsBookmark
                                onClick={handleSavePost}
                                className="text-xl hover:opacity-50 cursor-pointer"
                            />
                        )}
                    </div>
                </div>
                <div className="w-full py-2 px-5">
                    <p>{data.like} like</p>
                    {/* <p className='opacity-50 py-2 cursor-pointer'>view all 10 comment</p> */}
                </div>
                {/* <div className='border border-top w-full'>
                    <div className='flex w-full justify-between items-center px-5'>
                        <input className='commentInput' type="text" placeholder='Thêm bình luận...' />
                        <BsEmojiSmile/>
                    </div>
                </div>  */}{" "}
                {/*Comment nếu có */}
            </div>
            {used === "user" ? (
                <ModelUser
                    handleUpdatePost={handleUpdatePost}
                    handleDeletePost={handleDeletePost}
                    isOpen={isOpen}
                    onClose={onClose}
                />
            ) : (
                <ModelGuess isOpen={isOpen} onClose={onClose} />
            )}
        </div>
    );
};
export default PostCard;
