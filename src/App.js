import logo from './logo.svg';
import React, {useState, useMemo} from "react"

import './App.css';
import { BakeryItem } from './BakeryItem';
function App() {
  const imgURl = "https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg"
  const imgURL2 = "https://static01.nyt.com/images/2021/04/07/dining/06croissantsrex1/merlin_184841898_ccc8fb62-ee41-44e8-9ddf-b95b198b88db-threeByTwoMediumAt2X.jpg"
  const imgURL3 = 'https://www.twopeasandtheirpod.com/wp-content/uploads/2019/02/Chocolate-Chip-Scones-3.jpg'
  const imgURL4 = "https://www.girlversusdough.com/wp-content/uploads/2022/05/chocolate-chip-banana-muffins-3.jpg"
  const imgURL5 = "https://sallysbakingaddiction.com/wp-content/uploads/2014/07/blueberry-scones-with-icing.jpg"
  const imgURL6 = "https://bakingmischief.com/wp-content/uploads/2018/02/chocolate-banana-muffins-image-square.jpg"
  const imgURL7 = "https://www.tastesoflizzyt.com/wp-content/uploads/2022/06/cinnamonrolls-8.jpg"
  const imgURl8 = "https://handletheheat.com/wp-content/uploads/2021/08/best-easy-banana-muffins.jpg"
  const imgURL9 = "https://www.wilton.com/dw/image/v2/AAWA_PRD/on/demandware.static/-/Sites-wilton-project-master/default/dw14412d54/images/project/WLPROJ-9442/WLPROJ-9442_2.jpg?sw=800&sh=800"
 
//   function BakeryItem({ handleClick }) {
   
//  }
  
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)


  function handleClick(props) {
    console.log("HI: " + props.pastryName)
    setCartItems([...cartItems, props.pastryName])
    setTotalPrice(totalPrice + props.price)
  }

   const cartList = useMemo(
    () =>
      cartItems.map((item) => (
        <li>{item}</li>
      )),
    [cartItems]
  )


  return (
    <div className="App">
      <h1>Katherine's Bakery</h1>
      <div className="cartList">
        {/* {cartItems} */}
        <ul>
          {cartList}
        </ul>
      </div>
      <div>
       <p><b> Total Price: ${totalPrice}</b></p>
      </div>
      <div className="bakeryItemList">
        <BakeryItem url={imgURL2} pastryName={"Chocolate Croissant"} pastryDescription={"Flakey and Buttery"} price={5} inCart={false}  handleClick={handleClick} ></BakeryItem>
        <BakeryItem url={imgURl} pastryName={"Chocolate Chip Cookies"} pastryDescription={"Fresh and Gooey"} price={1.5} inCart={false} handleClick={handleClick}></BakeryItem>
        <BakeryItem url={imgURL3} pastryName={"Chocolate Chip Scone"} pastryDescription={"Buttery and Delicious"} price={3.5} inCart={false}  handleClick={handleClick}></BakeryItem>
        <BakeryItem url={imgURL4} pastryName={"Chocolate Chip Muffin"} pastryDescription={"Fresh and Gooey"} price={3.5} inCart={false}  handleClick={handleClick}></BakeryItem>
        <BakeryItem url={imgURL5} pastryName={"Blueberry Scone"} pastryDescription={"Fresh and Gooey"} price={5.5} inCart={false}  handleClick={handleClick}></BakeryItem>
        <BakeryItem url={imgURL6} pastryName={"Double Chocolate Muffins"} pastryDescription={"Fresh and Gooey"} price={3.5} inCart={false}  handleClick={handleClick}></BakeryItem>
        <BakeryItem url={imgURL7} pastryName={"Cinnamon Roll"} pastryDescription={"Fresh and Gooey"} price={4} inCart={false} handleClick={handleClick} ></BakeryItem>
        <BakeryItem url={imgURl8} pastryName={"Banana Muffin"} pastryDescription={"Fresh and Gooey"} price={3} inCart={false} handleClick={handleClick} ></BakeryItem>
        <BakeryItem url={imgURL9} pastryName={"Donut"} pastryDescription={"Warm and Doughy"} price={3}  inCart={false}  handleClick={handleClick}></BakeryItem>

      </div>
    </div>
  );
}

export default App;
