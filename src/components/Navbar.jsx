import Travel from '../assets/travel.png'
import { AiOutlineSearch } from "react-icons/ai"
function Navbar() {
  return (
    <>
      <div className="bg-sky-900 w-full h-20 flex flex-row">
        <div className="bg-sky-900 h-20 w-96">
          <div className="h-full w-20 bg-black border-4 border-indigo-500/100 mx-auto rounded-full">
            <img className="w-20 mx-auto object-contain  rounded-full" src={Travel} alt="suitcase"     />
          </div>
        </div>
      <div className=" h-20 w-[800px] grid grid-cols-4 grid-rows-1 gap-0 ">
        <div className="bg-red-600 mx-auto h-20 w-[500px] grid grid-cols-4 grid-rows-1 gap-0 ">
          <div className="bg-sky-900 w-48 h-full hover:bg-sky-100">
            <h1 className="align-center text-white fony-sans ml-auto mt-auto p-6 pt-4 font-bold text-xl hover:text-black">Home</h1>
          </div>
          <div className="bg-sky-900 w-48 h-full hover:bg-sky-100">
            <h1 className="align-center text-white fony-sans ml-auto mt-auto p-6 pt-4 font-bold text-xl hover:text-black">Related</h1>
          </div>
          <div className="bg-sky-900 w-48 h-full hover:bg-sky-100">
            <h1 className="align-center text-white fony-sans ml-auto mt-auto p-6 pt-4 font-bold text-xl hover:text-black">Content</h1>
          </div>
          <div className="bg-sky-900 w-48 h-full hover:bg-sky-100">
            <h1 className="align-center text-white fony-sans ml-auto mt-auto p-6 pt-4 font-bold text-xl hover:text-black">About</h1>
          </div>
        </div>
     
    </div>
        <div className="bg-sky-900 h-20 w-[400px]">
          <form className="w-96 relative"action="">
            <input className="w-full p-4 mt-2 rounded-full bg-slate-800" type="text" />
            <button className="absolute right-1 mt-2 top-1/2 -translate-y-1/2 p-4 bg-slate-900 rounded-r-full">
              <AiOutlineSearch/>
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Navbar
