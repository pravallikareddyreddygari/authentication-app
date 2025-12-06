import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

export default function Home() {
  return (
    <div className="flex items-center justify-center font-sans">
      <main className="flex w-full flex-col items-center justify-between">
        <Signup />
        <Login />
      </main>
    </div>
  );
}
