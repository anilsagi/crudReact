import './App.css';
import { useState } from 'react';
import  ReactDOM  from 'react-dom';

//using portal we can display the content outside the parent
function Model(props){
  return (
    ReactDOM.createPortal(
      <div className='model-overlay'>
      <div className="content">
        <h1>
            Model Heading
        </h1>
        <p>
          This is Modal content, click close to close the modal
        </p>
        <button className='btn btn-danger' onClick={props.close}>Close</button>
      </div>
  </div>
      ,document.getElementById("model-root"))
   
    )
}

function App() {

  const[show, setShow] = useState(false);

  const toogleModel = ()=>{
    return setShow(!show)
;  }

  return (
    <div className="App">
      <button className='btn btn-primary m-5' onClick={toogleModel}>Open modal</button>

      {show && <Model close={toogleModel} />}
    </div>
  );
}

export default App;
