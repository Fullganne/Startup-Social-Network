import React, { useContext, useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import { UserContext } from "../../Context/UserContext";
import userService from "../../services/userService";

const HomeRight = () => {
    const { userData, handleFetchUsers } = useContext(UserContext);
    const [user, setUser] = useState(userData);
    const [followings, setFollowings] = useState(null);

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let response = await userService.getAllUser();
                setUsers(response.data); // Assuming the data is in the 'data' property

                response = await userService.getFollowings(userData.id);
                setFollowings(response);
                console.log("Following");
                console.log(response);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to run only once when the component mounts

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
                            <img
                                className="w-14 h-14 rounded-full"
                                src={userData.avatar}
                                alt=""
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
                {users.map((item) => (
                    <SuggestionCard key={item.id} user={item} />
                ))}
            </div>
        </div>
    );
};

export default HomeRight;
