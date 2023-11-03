import {AiFillHome, AiOutlineHome, AiOutlineSearch, AiFillCompass, AiOutlineCompass, AiOutlineMessage, AiFillMessage, AiOutlineHeart, AiFillHeart, AiOutlinePlusCircle, AiFillPlusCircle} from 'react-icons/ai'
import {BiMoviePlay, BiSolidMoviePlay} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'

export const mainu=[
    {
        title:'Home',
        icon: <AiOutlineHome className='text-3xl mr-5'></AiOutlineHome>,
        iactiveIcon: <AiFillHome className='text-3xl mr-5'></AiFillHome>
    },
    {
        title:'Search',
        icon: <AiOutlineSearch className='text-3xl mr-5'></AiOutlineSearch>,
        iactiveIcon: <AiOutlineSearch className='text-3xl mr-5'></AiOutlineSearch>
    },
    {
        title: 'Explore',
        icon: <AiOutlineCompass className='text-3xl mr-5'></AiOutlineCompass>,
        iactiveIcon: <AiFillCompass className='text-3xl mr-5'></AiFillCompass>
    },
    {
        title: 'Reels',
        icon: <BiMoviePlay className='text-3xl mr-5'></BiMoviePlay>,
        iactiveIcon: <BiSolidMoviePlay className='text-3xl mr-5'></BiSolidMoviePlay>
    },
    {
        title: 'Message',
        icon: <AiOutlineMessage className='text-3xl mr-5'></AiOutlineMessage>,
        iactiveIcon: <AiFillMessage className='text-3xl mr-5'></AiFillMessage>
    },
    {
        title: 'Notification',
        icon: <AiOutlineHeart className='text-3xl mr-5'></AiOutlineHeart>,
        iactiveIcon: <AiFillHeart className='text-3xl mr-5'></AiFillHeart>
    },
    {
        title: 'Create',
        icon: <AiOutlinePlusCircle className='text-3xl mr-5'></AiOutlinePlusCircle>,
        iactiveIcon: <AiFillPlusCircle className='text-3xl mr-5'></AiFillPlusCircle>
    },
    {
        title: 'Profile',
        icon: <CgProfile className='text-3xl mr-5'></CgProfile>,
        iactiveIcon: <CgProfile className='text-3xl mr-5'></CgProfile>
    }
]