import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Images/Logo.png';
import Icons from '../../assets/icons';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
  </svg>
);

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();

    React.useEffect(() => {
        if(location.pathname != '/'){
            setIsScrolled(true);
            return;
        }else{
            setIsScrolled(false);
        }
        setIsScrolled(prev => location.pathname != '/' ? true : prev);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 lg:px-16 transition-all duration-300 z-50 ${isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-4"}`}>

            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
                <img
                    src={logo}
                    alt="KhmerStay logo"
                    className={`h-10 w-auto transition-all duration-300 ${isScrolled ? "invert-0" : "brightness-0 invert"}`}
                />
                <span className={`text-2xl ms-2 font-bold transition-colors duration-300 ${isScrolled ? "text-gray-800" : "text-white"}`}>
                    KhmerStay
                </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        to={link.path}
                        className={`${isScrolled ? "text-gray-700" : "text-white"} font-medium hover:text-blue-500 transition-colors relative group`}
                    >
                        {link.name}
                        <span className={`absolute bottom-0 left-0 h-0.5 ${isScrolled ? "bg-gray-700" : "bg-white"} w-0 group-hover:w-full transition-all duration-300`}></span>
                    </Link>
                ))}
                
                {/* Dashboard button - only for logged in users */}
                {user && (
                    <button 
                        onClick={() => navigate('/owner')} 
                        className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all ${
                            isScrolled ? 'border-gray-700 text-gray-700 hover:bg-gray-100' : 'border-white text-white hover:bg-white/10'
                        }`}
                    >
                        Dashboard
                    </button>
                )}
            </div>

            {/* Right Side - Desktop */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
                <button className="p-2 rounded-full hover:bg-gray-100/20 transition-colors">
                    <img
                        src={Icons.search}
                        alt="Search"
                        className={`h-5 w-5 transition-all ${isScrolled ? "invert-0" : "brightness-0 invert"}`}
                    />
                </button>

                {user ? (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action 
                                label='My Bookings' 
                                labelIcon={<BookIcon />} 
                                onClick={() => navigate('/my-booking')} 
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <button 
                        onClick={openSignIn} 
                        className={`rounded-full px-6 py-2 ${isScrolled ? "bg-blue-600 text-white" : "bg-white text-blue-600"} font-medium hover:bg-blue-700 transition-colors`}
                    >
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4 z-50">
                {user ? (
                    <div className="flex items-center">
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action 
                                    label='My Bookings' 
                                    labelIcon={<BookIcon />} 
                                    onClick={() => navigate('/my-booking')} 
                                />
                            </UserButton.MenuItems>
                        </UserButton>
                        <button
                            className="p-2 focus:outline-none"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <img
                                src={isMenuOpen ? Icons.close : Icons.menu}
                                alt="menu"
                                className={`h-6 w-6 transition-all ${isScrolled && !isMenuOpen ? "invert-0" : "brightness-0 invert"}`}
                            />
                        </button>
                    </div>
                ) : (
                    <button
                        className="p-2 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <img
                            src={isMenuOpen ? Icons.close : Icons.menu}
                            alt="menu"
                            className={`h-6 w-6 transition-all ${isScrolled && !isMenuOpen ? "invert-0" : "brightness-0 invert"}`}
                        />
                    </button>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-4/5 max-w-xs h-screen bg-white flex flex-col items-start p-6 space-y-4 transition-all duration-300 ease-in-out transform md:hidden z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="w-full flex justify-between items-center mb-6">
                    <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                        <img
                            src={logo}
                            alt="KhmerStay logo"
                            className="h-10 w-auto mr-3"
                        />
                        <span className="text-2xl font-bold text-gray-800">
                            KhmerStay
                        </span>
                    </Link>
                </div>

                <div className="w-full flex-1 overflow-y-auto">
                    {navLinks.map((link, index) => (
                        <Link
                            key={index}
                            to={link.path}
                            className="block text-lg font-medium text-gray-800 hover:text-blue-500 w-full py-3 border-b border-gray-100 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="w-full mt-6 space-y-4">
                        <button className="flex items-center w-full text-left py-3 text-gray-800 font-medium border-b border-gray-100">
                            <img src={Icons.search} alt="Search" className="h-5 w-5 mr-3" />
                            Search
                        </button>
                        {user && (
                            <>
                                <button 
                                    onClick={() => navigate('/owner')} 
                                    className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                                >
                                    <img src={Icons.user} alt="User" className="h-5 w-5 mr-2" />
                                    Dashboard
                                </button>
                                <button 
                                    onClick={() => navigate('/my-booking')}
                                    className="w-full flex items-center justify-center py-3 px-4 border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors"
                                >
                                    <BookIcon className="h-5 w-5 mr-2" />
                                    My Bookings
                                </button>
                            </>
                        )}
                        {!user && (
                            <button 
                                onClick={openSignIn} 
                                className="w-full py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>

                <div className="w-full pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} KhmerStay</p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;