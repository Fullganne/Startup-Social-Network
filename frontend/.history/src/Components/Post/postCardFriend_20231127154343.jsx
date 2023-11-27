import React, { useContext, useState, useEffect } from "react";
import "./post.css";
import { Link } from "react-router-dom";
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

const PostCardFriend = ({ data, user, func, posts }) => {
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { userData } = useContext(UserContext);
    const [like, setLike] = useState(false);

    useEffect(() => {
        // Move your logic here
        if (data.likedUsers.split(";").includes(userData.id)) {
            setLike(true);
        } else {
            setLike(false);
        }

        // console.log("Data");
        // console.log(data);

        let id = userData.id;
        let likedUser = data.likedUsers || "";
        console.log("Username: " + id);
        console.log("Liked user: " + likedUser);
        console.log("Like: " + like);
    }, [data.likedUsers]);

    const handlePostLiked = async () => {
        if (like == false) {
            console.log("Xử lí like");
            await postService.likePost(data.id_post, userData.id);
            await func();
        } else {
            console.log("Xử lí dislike");
            await postService.dislikePost(data.id_post, userData.id);
            await func();
        }
    };

    const handleSavePost = () => {
        setIsSaved(!isSaved);
    };
    let used = "guess";
    const handleOpenModel = () => {
        onOpen();
    };
    // const handlePostLiked = () => {
    //     setIsPostLiked(!isPostLiked);
    // };
    console.log(data);
    return (
        <div>
            <div className="border rounded-md w-full mt-20">
                <div className="flex justify-between items-center w-full py-4 px-5">
                    <div className="flex items-center">
                        <img
                            className="h-12 w-12 rounded-full"
                            //  src="https://cdn.pixabay.com/photo/2023/10/27/12/13/vineyard-8345243_1280.jpg"
                            src={user.avatar}
                            alt=""
                        />
                        <div className="pl-2">
                            <p className="font-semibold text-sm">
                                {user.username}
                                {/* Tên */}
                            </p>
                            <p className="font-thin text-sm">{data.day}</p>
                        </div>
                    </div>
                    <div className="asss">
                        <BsThreeDots
                            className="dots"
                            onClick={handleOpenModel}
                        />
                    </div>
                </div>
                <div className="w-full">
                    {/* <img className='w-full' src='https://cdn.pixabay.com/photo/2023/10/28/18/02/songbird-8348139_640.png' alt=''/> */}
                    <img className="w-full" src={data.image} alt="" />
                </div>
                <div className="flex justify-between items-center w-full py-4 px-5">
                    <div className="flex items-center space-x-2 ">
                        {like ? (
                            <AiFillHeart
                                className="text-xl hover:opacity-50 cursor-pointer text-red-500"
                                onClick={handlePostLiked}
                            />
                        ) : (
                            <AiOutlineHeart
                                className="text-xl hover:opacity-50 cursor-pointer"
                                onClick={handlePostLiked}
                            />
                        )}
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
            {
                <ModelGuess
                    isOpen={isOpen}
                    onClose={onClose}
                    idpost={data.id_post}
                />
            }
        </div>
    );
};
export default PostCardFriend;
