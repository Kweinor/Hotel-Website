import {Menu} from 'lucide-react';
import { FaSun, FaMoon } from "react-icons/fa";
import MobileMenu from './MobileMenu';
import { useState } from 'react';

function MobileNavbar(){
    const [open, setOpen] = useState(false)
return(
    <div className={`fixed top-0 left-0 right-0 z-50  backdrop-blur-lg py-4 flex md:hidden justify-between items-center px-5`}>
      
    {open && <MobileMenu setOpen={setOpen}/>}
          <div>
                  <h1 className={`font-bold arvo-font text-xl `}>tk<span >quaynor</span>.</h1>
          </div>
          <div className='flex justify-between items-center gap-3'>
       
      <button onClick={() => setOpen(true)}>
        <Menu size={26} />
      </button>
      </div>
        </div>
)
}
export default MobileNavbar;