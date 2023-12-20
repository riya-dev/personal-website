import Image from 'next/image'
import NavBar from './NavBar'
import Content from './Content'
import BottomNav from './BottomNav'

export default function Home() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Content />
      <BottomNav />
    </div>
  )
}