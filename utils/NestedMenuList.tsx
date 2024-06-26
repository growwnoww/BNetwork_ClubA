import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs';
import { GiReceiveMoney } from 'react-icons/gi';
import { HiUserGroup } from 'react-icons/hi';
import { IoIosArrowDown, IoIosArrowUp, IoIosLock, IoMdArrowDropright } from 'react-icons/io';
import React from 'react';
import { FaChartLine } from 'react-icons/fa';
import { GrUserNew } from 'react-icons/gr';

interface NestedMenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  lock?:React.ReactNode;
}

interface NestedMenuType {
  id: number;
  title: string;
  icon: React.ReactNode;
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  list: NestedMenuItem[];
}

const NestedMenuList: NestedMenuType[] = [
  {
    id: 1,
    title: "Create New Believer",
    icon:<GrUserNew />,
    icon1: <IoIosArrowDown />,
    icon2:<IoIosArrowUp />,
    list: [
      {
        title: "Planet Upgrade System",
        path: "/dashboard/createnewbeliever",
        icon: <IoMdArrowDropright />,
       
      },
      {
        title: "Universe Club-A",
        path: "/dashboard/universeclub-a-believer",
        icon: <IoMdArrowDropright />,
      },
    
    ],
  },
  {
    id: 2,
    title: "Live Planet Status",
    icon: <FaChartLine />,
    icon1: <IoIosArrowDown />,
    icon2:<IoIosArrowUp />,
    list: [
      {
        title: "P Upgrade Live Status",
        path: "/dashboard/planetuplive",
        icon: <IoMdArrowDropright />,
       
      },
      {
        title: "U Club A Live Status",
        path: "/dashboard/clubAlive",
        icon: <IoMdArrowDropright />,
      },
    
    ],
  },
  {
    id: 3,
    title: "My team",
    icon: <HiUserGroup />,
    icon1: <IoIosArrowDown />,
    icon2:<IoIosArrowUp />,
    list: [
      {
        title: "Direct Team",
        path: "/dashboard/directteam",
        icon: <IoMdArrowDropright />,
      },
      {
        title: "Tier Team",
        path: "/dashboard/tierteam",
        icon: <IoMdArrowDropright />,
      },
      {
        title: "Tier Upline Team",
        path: "/dashboard/tieruplineteam",

        icon: <IoMdArrowDropright />,
      },
    ],
  },
  {
    id: 4,
    title: "Activation History",
    icon: <BsReverseLayoutTextSidebarReverse />,
    icon1: <IoIosArrowDown />,
    icon2:<IoIosArrowUp />,
    list: [
      {
        title: "Planet Upgrade History",
        path: "/dashboard/planetranxhistory",

        icon: <IoMdArrowDropright />,
      },
      {
        title: "U Club A Upgrade History",
        path: "/dashboard/clubAupgradehistory",
        icon: <IoMdArrowDropright />,
      },
    ],
  },
  {
    id: 5,
    title: "P Upgrade Earnings",
    icon: <GiReceiveMoney />,
    icon1: <IoIosArrowDown />,
    icon2:<IoIosArrowUp />,
    list: [
      {
        title: "Direct Earnings ",
        path: "/dashboard/directearnings",
        icon: <IoMdArrowDropright />,
      },
      {
        title: "Tier Earnings ",
        path: "/dashboard/tierearnings",
        icon: <IoMdArrowDropright />,
      },
      {
        title: "Upgrade Earnings",
        path: "",
        lock:<IoIosLock/>,
        icon: <IoMdArrowDropright />,
      },
      {
        title: "BN Coin Earned",
        path: "/dashboard/bncoinearnings",
        icon: <IoMdArrowDropright />,
      },
      {
        title: "Auto Pool Earnings",
        path: "/dashboard/autopoolearnings",
        icon: <IoMdArrowDropright />,
      },
    ],
  },
  {
    id: 6,
    title: "U Club A Earnings",
    icon: <GiReceiveMoney />,
    icon1: <IoIosArrowDown />,
    icon2:<IoIosArrowUp />,
    list: [
      {
        title: "Club A Direct Earnings",
        path: "/dashboard/clubADirectearn",
        icon: <IoMdArrowDropright />,
      },
      {
        title: "Club A Working Earnings",
        path: "/dashboard/clubAtierearn",
        icon: <IoMdArrowDropright />,
      },
      
     
    
    ],
  },
];

export { NestedMenuList };
