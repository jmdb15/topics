import Image from "next/image";
import Hello from "./components/hello";

export default function Home() {
  console.log('What am I doing here? -- Server');
  
  return (
    <>
      <h1 className="w-full m-auto border-2 border-red-400 text-center">Hello World</h1>
      <Hello />
    </>
  );
}
