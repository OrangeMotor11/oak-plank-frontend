import HomeImg from '../static/imgs/home-img.png'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <div className='grid w-screen justify-items-center items-center sm:grid-cols-1 lg:grid-cols-2'>
        <div className='col-start-1'>
            <h1 className='text-9xl mb-5 text-primary'>OAK PLANK</h1>
            <h2 className='text-4xl mb-5 text-secondary'>ALL THE ELEGANCE A CLICK AWAY</h2>
            <Link to={ '/Menu' }>
              <button className='h-12 w-24 bg-accentSuccess text-baseWhite shadow-lg hover:bg-accentSuccessBrighter'>
                ORDER NOW
              </button>
            </Link>
        </div>
        <img className='h-screen w-screen' src={ HomeImg }/>
    </div>
    </>
  )
}

export default Home