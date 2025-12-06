import Signup from "./signup/page";
import { getUserLoggedInStatus } from "./data/users";

export default function Home() {
  if (!getUserLoggedInStatus()) return <Signup />;

  return (
    <div className="flex-col flex items-center justify-center">Home page</div>
  );
}
