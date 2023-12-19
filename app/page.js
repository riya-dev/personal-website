import Image from 'next/image'
import SideBar from './SideBar'
import Content from './Content'

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      {/* <div class="overlay"> */}
        <Content />
      {/* </div> */}
    </div>
  )
}