import React, { useState } from "react"
import "./Menu.css"
import { SlideComponent } from "../../types"

interface Props {
  info: SlideComponent[]
  updateCurrentSlide: (slideName: string) => void
  currentSlideName: string
}

const Menu: React.FC<Props> = ({
  info,
  updateCurrentSlide,
  currentSlideName,
}) => {
  const [isMenuListOpen, setIsMenuListOpen] = useState<boolean>(false)
  return (
    <>
      <div onClick={() => updateCurrentSlide("home")} className='menu-header'>
        <div className='desktop-header-logo'>Jack Carrick</div>
        <div className='mobile-header-logo'>Jack Carrick</div>
        <div
          onClick={() => {
            if (isMenuListOpen) {
              setIsMenuListOpen(false)
            } else {
              setIsMenuListOpen(true)
            }
          }}
          className={
            isMenuListOpen ? "arrow-container active" : "arrow-container"
          }>
          <img alt='arrow-logo' src='./assets/logos/Arrow-Logo.png' />
        </div>
      </div>
      <div
        className={isMenuListOpen ? "list-container active" : "list-container"}>
        <ul>
          {info.map((item, i) =>
            item.name !== "home" ? (
              <li
                key={i}
                className={item.name === currentSlideName ? "active" : ""}
                onClick={() => {
                  updateCurrentSlide(item.name)
                  setIsMenuListOpen(false)
                }}>
                {" "}
                {item.name}{" "}
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </>
  )
}

export default Menu
