import React from "react"
import styled from "styled-components"

const LogoImg = styled.img `
margin : 20;
`
export default function TarkovLogo () {

  return (
    <LogoImg src='./logo.png' alt="logo"></LogoImg>
  )
}