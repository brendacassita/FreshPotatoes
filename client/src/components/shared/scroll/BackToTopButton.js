import { fontSize } from "@mui/system"
import React from "react"
import {useEffect,useState} from "react"
import '../../CssFIles/Other.css'
import "../../../../src/App.css";
import {useTranslation} from 'react-i18next'
import i18next from 'i18next'


const BackToTopButton = () =>{
  const [backToTopButton, setBackToTopButton] = useState(false)
  const {i18n, t} = useTranslation(["common"])


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
        <button className="backToTopButton" style={{
          position:"fixed",
          bottom: "20px",
          right: "20px",
          height:"20px",
          fontSize: "12px"
        }}
      onClick={scrollUp}>
        ^ {t("common:back2top")}
      </button>
      )}
      </>
    </div>
  )
}

export default BackToTopButton
