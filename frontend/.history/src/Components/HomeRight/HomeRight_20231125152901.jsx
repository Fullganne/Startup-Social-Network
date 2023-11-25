import React, { useContext, useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import { UserContext } from "../../Context/UserContext";
import { Image } from "cloudinary-react";
import userService from "../../services/userService";
import followService from "../../services/followService";

const HomeRight = () => {
    const { userData, handleFetchUsers } = useContext(UserContext);
    const [user, setUser] = useState(userData);
    const [followings, setFollowings] = useState(null); // Corrected this line
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchFollowings = async () => {
            try {
                console.log("Đang lấy danh sách theo dõi của user");
                const response = await followService.getFollowings(userData.id);
                console.log("Followings API Response:", response);
                setFollowings(response.data);
                console.log("Following");
                console.log(response.data);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách theo dõi:", error);
            }
        };

        fetchFollowings();
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                console.log("Đang lấy tất cả USERS");
                const response = await userService.getAllUser();
                setUsers(response.data);
            } catch (error) {
                console.error("Lỗi khi lấy dữ liệu người dùng:", error);
            }
        };

        fetchUsers();
    }, []);

    useEffect(() => {
        // Update user state when userData changes
        setUser(userData);
    }, [userData]);

    console.log("right :", user);
    return (
        <div className="w-[75%]">
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div>
                            <Image
                                cloudName="da0ikowpn"
                                publicId={userData.avatar}
                                className="object-cover w-14 h-14 rounded-full"
                                alt="Avatar"
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-lg font-sans font-semibold">
                                {user?.username}
                            </p>
                            {/* <p className='text-lg opacity-70'>{userData?.username}</p> */}
                        </div>
                    </div>
                    <p className="text-cyan-500 font-semibold">Switch</p>
                </div>
            </div>

            <div className="space-y-5 mt-10">
                <p className="text-xl font-semibold opacity-50">
                    Suggested for you
                </p>
                {users
                    .filter((item) => item.id !== userData.id)
                    .slice(0, 5)
                    .map((item) => (
                        <SuggestionCard
                            key={item.id}
                            user={item}
                            followings={followings || []}
                        />
                    ))}
            </div>
        </div>
    );
};

export default HomeRight;
