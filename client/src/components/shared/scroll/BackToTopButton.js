import { fontSize } from "@mui/system"
import React from "react"
import {useEffect, useState } from "react"

const BackToTopButton = () =>{
  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])

  const scrollUp = () =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }


  return(
    <div>
      <>
      {backToTopButton && (
        <button style={{
          position:"fixed",
          bottom: "20px",
          right: "20px",
          height:"20px",
          fontSize: "12px"
        }}
      onClick={scrollUp}>
        ^ Back to the top
      </button>
      )}
      </>
    </div>
  )
}

export default BackToTopButton