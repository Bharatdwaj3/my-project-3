import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
function Footer() {
  return (
    <>
    <div className="bg-gradient-to-t from-orange-700 to-black w-full h-[500px] relative">
        <div className=" w-[1200px] h-24 absolute inset-x-0 top-0 ml-20  border-white"></div>
         <div className=" w-[1200px] h-80 absolute inset-20  border-white">
              <div className=" h-full grid grid-flow-col grid-rows-1 grid-cols-6 gap-0">

        <div className="  col-span-2">
          <div className=" h-48 relative">
          <div className=" w-full h-12">
              <h1 className="text-white font-extrabold text-left text-xl font-sans">Company Inc.</h1>
            </div>
            <div className=" h-36 w-full absolute bottom-0 left-0">
              <ul className="space-y-2 text-xs text-white font-thin font-serif">
                <div className="flex justify-start">
                  <InstagramIcon fontSize="large"/>
                  <TwitterIcon fontSize="large"/>
                  <FacebookIcon fontSize="large"/>
                </div>
                <li className="text-xl">Phone : 91+ 98753-04467</li>
                <li className="text-xl">Email : WonderLustTravel@Gmail.com</li>
              </ul>
            </div>
            </div>
          </div>

        <div className=" h-48 relative">
          <div className=" w-full h-12">
            <h1 className="text-white font-extrabold text-left text-xl font-sans">About_US</h1>
          </div>
          <div className=" h-36 w-full absolute bottom-0 left-0">
            <ul className="space-y-2 text-xs text-white font-thin font-serif">
              <li>Serices</li>
              <li>Packages</li>
              <li>Support</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>

        <div className=" h-48 relative">
          <div className=" w-full h-12">
            <h1 className="text-white font-extrabold text-left text-xl font-sans">Carrer</h1>
          </div>
          <div className=" h-36 w-full absolute bottom-0 left-0">
            <ul className="space-y-2 text-xs text-white font-thin font-serif">
              <li>Legal</li>
              <li>Suppliers</li>
              <li>Partners</li>
              <li>Team</li>
            </ul>
          </div>
        </div>

      <div className=" h-48 relative">
          <div className=" w-full h-12">
            <h1 className="text-white font-extrabold text-left text-xl font-sans">Adventures</h1>
          </div>
          <div className=" h-36 w-full absolute bottom-0 left-0">
            <ul className="space-y-2 text-xs text-white font-thin font-serif">
              <li>Religious</li>
              <li>Shared Experiences</li>
              <li>HIstorical</li>
              <li>Geographical</li>
            </ul>
          </div>
        </div>

        <div className=" h-48 relative">
          <div className=" w-full h-12">
            <h1 className="text-white font-extrabold text-left text-xl font-sans">Others</h1>
          </div>
          <div className=" h-36 w-full absolute bottom-0 left-0">
            <ul className="space-y-2 text-xs text-white font-thin font-serif">
              <li>Partners</li>
              <li>Culture</li>
              <li>Cuisine</li>
              <li>Community</li>
            </ul>
          </div>
        </div>

</div>
         </div>
         <div className=" w-[1200px] h-24 absolute inset-x-0 bottom-0 ml-20 border-t border-white"></div>

    </div>
    </>
  )
}

export default Footer
