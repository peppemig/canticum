import MobileNav from "./components/MobileNav"
import SideNav from "./components/SideNav"
import {IoIosArrowDown} from "react-icons/io"
import { useState } from "react"
import axios from "axios"

const Layout = ({children}) => {

    return (
        <div className='flex flex-col h-[100vh] overflow-hidden'>

        <div className='w-screen flex-1 flex overflow-y-hidden'>

            {/* SIDE NAV */}
            <SideNav/>
            



            {/* CONTENT */}
              <div className='bg-gray-900 flex-1 flex flex-col justify-start overflow-y-auto overflow-x-hidden'>
                
                <div className="fixed h-[65px] gap-2 flex w-full bg-gray-700/30 backdrop-blur-md items-center p-3">
                  <div className="text-white hover:bg-slate-50/30 transition cursor-pointer flex items-center gap-2 font-semibold px-2 py-1 border-[1px] rounded-full">
                    <div className="bg-red-500 flex h-[40px] w-[40px] rounded-full overflow-hidden">
                      <img className="object-cover" src="https://yt3.googleusercontent.com/bBqZBopwEt3yEnwcu3n5qAHFBPe_IUum-OHEy_8FVzyWRPX-vfJiCZ5jwZG1Kj6c8MGzqt7agw=s900-c-k-c0x00ffffff-no-rj"/>
                    </div>
                    <div className="truncate w-[90px] text-sm">Giuseppe Migliozzi</div>
                    <IoIosArrowDown/>
                  </div>
                </div>

                <main>{children}</main>

              
              </div>

            <MobileNav/>
          
        </div>

        {/* PLAYER */}


    </div>
    )
}

export default Layout