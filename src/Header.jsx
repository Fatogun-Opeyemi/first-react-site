const Navbar = () =>{
  
    return(
      <header style={{backgroundColor: 'rgb(55,81,126)'}} className="bg-blue-500 text-slate-200 text-lg">
        <section className="flex gap-32 mx-auto w-5/6 ms-4 justify-between pt-3 pb-3">
          <p className="text-white text-4xl">ARSHA</p>
  
          <ul className="flex flex-row gap-9 text-white items-center">
            <li className="hover:text-blue-300 cursor-pointer">Home</li>
            <li className="hover:text-blue-300 cursor-pointer">About</li>
            <li className="hover:text-blue-300 cursor-pointer">Services</li>
            {/* <li className="hover:text-blue-300 cursor-pointer">Portfolio</li> */}
            {/* <li className="hover:text-blue-300 cursor-pointer">Team</li> */}
            {/* <li className="hover:text-blue-300 cursor-pointer">Pricing</li> */}
            {/* <li className="hover:text-blue-300 cursor-pointer">Dropdown</li> */}
            <li className="hover:text-blue-300 cursor-pointer">Contact</li>
            <li>
              <button style={{backgroundColor: '#47B2E4'}} className="rounded-3xl w-28 h-9">Get Started</button>
            </li>
          </ul>
  
        </section>
      </header>
    )
  }
  
  export default Navbar