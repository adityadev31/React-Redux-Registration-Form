import { useSelector } from 'react-redux'
import './topbar.css'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Topbar = () => {

   const { pageNumber } = useSelector((state) => state);

   return (
      <div className="topbar">
         <div className="topbar-banner">
            {pageNumber===1 && <h1>About You</h1>}
            {pageNumber===2 && <h1>Location</h1>}
            {pageNumber===3 && <h1>Skills</h1>}
            {pageNumber===4 && <h1>Done <CheckCircleIcon success sx={{ml: 1, color: "green"}} /></h1>}
         </div>
         <div className="progress">
            <span className={pageNumber>=1 ? 'dot dot1 done' : 'dot dot1'}></span>
            <span className={pageNumber>=2 ? 'dot dot2 done' : 'dot dot2'}></span>
            <span className={pageNumber>=3 ? 'dot dot3 done' : 'dot dot3'}></span>
            <span className={pageNumber>=4 ? 'dot dot4 done' : 'dot dot4'}></span>
         </div>
      </div>
   )
}

export default Topbar
