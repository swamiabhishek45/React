import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly">
        <Card
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UCivYGhLhvUX57pLBj0vgWw-ERzCQ7Rusw&usqp=CAU"
          }
          title="Shoes"
          des="This is shoes card"
        />
        <Card title="Watch" des="This is watch card" />
        <Card title="Electronic" des="This is Electronic card" />
      </div>
      <Footer />
    </>
  );
}

export default App
