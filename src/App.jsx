import Header from "./components/Header";
import Paragraph from "./components/Paragraph";
//root component
function App(){
  let now = new Date();
  let time=now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
  let x =5;

//App: parent component
//Header: Child component
//Paragraph: child

  return (
    <>
    <Header />
    <Paragraph 
      time={time}
      x={x}
      />
  </>
  )
  
  
}
export default App;