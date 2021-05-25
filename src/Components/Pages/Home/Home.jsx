import './Home.css';
import Card from '../../Feauters/Dog-card/Dog-card';

const dogs = [
    {firsName:"rexi",type:"pitbull",age:5},
    {firsName:"chap",type:"lavrador",age:2},
    {firsName:"boss",type:"bulldog",age:8},
    {firsName:"coco",type:"rednous",age:3}];

export default function Home(){
   return(
   <div>  
    {dogs.map((dog)=>{
    if(dog.age >= 4){
      return(        
      <Card firstName={dog.firsName} type={dog.type} age={dog.age} borderColor = "solid 5px green"/>)
    }
    else{
        return(        
      <Card firstName={dog.firsName} type={dog.type} age={dog.age} borderColor = "solid 5px yellow"/>)
 }
})}</div>)
}