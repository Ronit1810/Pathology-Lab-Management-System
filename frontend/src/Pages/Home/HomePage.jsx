import { Button } from '@/Components/ui/button'
import HeroImg from '@/assets/HeroImg.png'

function HomePage() {
  return (
    <div className=' min-h-[90vh] flex items-center gap-6'>
        <div>
            <img className=' p-14' src={HeroImg} alt='image' />
        </div>
        <div className=' w-6/12'>
            <h1 className=' text-5xl font-bold'><span className=' text-[#102C57]'>Pathology Lab</span> Management System</h1>
            <p className=' text-gray-500 pt-5 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button>Start Now</Button>
        </div>
    </div>
  )
}

export default HomePage