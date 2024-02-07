import './App.css'
import Bubble from './Bubble';

function App() {

  return (
    <>
      <div className=" p-2 w-80 border-black border-4 flex flex-col justify-center items-center">
        <img
          src="https://img.freepik.com/premium-photo/cute-handsome-anime-boy-blue-light_675932-435.jpg"
          alt=""
          width={122}
          className='bg-cover bg-center rounded-full mb-8 shadow-lg m-3
          '
        />
        <h1 className="text-3xl font-bold">Abhishek Swami</h1>
        <p className='text-left'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          deserunt officia nesciunt rem natus quidem tempora enim ipsum,
          praesentium dicta officiis itaque est libero ut? Quos sequi iusto ut
          itaque.
        </p>
      <div className='flex gap-2 flex-wrap justify-start'>
        <Bubble name="HTML+CSS" color="orange" />
        <Bubble name="JavaScript" color="yellow" />
        <Bubble name="Web Design" color="lightgreen" />
        <Bubble name="Git and GitHub" color="red" />
        <Bubble name="React" color="lightblue" />
        <Bubble name="Tailwind CSS" color="blue" />
      </div>
      </div>
    </>
  );
}

export default App
