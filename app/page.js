import Image from 'next/image'
import SideBar from './SideBar'
import Content from './Content'
import BottomNav from './BottomNav'

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <Content />
      <BottomNav />
    </div>
  )
}