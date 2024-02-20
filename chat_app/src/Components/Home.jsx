import Menu from "./Menu"
import Navbar from "./Navbar"
import Chat from "./Chat"









export default function Home() {
    return (
        <>
            <div className="">
                <div className="flex">
                <Menu />
                <Navbar/>
                </div>
                <Chat/>
               
            </div>
        </>
    )
}