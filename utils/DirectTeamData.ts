interface tableTypes {
  id: number;
  imgURL:string;
  planetName:string;
  BNId: string;
  Date: string;
  name: string;
  mobile: number;
  emailId: string;
  directTeam: number;
  totalTeam: number;
  uplineId:string;
  incomeFromTier:string;
  currentPlanet:string;
  status: string;
  address: string;
}
export const tableData:tableTypes [] = [
  {
    id: 1,
    imgURL: "/Earth.png",
    planetName:'Earth',
    BNId: "BN091287",
    Date: "2022/02/07",
    name: "Alice",
    mobile: 91998997977,
    emailId: "alice12@gmail.com",
    directTeam: 0.6000,
    totalTeam: 0.400,
    uplineId:"BN0814387",
    incomeFromTier:'2.5000',
    currentPlanet:"Earth",
    status: "Active",
    address: "0x9ab...00d737f",
  },
  {
    id: 2,
    imgURL: "/Moon.png",
    planetName:'Moon',
    BNId: "BN091287",
    Date: "2022/02/07",
    name: "Divid",
    mobile: 91998697977,
    emailId: "divid22@gmail.com",
    directTeam: 0.6000,
    totalTeam: 0.400,
    uplineId:"BN0823487",
    incomeFromTier:'2.5000',
    currentPlanet:"Earth",
    status: "Inactive",
    address: "0x9ab...00d737f",
  },
  {
    id: 3,
    imgURL: "/Moon.png",
    planetName:'Moon',
    BNId: "BN091287",
    Date: "2022/02/07",
    name: "Divid Robert Iron Man",
    mobile: 91998697977,
    emailId: "divid22@gmail.com",
    directTeam: 0.6000,
    totalTeam: 0.400,
    uplineId:"BN0817777",
    incomeFromTier:'2.5000',
    currentPlanet:"Earth",
    status: "Inactive",
    address: "0x9ab...00d737f",
  },
  {
    id: 4,
    imgURL: "/Mercury.png",
    planetName:'Mercury',
    BNId: "BN091287",
    Date: "2022/02/07",
    name: "Divid",
    mobile: 91998697977,
    emailId: "divid22@gmail.com",
    directTeam: 0.6000,
    totalTeam: 0.400,
    uplineId:"BN0814387",
    incomeFromTier:'2.5000',
    currentPlanet:"Earth",
    status: "Inactive",
    address: "0x9ab...00d737f",
  },
  {
    id: 5,
    imgURL: "/Venus.png",
    planetName:'Venus',
    BNId: "BN091287",
    Date: "2022/02/07",
    name: "Divid",
    mobile: 91998697977,
    emailId: "divid22@gmail.com",
    directTeam: 0.6000,
    totalTeam: 0.400,
    uplineId:"BN0812187",
    incomeFromTier:'2.5000',
    currentPlanet:"Earth",
    status: "Inactive",
    address: "0x9ab...00d737f",
  },
  {
    id: 6,
    imgURL: "/Jupiter.png",
    planetName:'Jupiter',
    BNId: "BN091287",
    Date: "2022/02/07",
    name: "Divid",
    mobile: 91998697977,
    emailId: "divid22@gmail.com",
    directTeam: 0.6000,
    totalTeam: 0.400,
    uplineId:"BN0810087",
    incomeFromTier:'2.5000',
    currentPlanet:"Earth",
    status: "Inactive",
    address: "0x9ab...00d737f",
  },
  {
    id: 7,
    imgURL: "/Saturn.png",
    planetName:'Saturn',
    BNId: "BN091287",
    Date: "2022/02/07",
    name: "Divid",
    mobile: 91998697977,
    emailId: "divid22@gmail.com",
    directTeam: 0.6000,
    totalTeam: 0.400,
    uplineId:"BN0814387",
    incomeFromTier:'2.5000',
    currentPlanet:"Earth",
    status: "Inactive",
    address: "0x9ab...00d737f",
  },
  {
    id: 8,
    imgURL: "/Uranus.png",
    planetName:'Uranus',
    BNId: "BN091287",
    Date: "2022/02/07",
    name: "Divid",
    mobile: 91998697977,
    emailId: "divid22@gmail.com",
    directTeam: 0.6000,
    totalTeam: 0.400,
    uplineId:"BN0814387",
    incomeFromTier:'2.5000',
    currentPlanet:"Earth",
    status: "Inactive",
    address: "0x9ab...00d737f",
  },
  {
    id: 9,
    imgURL: "/Neptune.png",
    planetName:'Neptune',
    BNId: "BN091287",
    Date: "2022/02/07",
    name: "Divid",
    mobile: 91998697977,
    emailId: "divid22@gmail.com",
    directTeam: 0.6000,
    totalTeam: 0.400,
    uplineId:"BN0814387",
    incomeFromTier:'2.5000',
    currentPlanet:"Earth",
    status: "Inactive",
    address: "0x9ab...00d737f",
  },
  {
    id: 10,
    imgURL: "/Pluto.png",
    planetName:'Pluto',
    BNId: "BN091287",
    Date: "2022/02/07",
    name: "Divid",
    mobile: 91998697977,
    emailId: "divid22@gmail.com",
    directTeam: 0.6000,
    totalTeam: 0.400,
    uplineId:"BN0814387",
    incomeFromTier:'2.5000',
    currentPlanet:"Earth",
    status: "Inactive",
    address: "0x9ab...00d737f",
  },
];


// <td className="px-3 py-2 whitespace-nowrap  font-medium flex items-center justify-center">
// <Image
//   className= 'h-12 w-12  rounded-full'
//   width={20}
//   height={20}
//   loading="lazy"
//   src={user.imgURL}
//   alt="Avatar"
// />
// </td>