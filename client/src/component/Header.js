import Button from "../Ui/Button"
import logo from "../resources/brand/MediakitsLogo.png"

const Header = () => {
  return (
    <div className='w-full bg-white'>
        <div className='w-[85%] mx-auto my-6 flex  justify-between'>
            <img  src={logo}/>
            <div>
                {/* Add blogs btn bellow if needed as per figma file */}
                <div></div>
                <div className="flex">
                  
                    <Button text={'Blogs '} style={'mr-32 font-medium text-primary border-none'}/>
                    <Button text={'Login '} style={''}/>
                    <Button text={'Login for free'} style={'ml-5 bg-primary text-white'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header