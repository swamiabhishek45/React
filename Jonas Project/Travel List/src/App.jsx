export default function App() {
  return <>
  <Logo />
  <Form />
  <PackingList />
  <Stats />
  </>;
}

function Logo() {
  return <h1>🌴 Far Away🎒</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip?</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list">LIST</div>
}

function Stats() {
  return <footer className="stats">you have X items on ypur list, and you already packed X (X%)</footer>
}
