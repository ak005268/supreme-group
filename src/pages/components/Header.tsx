import logo from '../../assets/images/supreme_logo.svg';
import linked from '../../assets/images/linked-in.svg';
import language from '../../assets/images/language.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Header = () => {

    const navigate = useNavigate();
    const [showHeader, setShowHeader] = useState(true);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        console.log('test')
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setShowHeader(false); // Hide on scroll down
            } else {
                setShowHeader(true); // Show on scroll up
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    
    const scrollToContact = () => {
        navigate("/"); 
        setTimeout(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }, 300);  
    };

    return (
        <header className={`flex justify-between items-center bg-white sticky top-0 z-50 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>

            <img src={logo} alt="Supreme Logo" className='lg:ml-[114px] p-5' />

            <nav className="hidden lg:flex gap-6 lg:mr-[150px] items-center">
                <button type='button'
                    onClick={scrollToContact} className="text-black bg-c1 cursor-pointer border border-c2 py-3 px-7 flex items-center leading-5 rounded-full font-medium text-base ">Contact Us</button>
                <div className='flex '>
                    <div>
                        <a className='bg-aa' href="https://www.linkedin.com/company/supreme-group-company/?originalSubdomain=in">
                            <img src={linked} alt="Supreme Logo" className='ml-[134px] py-5' />
                        </a>
                    </div>
                    <a href="#">
                        <img src={language} alt="Supreme Logo" className='ml-[134px] py-5' />

                    </a>
                </div>
            </nav>
        </header >
    )
}

export default Header