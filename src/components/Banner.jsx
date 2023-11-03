import { HashLink as Link } from "react-router-hash-link";

function Banner(){

  function handleClick(){
    window.location.href = '/form';
  }

  return(
    <div id='banner'>
        <img className="logo" src="./images/logo.png" alt="logo" />
        <h3>Celebrate <em>every</em> moment.</h3>
        <div onClick={handleClick} className='banner-btn'>Get started now</div>
        <Link to='#details' smooth style={{textDecoration: 'none', color: 'white'}}><p>See how it works</p></Link>
    </div>
  )

}


export default Banner;
