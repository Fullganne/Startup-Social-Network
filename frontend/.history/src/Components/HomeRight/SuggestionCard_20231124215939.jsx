import React from "react";
import { Image } from "cloudinary-react";
import userService from "../../services/userService";

const SuggestionCard = ({ user }) => {
    const handleFollow = async () => {
        try {
            // Assuming user.id is the follower's id and user.followedId is the id of the user to be followed
            const response = await userService.follow(user.id, user.followedId);
            console.log(response.data); // Log the response if needed
        } catch (error) {
            console.error("Error following user:", error);
        }
    };

    return (
        <div>
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
                    onClick={handleFollow}
                >
                    Follow
                </button>
            </div>
        </div>
    );
};

export default SuggestionCard;
