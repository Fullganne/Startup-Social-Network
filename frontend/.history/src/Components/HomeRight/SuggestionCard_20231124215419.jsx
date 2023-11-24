import React from "react";

const SuggestionCard = ({ user }) => {
    return (
        <div>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div>
                        <Image
                            cloudName="da0ikowpn"
                            // publicId="http://res.cloudinary.com/da0ikowpn/image/upload/v1700754070/wmpl0o8xmngl8ocxzxsv.jpg"
                            publicId={userData.avatar}
                            className="h-12 w-12 rounded-full"
                            alt="Avatar"
                        />
                        <img
                            className="ml-2 w-14 h-14 rounded-full"
                            src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg"
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p className="text-lg font-semibold">{user.username}</p>
                        <p className="text-base opacity-70">
                            Suggested for you
                        </p>
                    </div>
                </div>
                <p className="text-cyan-500 font-semibold">Follow</p>
            </div>
        </div>
    );
};

export default SuggestionCard;
