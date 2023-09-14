import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-600 text-purple-700 p-2 rounded-lg mb-4">
        Tailwind Test
      </h1>
      <Card username="User 1" btnText="click me" />
      <Card username="User 2" />
    </>
  );
}

export default App;
