import React from "react"
import tw from "twin.macro"
import "./assets/main.css"
import { ReactComponent as Logo }   from "./logo.svg"

const Header = tw.h1`text-blue-700 text-6xl`
const StyleApp = tw.div`bg-gray-200 h-screen`
const StyledLogo = tw(Logo)`text-red-500 bg-green-500 h-10 w-10`

function* range(x:number, y:number) {
  while (true) {
    if (x <= y)
      yield x++
    else
      return null
  }
}
function App() {
  const l = Array.from(range(0,2000))
  return (
    <StyleApp className="App">
      <StyledLogo alt="logo"/>
      <Header>learn react</Header>
      {
        l.map((x,i)=>{
          return <div key={i}>{x}</div>
        })
      }
    </StyleApp>
  )
}

export default App
