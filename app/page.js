import Image from 'next/image'
import SideBar from './SideBar'

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
    </div>

    // <p className="text-center text-green-500 font-bold">
    //   Hi Mom!
    // </p>

    // <h1 className="text-3xl font-bold underline">
    //   Hello world!
    // </h1>
  )
}