import white from '../assets/white.png'
import P1 from '../assets/BkdProduct (1).png'
import P2 from '../assets/BkdProduct (2).png'
import P3 from '../assets/BkdProduct (3).png'
import P4 from '../assets/BkdProduct (4).png'
function Banner() {
  return (
    <>
      <div className=" bg-white w-full h-[1200px]">
          <div className=" bg-brown-200 w-full h-[750px] relative">
            <div className="bg-gradient-to-r from-red-300 w-full h-[610px] absolute inset-x-0 top-0 ">
              
              <div className=" w-[700px] h-full absolute inset-y-0 right-0">
                    < img className="z-0 size-[590px] absolute  left-0 bottom-0"src={white} alt="" />
              </div>
              <div className="border w-[700px] h-full absolute inset-y-0 left-0">
                  <div className="mt-6">
                    <div className=" h-[585px] w-[500px] relative">
                      <div className=" h-96 w-full absolute inset-x-0 top-0">
                      </div>
                       <div className=" h-64 w-full absolute inset-x-0 top-0">
                          <div className="ml-12 rounded-tl-[78px] bg-gradient-to-b from-red-500 h-64 w-full relative">
                            <div className=" h-56 w-full absolute inset-x-0 top-0">
                              <h1 className="mt-12 text-3xl text-black text-center font-extrabold font-serif">We make the best pastery</h1>
                            </div>
                            <div className=" h-36 w-full absolute inset-x-0 bottom-0">
                              <h1 className="ml-12 text-3xl text-black text-center font-extrabold font-serif">Fresh Everyday</h1>
                            </div>
                            <div className="mt-56  h-36 w-full absolute inset-x-0 -bottom-36">
                               <h1 className="mt-2 text-3xl text-black rounded-xl text-center font-light font-serif">Cheese Cake</h1></div>
                          </div>
                       </div>
                        <div className="ml-12 rounded-br-[78px] bg-gradient-to-t from-red-500 h-64 w-full absolute inset-x-0 bottom-0 ">
                          <div className=" h-64 w-full relative">
                            <div className="h-56 w-full absolute inset-x-0 top-0">
                              <p className="text-sm text-black text-center font-light font-mono">
                                The versatility of Cheese cake allows for endless variations,
                                 from dense, flourless versions to light, airy sponges, making it a perfect treat for any occasion,
                                  be it a birthday celebration, an elegant dinner party,
                                   or a cozy evening at home.</p>
                            </div>
                            <div className="h-36 w-full absolute inset-x-0 bottom-0">
                              <h1 className="ml-64 text-md text-top text-center text-black font-light font-mono">Chef Micheal</h1>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
           <div className="  w-[1190px] h-80 absolute inset-x-20 -bottom-44">
            <div className="w-[1190px] h-full  grid-rows-1 grid-cols-4 gap-10 flex justify-start">
       <div className="mt-12 flex flex-row gap-4">
         <div className="w-64 h-64 rounded-xl ">
          <div className=" w-full h-56 rounded-t-xl">
            <img className="w-full h-full rounded-t-xl"src={P1} alt="" />
            </div>
          <div className=" w-full h-20 rounded-b-xl">
            <h1 className="t  bg-amber-500 shadow-lg shadow-amber-900/90 rounded-b-xl ext-black text-md font-sans font-bold text-center">Brownies</h1>
          </div>
         </div>
        <div className="w-64 h-64 rounded-xl">
          <div className=" w-full h-56 rounded-t-xl">
            <img className="w-full h-full rounded-t-xl"src={P2} alt="" />
            </div>
          <div className=" w-full h-20 rounded-b-xl">
            <h1 className="  bg-amber-500 shadow-lg shadow-amber-900/90 rounded-b-xl text-black text-md font-sans font-bold text-center">Macarons</h1>
          </div>
        </div>
        <div className="w-64 h-64 rounded-xl">
          <div className=" w-full h-56 rounded-t-xl">
            <img className="w-full h-full rounded-t-xl"src={P3} alt="" />
            </div>
          <div className=" w-full h-20 rounded-b-xl">
            <h1 className="  bg-amber-500 shadow-lg shadow-amber-900/90 rounded-b-xl text-black text-md font-sans font-bold text-center">Buns</h1>
          </div>
        </div>
        <div className="w-64 h-64 rounded-xl">
          <div className=" w-full h-56 rounded-t-xl">
            <img className="w-80 h-full rounded-t-xl"src={P4} alt="" />
            </div>
          <div className=" w-full h-20 rounded-b-xl">
            <h1 className="  bg-amber-500 shadow-lg shadow-amber-900/90 rounded-b-xl text-black text-md font-sans font-bold text-center">Cwasons</h1>
          </div>
        </div>
       </div>
        </div>
           </div>
           </div>
      </div>
    </>
  )
}

export default Banner
