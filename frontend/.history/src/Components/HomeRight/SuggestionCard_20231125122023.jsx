import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import { Image } from "cloudinary-react";
import followService from "../../services/followService";

const SuggestionCard = ({ user, key }) => {
    const { userData, handleFetchUsers } = useContext(UserContext);
    const [id, setId] = useState(user.id);

    const handleFollow = async () => {
        try {
            console.log("User id: " + userData.id);
            console.log("followed id: " + id);
            const response = await followService.follow(userData.id, id);
            console.log(response);
        } catch (error) {
            console.error("Error following user:", error);
        }
    };

    return (
        <div key={user.id}>
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
                    Follow
                </button>
            </div>
        </div>
    );
};

export default SuggestionCard;
