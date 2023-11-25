import React, { useContext, useState } from "react";
import { Image } from "cloudinary-react";
import { UserContext } from "../../Context/UserContext";
import followService from "../../services/followService";

const SearchUser = ({ key, dataUser }) => {
    // console.log(da)
    const { userData, handleFetchUsers } = useContext(UserContext);
    const [id, setId] = useState(dataUser.id);

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
        <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
                <div>
                    <Image
                        cloudName="da0ikowpn"
                        publicId={dataUser.avatar}
                        className="ml-2 w-14 h-14 rounded-full"
                        // style={{
                        //     position: "absolute",
                        //     top: 0,
                        //     left: 0,
                        //     width: "100%",
                        //     height: "100%",
                        //     objectFit: "cover", // Add this line
                        // }}
                        alt="Avatar"
                    />
                    {/* <img  src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg" alt="" /> */}
                </div>
                <div className="ml-3">
                    <p className="text-lg font-semibold">
                        {dataUser?.username}
                    </p>
                    <p className="text-base opacity-70">Suggested for you</p>
                </div>
            </div>
            <button
                    className="text-cyan-500 font-semibold cursor-pointer pr-4"
                    onClick={(e) => {
                        handleFollow();
                        alert("Đã follow");
                    }}
                >
                    Follow
                </button>
        </div>
    );
};
export default SearchUser;
