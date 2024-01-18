

interface PlanetUpPackageTypes{
    id:number;
    imgURL:string;
    packageName:string;
    packagePrice:number;
    treePath:string;
    chartPath:string;
}

const PlanetUpPackageList:PlanetUpPackageTypes[] = [
    {
        id:1,
        imgURL:'/earth.png',
        packageName:"Earth",
        packagePrice:5,
        treePath:'/dashboard/bnsystem/planetupgrade/planteuptree',
        chartPath:'/dashboard/bnsystem/planetupgrade/planteupchart'
    },
    {
        id:2,
        imgURL:'/Moon.png',
        packageName:"Moon",
        packagePrice:10,
        treePath:'/dashboard/bnsystem/planetupgrade/planteuptree',
        chartPath:'/dashboard/bnsystem/planetupgrade/planteupchart'
    },
    {
        id:3,
        imgURL:'/Mars.png',
        packageName:"Mars",
        packagePrice:25,
        treePath:'/dashboard/bnsystem/planetupgrade/planteuptree',
        chartPath:'/dashboard/bnsystem/planetupgrade/planteupchart'
    },
    {
        id:4,
        imgURL:'/Mercury.png',
        packageName:"Mercury",
        packagePrice:50,
        treePath:'/dashboard/bnsystem/planetupgrade/planteuptree',
        chartPath:'/dashboard/bnsystem/planetupgrade/planteupchart'
    },
    {
        id:5,
        imgURL:'/Venus.png',
        packageName:"Venus",
        packagePrice:100,
        treePath:'/dashboard/bnsystem/planetupgrade/planteuptree',
        chartPath:'/dashboard/bnsystem/planetupgrade/planteupchart'
    },
    {
        id:6,
        imgURL:'/Jupiter.png',
        packageName:"Jupiter",
        packagePrice:250,
        treePath:'/dashboard/bnsystem/planetupgrade/planteuptree',
        chartPath:'/dashboard/bnsystem/planetupgrade/planteupchart'
    },
    {
        id:7,
        imgURL:'/Saturn.png',
        packageName:"Saturn",
        packagePrice:500,
        treePath:'/dashboard/bnsystem/planetupgrade/planteuptree',
        chartPath:'/dashboard/bnsystem/planetupgrade/planteupchart'
    }, {
        id:8,
        imgURL:'/Uranus.png',
        packageName:"Uranus",
        packagePrice:1000,
        treePath:'/dashboard/bnsystem/planetupgrade/planteuptree',
        chartPath:'/dashboard/bnsystem/planetupgrade/planteupchart'
    },
    {
        id:9,
        imgURL:'/Neptune.png',
        packageName:"Neptune",
        packagePrice:2500,
        treePath:'/dashboard/bnsystem/planetupgrade/planteuptree',
        chartPath:'/dashboard/bnsystem/planetupgrade/planteupchart'
    },
    {
        id:10,
        imgURL:'/Pluto.png',
        packageName:"Pluto",
        packagePrice:5000,
        treePath:'/dashboard/bnsystem/planetupgrade/planteuptree',
        chartPath:'/dashboard/bnsystem/planetupgrade/planteupchart'
    },
]

export default PlanetUpPackageList;