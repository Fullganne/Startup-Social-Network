import React, { useContext, useEffect, useState } from "react";
import PostCard from "../../Components/Post/post";
import HomeRight from "../../Components/HomeRight/HomeRight";
import { UserContext } from "../../Context/UserContext";
import userService from "../../services/userService";
import postService from "../../services/postService";
import followService from "../../services/followService";
import PostCardFriend from "../../Components/Post/postCardFriend";

const HomePage = () => {
    const { userData } = useContext(UserContext);
    const [dataPost, setDataPost] = useState([]);
    const [followings, setFollowings] = useState(null);
    let count = 5;

    const handleFetchPost = async () => {
        const postList = await postService.getPostUserNotId(userData.id);
        const followings = await followService.getFollowings(userData.id);

        console.log("Ở đây là test FOLLOWINGS");
        console.log(followings.data);

        console.log("Ở đây là test POSTS");
        console.log(postList.data);
        setFollowings(followings.data);
        setDataPost(postList.data);
    };

    useEffect(() => {
        handleFetchPost();
    }, []);

    return (
        <div>
            <div className="mt-10 flex w-[100%] justify-center">
                <div className="w-[70%] px-10 flex justify-center">
                    <div className="space-y-10 w-[60%] mt-10">
                        {dataPost.map((postItem) => {
                            // Kiểm tra xem postItem.user.id có trong followings hay không
                            const isFollowing = followings.some(
                                (item) => item.followed === postItem.user.id
                            );

                            // Nếu thuộc followings, thì mới render component
                            if (isFollowing) {
                                return (
                                    <PostCardFriend
                                        key={postItem.id_post}
                                        id={postItem.id_post}
                                        data={postItem}
                                    />
                                );
                            }

                            // Nếu không thuộc followings, thì không render gì cả
                            return null;
                        })}
                    </div>
                </div>
                <div className="w-[30%]">
                    <HomeRight></HomeRight>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
// const Profile = () => {
//   return (
//     <div className='px-20'>
//       <div >
//         <ProfileUserDetails></ProfileUserDetails>
//       </div>
//       <div>
//         <ReqUserPostPart/>
//       </div>
//     </div>
//   )
// }
