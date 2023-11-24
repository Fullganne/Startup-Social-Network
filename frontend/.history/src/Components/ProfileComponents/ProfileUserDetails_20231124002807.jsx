import React, { useContext } from "react";
import { TbSettingsFilled } from "react-icons/tb";
import { UserContext } from "../../Context/UserContext";
import EditProfileModal from "../modals/edit-profile-modal";
import { useDisclosure } from "@chakra-ui/react";
import { Image } from "cloudinary-react";

const ProfileUserDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const { userData, handleFetchUsers } = useContext(UserContext);
    // handleFetchUsers();
    {
        console.log(userData.image);
    }
    return (
        <div className="py-10 w-full">
            <div className="flex items-center">
                <div
                    className="w-[15%]"
                    style={{
                        position: "relative",
                        paddingBottom: "12.25%",
                        height: 0,
                    }}
                >
                    <Image
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        cloudName="da0ikowpn"
                        // publicId="http://res.cloudinary.com/da0ikowpn/image/upload/v1700754070/wmpl0o8xmngl8ocxzxsv.jpg"
                        publicId={userData.image}
                        className="w-32 h-32 rounded-full"
                        alt="Avatar"
                    />
                </div>
                <div className="space-y-5">
                    <div className="flex space-x-10 items-center">
                        <p>{userData?.username}</p>
                        <button onClick={onOpen}>Edit Profile</button>
                        <TbSettingsFilled></TbSettingsFilled>
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <span className="font-semibold mr-2">
                                {userData?.number_post}
                            </span>
                            <span>posts</span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">
                                {userData?.number_following}
                            </span>
                            <span>following</span>
                        </div>
                        <div>
                            <span className="font-semibold mr-2">
                                {userData?.number_followed}
                            </span>
                            <span>followed</span>
                        </div>
                    </div>
                </div>
            </div>
            <EditProfileModal isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default ProfileUserDetails;
