import React, { useState, useRef, useCallback } from "react"
import "./Home.css"
import info from "../../data/info.json"
import { SlideComponent } from "../../types"
import Slide from "../slide/Slide"
import Menu from "../menu/Menu"
import Art from "../art/Art"

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState<SlideComponent>(info[0])
  const [svgHeight] = useState<number>(window.innerHeight)
  const [svgWidth] = useState<number>(300)
  const ref = useRef<HTMLDivElement>(null)
  const updateCurrentSlide = useCallback((slideName: string): void => {
    const slide = info.find(({ name }) => name === slideName)
    if (slide) setCurrentSlide(slide)
    if (ref.current) {
      ref.current.scrollTop = 0
    }
  }, [])

  return (
    <div ref={ref} className='home wrapper'>
      <div className='menu-container'>
        <Menu
          currentSlideName={currentSlide.name}
          info={info}
          updateCurrentSlide={updateCurrentSlide}
        />
      </div>
      <div className='content-container'>
        <Slide currentSlide={currentSlide} />
      </div>
      <div className='art-container'>
        <Art svgHeight={svgHeight} svgWidth={svgWidth} />
      </div>
    </div>
  )
}

export default Home
