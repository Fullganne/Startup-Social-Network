import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import { Image } from "cloudinary-react";
import followService from "../../services/followService";

const SuggestionCard = ({ user, key, followings }) => {
    const { userData, handleFetchUsers } = useContext(UserContext);
    const [id, setId] = useState(user.id);
    const [followed, setFollowed] = useState(false);

    const handleFollow = async () => {
        try {
            if (!followed) {
                console.log("User id: " + userData.id);
                console.log("followed id: " + id);
                const response = await followService.follow(userData.id, id);
                setFollowed(response.data);
                console.log(response);
            } else {
                console.log("Unfollow");
            }
        } catch (error) {
            console.error("Error following user:", error);
        }
    };

    // const handleFollow = async () => {
    //     try {
    //         if (!followed) {
    //             console.log("User id: " + userData.id);
    //             console.log("followed id: " + id);
    //             const response = await followService.follow(userData.id, id);
    //             setFollowed(response.data);
    //             console.log(response);
    //         } else {
    //             console.log("Unfollow");
    //         }
    //     } catch (error) {
    //         console.error("Error following user:", error);
    //     }
    // };

    useEffect(() => {
        // Check if the user is in the list of followings
        const isFollowed = followings.some((item) => item.followed === user.id);
        // Update the state based on whether the user is followed
        setFollowed(isFollowed);
        console.log("CHECKINGGGGGG: " + followed);
    }, []);

    return (
        <div key={key}>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div>
                        <Image
                            cloudName="da0ikowpn"
                            // publicId="http://res.cloudinary.com/da0ikowpn/image/upload/v1700754070/wmpl0o8xmngl8ocxzxsv.jpg"
                            publicId={user.avatar}
                            className="ml-2 w-14 h-14 rounded-full"
                            alt="Avatar"
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-lg font-semibold">{user.username}</p>
                        <p className="text-base opacity-70">
                            Suggested for you
                        </p>
                    </div>
                </div>
                {/* <p className="text-cyan-500 font-semibold">Follow</p> */}
                <button
                    className="text-cyan-500 font-semibold cursor-pointer"
                    onClick={(e) => {
                        handleFollow();
                        alert("Đã follow");
                    }}
                >
                    {followed ? "Đã Follow" : "Follow"}
                </button>
            </div>
        </div>
    );
};

export default SuggestionCard;
