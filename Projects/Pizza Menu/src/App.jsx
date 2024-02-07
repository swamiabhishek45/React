
// import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import Pizza from './components/Pizza'

function App() {
  
  return (
    <>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col items-center gap-20">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

export default App

// className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col items-center gap-20"
// //container
// className="self-stretch" //header

// // header h1
// className="uppercase text-center text-7xl font-semibold relative w-full block"

// //footer
// className="text-2xl"