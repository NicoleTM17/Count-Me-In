
import './styles/App.scss';


import Details from './components/Details.jsx';
// import Form from './components/Form.jsx';


function App() {


  return (
    <div className='container'>
      <div id='banner'>
        <h1>Count me in</h1>
        <h3>Celebrate <em>every</em> moment.</h3>
        <div className='banner-btn'>Get started now</div>
        <p>See how it works</p>
      </div>
      <Details/>
      {/* <Form/> */}
    </div>
  )
}

export default App;
