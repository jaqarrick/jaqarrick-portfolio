import React from "react"
import { SlideComponent } from "../../types"
import "./Slide.css"

interface Props {
  currentSlide: SlideComponent
}

const Slide: React.FC<Props> = ({ currentSlide }) => (
  <div className='slide'>
    <div className='text-node'>
      {currentSlide.name !== "home" ? (
        <h1>
          {currentSlide.name.replace(/\b\w/g, c => c.toUpperCase())}{" "}
          {currentSlide.year ? `(${currentSlide.year})` : ""}{" "}
        </h1>
      ) : (
        ""
      )}
      <div>
        {" "}
        {currentSlide.headerDescription}
        <br />
        {currentSlide.bodyDescription ? (
          <div style={{ marginTop: "10px" }}>
            {currentSlide.name === "home" ? (
              <div
                dangerouslySetInnerHTML={{
                  __html: currentSlide.bodyDescription,
                }}
              />
            ) : (
              currentSlide.bodyDescription
            )}
          </div>
        ) : (
          ""
        )}
        {currentSlide.contact ? (
          <div
            className='contact'
            dangerouslySetInnerHTML={{ __html: currentSlide.contact }}
          />
        ) : (
          ""
        )}
        {currentSlide.media ? (
          <div
            className='media-holder'
            dangerouslySetInnerHTML={{ __html: currentSlide.media }}
          />
        ) : (
          ""
        )}
        {currentSlide.pieces
          ? currentSlide.pieces.map((piece, i) => (
              <div key={i}>
                {piece.name ? <h2> {piece.name} </h2> : ""}
                {piece.description}
                {
                  <div
                    className='media-holder'
                    dangerouslySetInnerHTML={{ __html: piece.media }}
                  />
                }
              </div>
            ))
          : ""}
      </div>
    </div>
    {currentSlide.pieces
      ? currentSlide.pieces.map((piece, i) => (
          <div className='media-container' key={i}>
            {piece.images
              ? piece.images.map((image, i) => (
                  <img
                    key={i}
                    width='580px'
                    src={image.src}
                    alt={image.description}></img>
                ))
              : ""}
          </div>
        ))
      : ""}

    {currentSlide.images
      ? currentSlide.images.map((image, i) => (
          <div className='media-container' key={i}>
            <img
              width={image.description === "portrait" ? "300px" : "580px"}
              src={image.src}
              alt={image.description}
            />
          </div>
        ))
      : ""}
  </div>
)

export default Slide
