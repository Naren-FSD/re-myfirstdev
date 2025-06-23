import Header from "./components/Header"

function App() {
  //App: parent component
  let name1="Karnik"
  let name2="Naren"
  return (
    <>
    <Header 
    name={name1}/>
    <Header 
    name={name2}/>
    </>
  )
}

export default App