import "./App.css";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#344151]  gap-10">
      <h1 className="text-[#0398d4] font-medium text-2xl">Increment && Decrement</h1>

      <div>
        <button>-</button>
        <div></div>
        <button>+</button>
      </div>

      <button>Reset</button>
    </div>
  );
}

export default App;
