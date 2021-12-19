import { useSelector } from 'react-redux'
import pic1 from '../../assets/pic1.png'
import pic2 from '../../assets/pic2.png'
import pic3 from '../../assets/pic3.jpg'
import pic4 from '../../assets/pic4.jpg'
import './imgSec.css'

const ImgSec = () => {

   const { pageNumber } = useSelector((state) => state);

   return (
      <div className="imgSec">
         {pageNumber===1 && <img src={ pic1 } alt="alt" />}
         {pageNumber===2 && <img src={ pic2 } alt="alt" />}
         {pageNumber===3 && <img src={ pic3 } alt="alt" />}
         {pageNumber===4 && <img src={ pic4 } alt="alt" />}
         <div className="imgSec-overlay">
            <div className="imgSec-textBox">
               <h3>Become a seller at</h3>
               <h1>GenieGig</h1>
            </div>
         </div>
      </div>
   )
}

export default ImgSec
