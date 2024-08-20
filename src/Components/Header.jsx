import  { useState } from 'react';

const Header = () => {
    const Link = [
        { name: 'Home', link: '/' },
        { name: 'Service', link: '/' },
        { name: 'about', link: '/' },
        { name: 'Contact', link: '/' },
        { name: 'Blogs', link: '/' }
    ]
    const [open, setOpen] = useState(false);
    return (
        <div>
               <div className="">
          <div className=" shadow-md w-full fixed top-0 left-0 z-50 ">
                <div className="md:flex items-center justify-between bg-white md:px-10 px-7 py-4 ">
                    <div className="text-5xl cursor-pointer  "> <span className="text-3xl text-indigo-600"><ion-icon name="logo-ionic"></ion-icon></span> Design</div>

                    <div onClick={() => setOpen(!open)} className="text-3xl top-6 absolute right-8 cursor-pointer md:hidden">
                        <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                    </div>

                    <ul className={` md:flex md:items-center absolute md:static bg-white px-5 py-3 md:z-auto z-[-1] left-0 w-full  md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] '} `}>
                        {
                            Link.map((link) => (
                                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7 ">
                                    <a className="text-gray-800 hover:text-gray-400 duration-500" href={link.link}>{link.name}</a>

                                </li>
                            ))
                        }

                        <button className="bg-indigo-600 text-white py-2 px-6 rounded md:ml-8">Get Started</button>

                    </ul>


                </div>




            </div>

            <div className="bg-indigo-600 w-full ">
                <div className="text-black">



                </div>

            </div>
          </div>
            
        </div>
    );
};

export default Header;