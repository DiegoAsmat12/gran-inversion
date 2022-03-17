import './App.css';
import Persona from './Componentes/Persona';

const App = () =>{
  const personas = [
    {
      firstName:"Jane",
      lastName:"Doe",
      age:45,
      hairColor:"Black"
    },
    {
      firstName:"John",
      lastName:"Smith",
      age:88,
      hairColor:"Brown"
    },
    {
      firstName:"Millard",
      lastName:"Fillmore",
      age:50,
      hairColor:"Brown"
    },
    {
      firstName:"Maria",
      lastName:"Smith",
      age:62,
      hairColor:"Brown"
    }

  ]
  return (
    <div className="App">
      {
        personas.map((persona,index) =>{
          return (
            <Persona key={"persona_"+index} firstName={persona.firstName} lastName={persona.lastName}
            age={persona.age} hairColor={persona.hairColor}/>
          );
        })
      }
    </div>
  );
}

export default App;
