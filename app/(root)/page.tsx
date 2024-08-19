import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Home = () => {
  return (
    <div>
     <p>Home</p>
     <UserButton afterSignOutUrl="/" />
    </div>
  );
} 

export default Home;