import { HashLink as Link } from "react-router-hash-link";

function Banner(){



  return(
    <div id='banner'>
        <img className="logo" src="./images/logo.png" alt="logo" />
        <h3>Celebrate <em>every</em> moment.</h3>
        <Link to='/form' style={{textDecoration: 'none', color: 'black'}}><div className='banner-btn'>Get started now</div></Link>
        <Link to='#details' smooth style={{textDecoration: 'none', color: 'white'}}><p>See how it works</p></Link>
    </div>
  )

}


export default Banner;
