import React from "react";
import'../Styles/home.css'
import pic2 from '../assets/image/pic2.webp'
import pic3 from '../assets/image/pic3.webp'
import pic4 from '../assets/image/pic4.webp'
import pic5 from '../assets/image/pic5.webp'
import pic6 from '../assets/image/pic6.webp'
import pic7 from '../assets/image/pic7.webp'
import pic8 from '../assets/image/pic8.webp'
import pic9 from '../assets/image/pic9.webp'
import pic10 from '../assets/image/pic10.webp'
import pic11 from '../assets/image/pic11.webp'
import pic12 from '../assets/image/pic12.webp'
import pic13 from '../assets/image/pic13.webp'
import pic14 from '../assets/image/pic14.webp'
import PIC15 from '../assets/image/PIC15.webp'
import pic16 from '../assets/image/pic16.webp'
import { PiVanLight } from "react-icons/pi";
import { FaWarehouse } from "react-icons/fa";

import { GiCaravan } from "react-icons/gi";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { CiStar } from "react-icons/ci";
import { FaChevronCircleRight } from "react-icons/fa";
function Home(){
    return(
        <>
        <div className="home">
            <div className="one">
                <div className="first">
                    <ul >
                <li><a href="#">Electronics</a></li>
                <li><a href="#">Computer Gadget</a></li>
                <li><a href="#">Fashion</a></li>
                <li><a href="#">Body Lotion</a></li>
                <li><a href="#">Sports</a></li>
                <li><a href="#">Human clothes</a></li>
                <li><a href="#">Choes</a></li>
                <li><a href="#">Watches</a></li>
                </ul>
                </div>
                <div className="second">
                    <h1 className="header">Explore our latest and greatest Electronics</h1>
                    <button className="button">shop now</button>
                </div>
            </div></div>

            <div className="two">
                <h1>popular categories</h1>
                <div className="popular">
                <div className="third">
                     <img src={pic2} alt="pic2"></img>
                     <p>body lotion</p>
                </div>
                <div className="sports">
                     <img src={pic3} alt="pic3"></img>
                     <p>sports</p>
                </div>
                <div className="Computer Gadget">
                     <img src={pic4} alt="pic4"></img>
                     <p>Computer Gadget</p>
                </div>
                <div className="electronics">
                     <img src={pic5} alt="pic5"></img>
                     <p>electronics</p>
                </div>
                <div className="wacth">
                     <img src={pic6} alt="pic6"></img>
                     <p>Watch</p>
                </div>
                <div className="women clothes">
                     <img src={pic7} alt="pic7"></img>
                     <p>Women clothes</p>
                </div>
                </div>
            </div>

            <div className="three">
                <h1>new arrival product</h1>
                <div className="new-arrival">

                    <div className="allin-one">
                    <img src={pic8} alt="pic8"></img>
                    <p>all in one bottle</p>
                    <p>$22.00-$55.00</p>
                    < div className="star">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    </div>
                    </div>

                     <div className="allin-one">
                    <img src={pic9} alt="pic9"></img>
                 
                    <p>Amazon Alexa</p>
                    <p>$22.00-$55.00</p>
                    < div className="star">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    </div>
                    
                     </div>
                 <div className="allin-one">
                    <img src={pic10} alt="pic10"></img>
                    <p>Headset Gamer Legion</p>
                    <p>$22.00-$55.00</p>
                    < div className="star">
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    <CiStar />
                    </div>
                    </div> 
    
                </div>
                
            </div>
            <center>
           
            <button className="buttonb">shop now</button></center>

            <div className="four">
                <h1>our vendor list</h1>
                <div className="vendor">
                    <div className="santa">
                    <img src={pic11} alt="pic11"></img>
                        <p>santa monica's<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>
                    <div className="santa">
                    <img src={pic12} alt="pic12"></img>
                        <p>Josh Doe's<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>
                    <div className="santa">
                    <img src={pic13} alt="pic13"></img>
                        <p>Digital Good's<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>
                </div>
            </div>
            <div className="five">
                
            <div className="santa">
                    <img src={pic14} alt="pic14"></img>
                        <p>Jesca's<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>

                    <div className="santa">
                    <img src={PIC15} alt="PIC15"></img>
                        <p>The Glass<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>
                    <div className="santa">
                    <img src={pic16} alt="pic16"></img>
                        <p>John Doe's<br/>store</p>
                        <FaChevronCircleRight />
                        <p>New York,NY</p>
                    </div>
                     </div>
                     <center>
           
           <button className="buttonb">see all vendors</button></center>
           <div className="six">
            <h1>wht peaple choose us</h1>
            <div className="choose">
                <div className="easy">
                    <p><h3>Easy Return</h3></p>
                    <div><GiCaravan className="ico" /></div>
                    <p>our return policy is simple amd that is why<br/>
                    cunsomers love our shop</p>
                </div>
                <div className="easy">
                    <p><h3>Customer Servise</h3></p>
                    <PiVanLight />

                    <p>our return policy is simple amd that is why<br/>
                    cunsomers love our shop</p>
                </div>
                <div className="easy">
                    <p><h3>High Quality</h3></p>
                    <FaWarehouse />
                    <p>our return policy is simple amd that is why<br/>
                    cunsomers love our shop</p>
                </div>
            </div>
           </div>
           <div className="new-arrival">

<div className="allin-one">
<img src={pic8} alt="pic8"></img>
<p>all in one bottle</p>
<p>$22.00-$55.00</p>
<CiStar />
<CiStar />
<CiStar />
<CiStar /></div>

 <div className="allin-one">
<img src={pic9} alt="pic9"></img>
{/* <button className="button">select option</button> */}
{/* <button className="but">quik view</button> */}
<p>Amazon Alexa</p>
<p>$22.00-$55.00</p>
<CiStar />
<CiStar />
<CiStar />
<CiStar />
 </div>
<div className="allin-one">
<img src={pic10} alt="pic10"></img>
<p>Headset Gamer Legion</p>
<p>$22.00-$55.00</p>
<CiStar />
<CiStar />
<CiStar />
<CiStar />
</div> 

</div>
                
</>            
        
        
    )
}
export default Home


// import React from "react";
// import image from '../assets/image/pic2.webp'
// const Home=() => {
//     const cards=[
//         {
//             image:pic2,
//             cardTitle:"all in one"
//             cardContent:"super product.",
//         },
//         {
//             image:pic2,
//             cardTitle:"all in one"
//             cardContent:"super product.",  
//         },
//     ]
// }
// return(
//     <div>
//     cards.map((cardData) =>(
//             <div>
//                 <img src={cardData.image}/>
//             </div>
//         <div></div>
//     )
//     </div>
// )