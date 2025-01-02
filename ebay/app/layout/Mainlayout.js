"use client"

import Footer from "./includes/Footer"
import MainMenu from "./includes/MainMenu"
import SubMenu from "./includes/SubMenu"
import TopMenu from "./includes/TopMenu"

export default function Mainlayout({children}) {
  return (
    <>
     <div id="mainlayout" className="min-w-[1050px] max-w-[1300] mx-auto">
        <TopMenu />
        <MainMenu />
        <SubMenu />
        {children}
        <Footer />
     </div>
    </>
   
  )
}
