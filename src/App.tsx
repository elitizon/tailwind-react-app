import React from "react"
import tw from "twin.macro"
import "./assets/tailwind.css"
import { ReactComponent as Logo } from "./logo.svg"

const Header = tw.h1`text-blue-700 text-6xl text-center`
const StyleApp = tw.div`bg-gray-200 h-screen`
const LogoContainer = tw.div`w-full flex flex-col p-10 items-center justify-center`
const StyledLogo = tw(Logo)`text-blue-500 h-40 w-40 inline-block`

function App() {
  return (
    <StyleApp className="App">
      <LogoContainer>
        <StyledLogo alt="logo" />
      </LogoContainer>
      <Header>learn react</Header>
    </StyleApp>
  )
}

export default App
