import './App.css';
import Student from './Student';
import studentsArray from './data';



export default function App() {

const students = studentsArray.map((e, index) => {
  return(
    <Student 
    name={e.name}
    bio={e.bio}
    score={e.scores}
    />
  )
})
console.log(students)

  return (
    <div className="App">

    </div>
  );
}
