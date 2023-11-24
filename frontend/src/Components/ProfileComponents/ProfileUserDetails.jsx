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
    // console.log("URL: " + userData.avatar);
    return (
        <div className="py-10 w-full">
            <div className="flex items-center flex-wrap">
                <div className="w-[50%] relative flex mb-[12.25%] items-center justify-center">
                    <Image
                        cloudName="da0ikowpn"
                        // publicId="http://res.cloudinary.com/da0ikowpn/image/upload/v1700754070/wmpl0o8xmngl8ocxzxsv.jpg"
                        publicId={userData.avatar}
                        className="block float-right object-cover w-64 h-64 rounded-full"
                        alt="Avatar"
                    />
                </div>
                <div className="space-y-5 w-[50%] h-[400px]">
                    <div className="flex space-x-10 items-center">
                        <p className="text-2xl">{userData?.username}</p>
                        <button className="bg-gray-400/20 rounded-lg py-2 px-5 hover:bg-gray-400/30 text-lg font-semibold" onClick={onOpen}>Edit Profile</button>
                        <TbSettingsFilled></TbSettingsFilled>
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <span className="text-lg font-semibold mr-2">
                                {userData?.number_post}
                            </span>
                            <span className="text-lg">posts</span>
                        </div>
                        <div>
                            <span className="text-lg font-semibold mr-2">
                                {userData?.number_following}
                            </span>
                            <span className="text-lg">following</span>
                        </div>
                        <div>
                            <span className="text-lg font-semibold mr-2">
                                {userData?.number_followed}
                            </span>
                            <span className="text-lg">followed</span>
                        </div>
                    </div>
                </div>
            </div>
            <EditProfileModal isOpen={isOpen} onClose={onClose} />
        </div>
    );
};

export default ProfileUserDetails;
