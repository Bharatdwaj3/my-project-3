import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import HomeIcon from '@mui/icons-material/Home';
//import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Button from '@mui/material/Button';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ReviewsIcon from '@mui/icons-material/Reviews';
import VisibilityIcon from '@mui/icons-material/Visibility';

import brda from '../assets/bread (1).png' 
import brdb from '../assets/bread (2).png' 
import brdc from '../assets/bread (3).png' 


import psta from '../assets/pastery (1).png' 
import pstb from '../assets/pastery (2).png' 
import pstc from '../assets/pastery (3).png' 

import  Cfem from '../assets/Drink (1).png'
import  Cfen from '../assets/Drink (2).png'
import  Cfeo from '../assets/Drink (3).png'


function ProductCard() {
  return (
      <>  
     <div className="bg-gradient-to-b from-red-700 via-slate-400 to-orange-300 w-full h-[2000px] ">
           <div className="bg-gradient-to-b from-red-700 via-slate-400 to-orange-300  w-full h-[2000px] grid grid-rows-3 grid-cols-3 gap-0 justify-between ml-12">
            <div className="bg-blue-700 mt-36 h-[460px]  w-72 ...">
              <div className="bg-yellow-400 w-96 h-full flex flex-col">
                <div className="bg-red-950 h-36 w-full ">
                  <div className="bg-teal h-full w-full relative">
                    <img className="w-[300px] h-[300px] absolute inset-x-0 -top-36"src={psta}/>
                    <div className="bg-blue-900 absolute  top-0 right-0"></div>
                  </div>
                </div>
                <div className="bg-white h-96 w-96 ">
                  <div className=" h-32 w-full">
                    <div className=" w-full h-1/3">
                       <h1 className="text-4xl text-black font-serif text-center">Donut </h1>
                    </div>
                    <div className=" w-full h-2/3">
                      <p className="font-sans font-bold text-justfify text-black ml-2 text-sm">glazed donut is a classic, sweet treat featuring a soft,
                         fluffy doughnut coated in a shiny, sugary glaze. 
                         This simple yet delicious confection is known for its light texture and irresistible sweetness.
                      </p>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full">
                    <div className="w-full h-1/3">
                    </div>
                    <div className="w-full h-2/3 relative">
                        <div className=" w-1/2 h-full absolute left-0">
                          <h1 className="text-xl text-black font-serif mt-2 text-center"><VisibilityIcon sx={{ fontSize: 40 }} />10,000 </h1>
                        </div>
                        <div className=" w-1/2 h-full absolute right-0">
                            <button className="ml-12 align-center justify-center mt-2 ">
                              <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < FavoriteBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < ReviewsIcon  sx={{ fontSize: 40 }}/>

                            </button>
                        </div>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full relative ">
                    <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 left-0 "><Button variant="contained" endIcon={<HomeIcon />}>Takeout</Button></button>
                     <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 right-0"><Button variant="contained" endIcon={<RestaurantMenuIcon />}>Eatout</Button></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 mt-36 h-[460px]  w-72 ...">
              <div className="bg-yellow-400 w-96 h-full flex flex-col">
                <div className="bg-red-950 h-36 w-full ">
                  <div className="bg-teal h-full w-full relative">
                    <img className="w-[300px] h-[300px] absolute inset-x-0 -top-36"src={pstc}/>
                    <div className="bg-blue-900 absolute  top-0 right-0"></div>
                  </div>
                </div>
                <div className="bg-white h-96 w-96 ">
                  <div className=" h-32 w-full">
                    <div className=" w-full h-1/3">
                       <h1 className="text-4xl text-black font-serif text-center">Donut </h1>
                    </div>
                    <div className=" w-full h-2/3">
                      <p className="font-sans font-bold text-justfify text-black ml-2 text-sm">glazed donut is a classic, sweet treat featuring a soft,
                         fluffy doughnut coated in a shiny, sugary glaze. 
                         This simple yet delicious confection is known for its light texture and irresistible sweetness.
                      </p>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full">
                    <div className="w-full h-1/3">
                    </div>
                    <div className="w-full h-2/3 relative">
                        <div className=" w-1/2 h-full absolute left-0">
                          <h1 className="text-xl text-black font-serif mt-2 text-center"><VisibilityIcon sx={{ fontSize: 40 }} />10,000 </h1>
                        </div>
                        <div className=" w-1/2 h-full absolute right-0">
                            <button className="ml-12 align-center justify-center mt-2 ">
                              <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < FavoriteBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < ReviewsIcon  sx={{ fontSize: 40 }}/>

                            </button>
                        </div>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full relative ">
                    <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 left-0 "><Button variant="contained" endIcon={<HomeIcon />}>Takeout</Button></button>
                     <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 right-0"><Button variant="contained" endIcon={<RestaurantMenuIcon />}>Eatout</Button></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 mt-36 h-[460px]  w-72 ...">
              <div className="bg-yellow-400 w-96 h-full flex flex-col">
                <div className="bg-red-950 h-36 w-full ">
                  <div className="bg-teal h-full w-full relative">
                    <img className="w-[300px] h-[300px] absolute inset-x-0 -top-36"src={pstb}/>
                    <div className="bg-blue-900 absolute  top-0 right-0"></div>
                  </div>
                </div>
                <div className="bg-white h-96 w-96 ">
                  <div className=" h-32 w-full">
                    <div className=" w-full h-1/3">
                       <h1 className="text-4xl text-black font-serif text-center">Donut </h1>
                    </div>
                    <div className=" w-full h-2/3">
                      <p className="font-sans font-bold text-justfify text-black ml-2 text-sm">glazed donut is a classic, sweet treat featuring a soft,
                         fluffy doughnut coated in a shiny, sugary glaze. 
                         This simple yet delicious confection is known for its light texture and irresistible sweetness.
                      </p>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full">
                    <div className="w-full h-1/3">
                    </div>
                    <div className="w-full h-2/3 relative">
                        <div className=" w-1/2 h-full absolute left-0">
                          <h1 className="text-xl text-black font-serif mt-2 text-center"><VisibilityIcon sx={{ fontSize: 40 }} />10,000 </h1>
                        </div>
                        <div className=" w-1/2 h-full absolute right-0">
                            <button className="ml-12 align-center justify-center mt-2 ">
                              <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < FavoriteBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < ReviewsIcon  sx={{ fontSize: 40 }}/>

                            </button>
                        </div>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full relative ">
                    <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 left-0 "><Button variant="contained" endIcon={<HomeIcon />}>Takeout</Button></button>
                     <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 right-0"><Button variant="contained" endIcon={<RestaurantMenuIcon />}>Eatout</Button></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 mt-36 h-[460px]  w-72 ...">
              <div className="bg-yellow-400 w-96 h-full flex flex-col">
                <div className="bg-pink-800 h-36 w-full ">
                  <div className="bg-teal h-full w-full relative">
                    <img className="w-[300px] h-[300px] absolute inset-x-0 -top-36"src={Cfem}/>
                    <div className="bg-blue-900 absolute  top-0 right-0"></div>
                  </div>
                </div>
                <div className="bg-white h-96 w-96 ">
                  <div className=" h-32 w-full">
                    <div className=" w-full h-1/3">
                       <h1 className="text-4xl text-black font-serif text-center">Donut </h1>
                    </div>
                    <div className=" w-full h-2/3">
                      <p className="font-sans font-bold text-justfify text-black ml-2 text-sm">glazed donut is a classic, sweet treat featuring a soft,
                         fluffy doughnut coated in a shiny, sugary glaze. 
                         This simple yet delicious confection is known for its light texture and irresistible sweetness.
                      </p>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full">
                    <div className="w-full h-1/3">
                    </div>
                    <div className="w-full h-2/3 relative">
                        <div className=" w-1/2 h-full absolute left-0">
                          <h1 className="text-xl text-black font-serif mt-2 text-center"><VisibilityIcon sx={{ fontSize: 40 }} />10,000 </h1>
                        </div>
                        <div className=" w-1/2 h-full absolute right-0">
                            <button className="ml-12 align-center justify-center mt-2 ">
                              <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < FavoriteBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < ReviewsIcon  sx={{ fontSize: 40 }}/>

                            </button>
                        </div>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full relative ">
                    <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 left-0 "><Button variant="contained" endIcon={<HomeIcon />}>Takeout</Button></button>
                     <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 right-0"><Button variant="contained" endIcon={<RestaurantMenuIcon />}>Eatout</Button></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 mt-36 h-[460px]  w-72 ...">
              <div className="bg-yellow-400 w-96 h-full flex flex-col">
                <div className="bg-pink-800 h-36 w-full ">
                  <div className="bg-teal h-full w-full relative">
                    <img className="w-[300px] h-[300px] absolute inset-x-0 -top-36"src={Cfen}/>
                    <div className="bg-blue-900 absolute  top-0 right-0"></div>
                  </div>
                </div>
                <div className="bg-white h-96 w-96 ">
                  <div className=" h-32 w-full">
                    <div className=" w-full h-1/3">
                       <h1 className="text-4xl text-black font-serif text-center">Donut </h1>
                    </div>
                    <div className=" w-full h-2/3">
                      <p className="font-sans font-bold text-justfify text-black ml-2 text-sm">glazed donut is a classic, sweet treat featuring a soft,
                         fluffy doughnut coated in a shiny, sugary glaze. 
                         This simple yet delicious confection is known for its light texture and irresistible sweetness.
                      </p>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full">
                    <div className="w-full h-1/3">
                    </div>
                    <div className="w-full h-2/3 relative">
                        <div className=" w-1/2 h-full absolute left-0">
                          <h1 className="text-xl text-black font-serif mt-2 text-center"><VisibilityIcon sx={{ fontSize: 40 }} />10,000 </h1>
                        </div>
                        <div className=" w-1/2 h-full absolute right-0">
                            <button className="ml-12 align-center justify-center mt-2 ">
                              <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < FavoriteBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < ReviewsIcon  sx={{ fontSize: 40 }}/>

                            </button>
                        </div>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full relative ">
                    <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 left-0 "><Button variant="contained" endIcon={<HomeIcon />}>Takeout</Button></button>
                     <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 right-0"><Button variant="contained" endIcon={<RestaurantMenuIcon />}>Eatout</Button></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 mt-36 h-[460px]  w-72 ...">
              <div className="bg-yellow-400 w-96 h-full flex flex-col">
                <div className="bg-pink-800 h-36 w-full ">
                  <div className="bg-teal h-full w-full relative">
                    <img className="w-[300px] h-[300px] absolute inset-x-0 -top-36"src={Cfeo}/>
                    <div className="bg-blue-900 absolute  top-0 right-0"></div>
                  </div>
                </div>
                <div className="bg-white h-96 w-96 ">
                  <div className=" h-32 w-full">
                    <div className=" w-full h-1/3">
                       <h1 className="text-4xl text-black font-serif text-center">Donut </h1>
                    </div>
                    <div className=" w-full h-2/3">
                      <p className="font-sans font-bold text-justfify text-black ml-2 text-sm">glazed donut is a classic, sweet treat featuring a soft,
                         fluffy doughnut coated in a shiny, sugary glaze. 
                         This simple yet delicious confection is known for its light texture and irresistible sweetness.
                      </p>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full">
                    <div className="w-full h-1/3">
                    </div>
                    <div className="w-full h-2/3 relative">
                        <div className=" w-1/2 h-full absolute left-0">
                          <h1 className="text-xl text-black font-serif mt-2 text-center"><VisibilityIcon sx={{ fontSize: 40 }} />10,000 </h1>
                        </div>
                        <div className=" w-1/2 h-full absolute right-0">
                            <button className="ml-12 align-center justify-center mt-2 ">
                              <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < FavoriteBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < ReviewsIcon  sx={{ fontSize: 40 }}/>

                            </button>
                        </div>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full relative ">
                    <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 left-0 "><Button variant="contained" endIcon={<HomeIcon />}>Takeout</Button></button>
                     <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 right-0"><Button variant="contained" endIcon={<RestaurantMenuIcon />}>Eatout</Button></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 mt-36 h-[460px]  w-72 ...">
              <div className="bg-yellow-400 w-96 h-full flex flex-col">
                <div className="bg-amber-900 h-36 w-full ">
                  <div className="bg-teal h-full w-full relative">
                    <img className="w-[300px] h-[300px] absolute inset-x-0 -top-36"src={brdb}/>
                    <div className="bg-blue-900 absolute  top-0 right-0"></div>
                  </div>
                </div>
                <div className="bg-white h-96 w-96 ">
                  <div className=" h-32 w-full">
                    <div className=" w-full h-1/3">
                       <h1 className="text-4xl text-black font-serif text-center">Donut </h1>
                    </div>
                    <div className=" w-full h-2/3">
                      <p className="font-sans font-bold text-justfify text-black ml-2 text-sm">glazed donut is a classic, sweet treat featuring a soft,
                         fluffy doughnut coated in a shiny, sugary glaze. 
                         This simple yet delicious confection is known for its light texture and irresistible sweetness.
                      </p>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full">
                    <div className="w-full h-1/3">
                    </div>
                    <div className="w-full h-2/3 relative">
                        <div className=" w-1/2 h-full absolute left-0">
                          <h1 className="text-xl text-black font-serif mt-2 text-center"><VisibilityIcon sx={{ fontSize: 40 }} />10,000 </h1>
                        </div>
                        <div className=" w-1/2 h-full absolute right-0">
                            <button className="ml-12 align-center justify-center mt-2 ">
                              <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < FavoriteBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < ReviewsIcon  sx={{ fontSize: 40 }}/>

                            </button>
                        </div>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full relative ">
                    <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 left-0 "><Button variant="contained" endIcon={<HomeIcon />}>Takeout</Button></button>
                     <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 right-0"><Button variant="contained" endIcon={<RestaurantMenuIcon />}>Eatout</Button></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 mt-36 h-[460px]  w-72 ...">
              <div className="bg-yellow-400 w-96 h-full flex flex-col">
                <div className="bg-amber-900 h-36 w-full ">
                  <div className="bg-teal h-full w-full relative">
                    <img className="w-[300px] h-[300px] absolute inset-x-0 -top-36"src={brda}/>
                    <div className="bg-blue-900 absolute  top-0 right-0"></div>
                  </div>
                </div>
                <div className="bg-white h-96 w-96 ">
                  <div className=" h-32 w-full">
                    <div className=" w-full h-1/3">
                       <h1 className="text-4xl text-black font-serif text-center">Donut </h1>
                    </div>
                    <div className=" w-full h-2/3">
                      <p className="font-sans font-bold text-justfify text-black ml-2 text-sm">glazed donut is a classic, sweet treat featuring a soft,
                         fluffy doughnut coated in a shiny, sugary glaze. 
                         This simple yet delicious confection is known for its light texture and irresistible sweetness.
                      </p>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full">
                    <div className="w-full h-1/3">
                    </div>
                    <div className="w-full h-2/3 relative">
                        <div className=" w-1/2 h-full absolute left-0">
                          <h1 className="text-xl text-black font-serif mt-2 text-center"><VisibilityIcon sx={{ fontSize: 40 }} />10,000 </h1>
                        </div>
                        <div className=" w-1/2 h-full absolute right-0">
                            <button className="ml-12 align-center justify-center mt-2 ">
                              <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < FavoriteBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < ReviewsIcon  sx={{ fontSize: 40 }}/>

                            </button>
                        </div>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full relative ">
                    <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 left-0 "><Button variant="contained" endIcon={<HomeIcon />}>Takeout</Button></button>
                     <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 right-0"><Button variant="contained" endIcon={<RestaurantMenuIcon />}>Eatout</Button></button>
                  </div>
                </div>
              </div>
            </div><div className="bg-blue-700 mt-36 h-[460px]  w-72 ...">
              <div className="bg-yellow-400 w-96 h-full flex flex-col">
                <div className="bg-amber-900 h-36 w-full ">
                  <div className="bg-teal h-full w-full relative">
                    <img className="w-[300px] h-[300px] absolute inset-x-0 -top-36"src={brdc}/>
                    <div className="bg-blue-900 absolute  top-0 right-0"></div>
                  </div>
                </div>
                <div className="bg-white h-96 w-96 ">
                  <div className=" h-32 w-full">
                    <div className=" w-full h-1/3">
                       <h1 className="text-4xl text-black font-serif text-center">Donut </h1>
                    </div>
                    <div className=" w-full h-2/3">
                      <p className="font-sans font-bold text-justfify text-black ml-2 text-sm">glazed donut is a classic, sweet treat featuring a soft,
                         fluffy doughnut coated in a shiny, sugary glaze. 
                         This simple yet delicious confection is known for its light texture and irresistible sweetness.
                      </p>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full">
                    <div className="w-full h-1/3">
                    </div>
                    <div className="w-full h-2/3 relative">
                        <div className=" w-1/2 h-full absolute left-0">
                          <h1 className="text-xl text-black font-serif mt-2 text-center"><VisibilityIcon sx={{ fontSize: 40 }} />10,000 </h1>
                        </div>
                        <div className=" w-1/2 h-full absolute right-0">
                            <button className="ml-12 align-center justify-center mt-2 ">
                              <BookmarkBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < FavoriteBorderRoundedIcon sx={{ fontSize: 40 }}/>
                              < ReviewsIcon  sx={{ fontSize: 40 }}/>

                            </button>
                        </div>
                    </div>
                  </div>
                  <div className=" h-1/3 w-full relative ">
                    <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 left-0 "><Button variant="contained" endIcon={<HomeIcon />}>Takeout</Button></button>
                     <button className="mt-8 absolute text-black w-32 h-12 inset-y-0 right-0"><Button variant="contained" endIcon={<RestaurantMenuIcon />}>Eatout</Button></button>
                  </div>
                </div>
              </div>
            </div>
          

          </div>
        </div>
    </>
  )
}

export default ProductCard
