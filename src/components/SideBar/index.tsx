
import Lesson from '../Lesson'
import './SideBarStyle.css'

export default function SideBar() {
  return (
   
      <aside>
        <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'> 
          Cronograma de aulas
        </span>


        <div className='flex flex-col gap-8'>
          <Lesson/>
          <Lesson/>
          <Lesson/>
          <Lesson/>
          <Lesson/>
          <Lesson/>
        </div>
      </aside>
    
  )
}
