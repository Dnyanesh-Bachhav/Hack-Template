import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';
import banner4 from '../assets/banner4.png';
import banner5 from '../assets/banner5.png';
const APP = {
    name: "Cakies",
};

const banners = [
    {
      id: 1,
      imgSrc: banner1,
    },
    {
      id: 2,
      imgSrc: banner2,
    },
    {
      id: 3,
      imgSrc: banner3,
    },
    {
      id: 4,
      imgSrc: banner4,
    },
    {
      id: 5,
      imgSrc: banner5,
    }
  ];

const COLORS = {
    primary: "#892ECC",    
    primaryFaint: "#f2edf5",
    secondary: "#023e8a",
    secondary1: "#0077b6",
    gray: "#adb5bd",
    grayDark: "#6c757d",
    grey: "#ced4da",
    greyLight: "#dee2e6",
    black: "#212529",
    white: "#f8f9fa"
}
const LIST_DATA = [
    {
        id: 1,
        name: "Dnyanesh",
        age: 22,
    },
    {
        id: 2,
        name: "Nilesh",
        age: 22,
    },
    {
        id: 3,
        name: "Suyog",
        age: 22,
    },
    {
        id: 4,
        name: "Nihar",
        age: 22,
    },
    {
        id: 5,
        name: "Yadnesh",
        age: 22,
    },
    {
        id: 6,
        name: "Om",
        age: 22,
    },
    {
        id: 7,
        name: "Pranav",
        age: 22,
    },
    {
        id: 8,
        name: "Yadnesh",
        age: 22,
    },
    {
        id: 9,
        name: "Om",
        age: 22,
    },
    {
        id: 10,
        name: "Pranav",
        age: 22,
    },
]
export { COLORS, APP, LIST_DATA, banners };