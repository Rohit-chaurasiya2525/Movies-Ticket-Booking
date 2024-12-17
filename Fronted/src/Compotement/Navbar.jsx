import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-300 lg:px-48">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl"><p className='font-extrabold text-3xl'>BooK</p> <p>My Show</p></a>
                </div>
                <div className="flex-none  gap-2">
                    <div className="form-control w-24 lg:w-96">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
{/* Hero Section */}


<div className='mt-10'>

<div className="carousel w-full h-64 lg:px-44">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://assets-in.bmscdn.com/promotions/cms/creatives/1733490010818_web125x125x.jpg"
                        className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://assets-in.bmscdn.com/promotions/cms/creatives/1732887729749_shweb.jpg"
                        className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg"
                        className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://assets-in.bmscdn.com/promotions/cms/creatives/1733124240133_1240wx300hv3.jpeg"
                        className="w-full" />
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

</div>
           
        </div>
    )
}

export default Navbar
