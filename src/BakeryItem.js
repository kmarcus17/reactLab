
import React, {useState} from "react"
import './BakeryItem.css'
import Button from '@mui/material/Button';
// import AddCircle from '@mui/icons-material';
import AddCircle from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';


export const BakeryItem = (props) => {
  const handleClick = () => {
    console.log("HI")
    if (!inCart) {
      setButtonText("Remove From Cart")
      setButtonIcon(<DeleteIcon/>)
    } else  {
      setButtonText("Add To Cart")
      setButtonIcon(<AddCircle/>)

    }
    setInCart(!inCart)
  }
  const [inCart, setInCart] = useState(false)
  const [buttonText, setButtonText] = useState("Add To Cart")
  const [buttonIcon, setButtonIcon] = useState(<AddCircle/>)
  
  return (
    <div className="bakeryItem">
      <div className="bakeryTop">
        <img src={props.url}  />
      <div className="pastryInfo">
        <p><b>{props.pastryName}</b></p>
        <p>{props.pastryDescription}</p>
      </div>
      </div>
     
      <div className="priceAndCart">
        <p>${props.price}</p>
      <Button onClick={() => props.handleClick(props)} size="small" style={{  backgroundColor: "#f426df",fontSize: 10, fontWeight: "bold" }} variant="contained" endIcon={buttonIcon}>
        {buttonText}
        </Button>      </div>
    </div>
  )
}