import Link from "next/link";


const Home=()=> {
  return (
   <section className=" w-full h-screen bg-white gap-4 flex">
    <Link  href={"/Selin"} className=" text-red-600">Selin</Link>
    <Link  href={"/Sezer"} className=" text-red-600">Sezer</Link>
    <Link  href={"/Hasan"} className=" text-red-600">Hesen</Link>
    <Link  href={"/Zahra"} className=" text-red-600">Zahra</Link>
   </section>
   
  )
}
export default Home;
