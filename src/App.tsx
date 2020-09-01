import React from "react"
import tw from "twin.macro"
import "./assets/main.css"
import content   from "./logo.svg"

const Header = tw.h1`text-blue-700 text-6xl`
const StyleApp = tw.div`bg-gray-200 h-screen`

function* range(x:number, y:number) {
  while (true) {
    if (x <= y)
      yield x++
    else
      return null
  }
}
/*
l.map((x,i) => { return (
  <Header>{x.toString()}</Header>
)}*/


function App() {
  const l = Array.from(range(0,2000))
  return (
    <StyleApp className="App">
      <img src={content} />
      <Header>learn react</Header>
    </StyleApp>
  )
}

export default App
