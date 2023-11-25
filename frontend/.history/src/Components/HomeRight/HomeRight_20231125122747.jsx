import React, { useContext, useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import { UserContext } from "../../Context/UserContext";
import { Image } from "cloudinary-react";
import userService from "../../services/userService";

const HomeRight = () => {
    const { userData, handleFetchUsers } = useContext(UserContext);
    const [user, setUser] = useState(userData);
    const [followings, setFollowings] = useState(null); // Corrected this line
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Đang lấy tất cả USERS và follow của user");
                let response = await userService.getAllUser();
                setUsers(response.data); // Assuming the data is in the 'data' property

                response = await userService.getFollowings(userData.id);
                console.log("Followings API Response:", response); // Add this line
                setFollowings(response);
                console.log("Following");
                console.log(response);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, [followings]); // Added userData.id to the dependency array

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
                        <SuggestionCard key={item.id} user={item} />
                    ))}
            </div>
        </div>
    );
};

export default HomeRight;
