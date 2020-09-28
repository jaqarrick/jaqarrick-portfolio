import React, { useState, useCallback } from "react"
import { shapesGenerator, initialShapesGenerator } from "./shapeGenerator"
import { Shape } from "./shapeGenerator"
import "./Art.css"

interface Props {
  svgHeight: number
  svgWidth: number
}
const Art: React.FC<Props> = ({ svgHeight, svgWidth }) => {
  const [shapes, setShapes] = useState<Shape[]>(
    initialShapesGenerator(svgHeight, svgWidth)
  )
  const change = useCallback(() => {
    setShapes(shapesGenerator(3, svgHeight, svgWidth))
  }, [svgWidth, svgHeight])

  return (
    <svg
      onClick={change}
      height={`${svgHeight}px`}
      width={`${svgWidth}px`}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      xmlns='http://www.w3.org/2000/svg'>
      {shapes.map((shape, index) => {
        if (shape.type === "angle") {
          const { x1, x2, x3, y1, y2, y3, strokeWidth, fill } = shape
          return (
            <React.Fragment key={index}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                strokeWidth={strokeWidth}
                stroke={fill}
              />
              <line
                x1={
                  x3 && strokeWidth
                    ? x1 > x3
                      ? x1 + strokeWidth / 2
                      : x1 - strokeWidth / 2
                    : ""
                }
                y1={y1}
                x2={x3}
                y2={y3}
                strokeWidth={strokeWidth}
                stroke={fill}
              />
            </React.Fragment>
          )
        }
        const { x1, y1, height, width, fill } = shape
        return (
          <rect
            key={index}
            x={x1}
            y={y1}
            height={height}
            width={width}
            fill={fill}></rect>
        )
      })}
    </svg>
  )
}

export default Art
