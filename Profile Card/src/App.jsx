import './App.css'
import Bubble from './Bubble';

function App() {

  return (
    <>
      <div className=" border-black border-4 flex flex-col justify-center items-center">
        <img
          src="https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg"
          alt=""
          width={122}
        />
        <h1 className="text-3xl font-bold">Abhishek Swami</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          deserunt officia nesciunt rem natus quidem tempora enim ipsum,
          praesentium dicta officiis itaque est libero ut? Quos sequi iusto ut
          itaque.
        </p>
      </div>
      <div>
        <Bubble name="HTML+CSS" color="blue" />
      </div>
    </>
  );
}

export default App
