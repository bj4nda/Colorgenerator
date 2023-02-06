import React, {useState, useEffect} from "react"
import rgbToHex from "./utils"

const SingleColor = ({rgb, weight, index, hexValue}) => {
  const [alert, setAlert] = useState(false)
  const bcg = rgb.join(",")
  const hexColor = `#${hexValue}`
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return () => clearInterval(timeout)
  }, [alert])
  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{backgroundColor: `rgb(${bcg})`}}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hexColor)
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
