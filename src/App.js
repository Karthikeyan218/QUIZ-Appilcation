import './App.css';
import anonymus from "./Component/anonymus";
import {useState} from "react";

function App() {
  const [questionindex,setQuestionindex]=useState(0);
  const [score,setscore]=useState(0);
  const [result,setresult]=useState(false);

  const present_question=anonymus[questionindex]

  const getans=(index)=>{
    if(present_question.answer===index){
      setscore(score+1)
    }
    const next_question=questionindex+1;
    if(next_question<anonymus.length){
      setQuestionindex(questionindex+1)
    }
    else{
      setresult(true)
      
    }
    }
    const replay=()=>{
      setQuestionindex(0);
      setresult(false);
      setscore(0);
  };
  return (
    <div className="App">
     {result?(<div><h1 className='finishing_point'>you got {score} scores <br></br> <button  onClick={replay}> replay </button></h1> 
  </div>):( <div className='box'>
     <h1 className='question'>{present_question.question}</h1>
     <h3 className='option-below'>Options Below</h3>
     <ul className='box-ul'>
      
      {present_question.option.map((option,i)=>{return(<li className='box-li' onClick={()=>getans(i)}>{option}</li>)})}
       
     </ul>
     </div>)};
    
    </div>
  );
}
export default App;
