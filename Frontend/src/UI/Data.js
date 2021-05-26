import React from 'react';
import {
    FaHome,
    FaBloggerB,
} from 'react-icons/fa';
import {
    IoRestaurant,
} from "react-icons/io5";
import{
RiAdvertisementFill
} from "react-icons/ri";
import { FcAbout } from "react-icons/fc";
export const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
        icon: <FaHome />,
    },
    {
        id: 2,
        url: '/blogger',
        text: 'blogger',
        icon: <FaBloggerB />,
    },
    {
        id: 3,
        url: '/restaurant',
        text: 'restaurant',
        icon: <IoRestaurant />,
    },
    {
        id: 4,
        url: '/advertise',
        text: 'advertisement',
        icon: <RiAdvertisementFill />,
    },
    {
        id: 5,
        url: '/aboutus',
        text: 'aboutus',
        icon: <FcAbout />,
    },
];