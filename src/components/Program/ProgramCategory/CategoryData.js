import strength from "../../../assets/program-dumbel.png";
import calorie from '../../../assets/program-kcal.png';
import cardio from '../../../assets/program-treadmill.png'
import yoga from '../../../assets/program-yoga.png';
import { ImAmazon } from "react-icons/im";
const categoryData = [
  {
    id: 1,
    image: strength,
    title: "Strength Training",
    description: "Increase muscle mass and improve overall strength.",
    level:'Beginner → Advanced'
  },
  {
    id:2,
    image:calorie,
    title:'HIIT',
    description:'Burn calories with high-intensity workouts.',
    level:'Intermediate'
  },
  {
    id:3,
    image:cardio,
    title:'Cardio',
    description:'Improve stamina and heart health.',
    level:'All Levels'
  },
  {
    id:4,
    image:yoga,
    title:'Yoga',
    description:'Increase flexibility and improve recovery.',
    level:'All Levels'
  }
];

export default categoryData;
