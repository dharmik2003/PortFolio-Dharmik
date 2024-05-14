import movie from './../../public/images/movie1.png'
import burderbyte from './../../public/images/burderbyte1.png'

export interface ProjectType{
    id:number,
    color:string,
    title:string,
    image1:any,
    description:string,
    tech:string[],
    code:string,
}

export const Projectdata: ProjectType[] = [

    {
        id:1,
        color:"from-red-300 to-blue-300",
        title:"Movie Booking",
        image1: movie,
        description:'This project facilitates users to book movie tickets while offering them access to movie blogs, trailers, and upcoming movie listings, enriching their movie-going experience with comprehensive information and convenience.',
        tech: ['React.Js', 'TypeScript','CSS','Node.JS','Express.JS','PoasgreSQL'],
        code:'https://github.com/dharmik2003/TIX-ID',
    },
    {
        id: 2,
        title: "BurgetByte",
        color: "from-blue-300 to-violet-300",
        image1: burderbyte,
        description: 'This project allows users to purchase burgers using Razorpay integration, along with a feature for reserving tables at a hotel, offering a seamless experience for both ordering food and making reservations.',
        tech:['Next.Js','TypeScript','Taiwind','Mongodb'],
        code: 'https://github.com/dharmik2003/BurgerByte',
    },
    {
        id: 3,
        title: "BurgetByte",
        color: "from-blue-300 to-violet-300",
        image1: burderbyte,
        description: 'This project allows users to purchase burgers using Razorpay integration, along with a feature for reserving tables at a hotel, offering a seamless experience for both ordering food and making reservations.',
        tech:['Next.Js','TypeScript','Taiwind','Mongodb'],
        code: 'https://github.com/dharmik2003/BurgerByte',
    },
    {
        id: 4,
        title: "BurgetByte",
        color: "from-violet-300 to-purple-300",
        image1: burderbyte,
        description: 'This project allows users to purchase burgers using Razorpay integration, along with a feature for reserving tables at a hotel, offering a seamless experience for both ordering food and making reservations.',
        tech:['Next.Js','TypeScript','Taiwind','Mongodb'],
        code: 'https://github.com/dharmik2003/BurgerByte',
    },
    {
        id: 5,
        title: "BurgetByte",
        color: "from-purple-300 to-red-300",
        image1: burderbyte,
        description: 'This project allows users to purchase burgers using Razorpay integration, along with a feature for reserving tables at a hotel, offering a seamless experience for both ordering food and making reservations.',
        tech:['Next.Js','TypeScript','Taiwind','Mongodb'],
        code: 'https://github.com/dharmik2003/BurgerByte',
    }
]