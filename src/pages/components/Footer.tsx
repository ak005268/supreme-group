import logo from '../../assets/images/footer-logo.svg';

const Footer = () => {
  return (
    <footer
      className="h-auto bg-cover bg-center text-center md:text-left px-[20%]"
      style={{ backgroundImage: "url('/assets/images/footer-bg.jpg')" }}
    >
      <div className="container mt-[162px]">
        <div className="flex justify-center md:justify-start mb-6">
          <img src={logo} alt="Company Logo" className="w-24 md:w-32" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-black">
          <div>
            <h3 className="uppercase text-lg font-bold mb-2">Applications</h3>
            <ul className="space-y-5 mt-7 opacity-60">
              <li><a href="/apparel">Apparel</a></li>
              <li><a href="/automotive">Automotive</a></li>
              <li><a href="/filtration">Filtration</a></li>
              <li><a href="/customized-nonwoven">Customized Nonwoven</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-lg font-bold mb-2">Company</h3>
            <ul className="space-y-5 mt-7 opacity-60">
              <li><a href="/who-we-are">Who We Are</a></li>
              <li><a href="/global-competency">Global Competency</a></li>
              <li><a href="/innovation">Innovation</a></li>
              <li><a href="/esg-impact">ESG Impact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-lg font-bold mb-2">More</h3>
            <ul className="space-y-5 mt-7 opacity-60">
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-lg font-bold mb-2">Follow Us</h3>
            <ul className="space-y-5 mt-7 opacity-60">
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className='lg:flex my-20 lg:justify-between'>

        <div className="text-sm lg:hidden text-center ">
            ©2024 All Rights Reserved.
          </div>
          <div className="text-sm hidden lg:block text-center md:text-left">
            ©2024 Supreme Group. All Rights Reserved.
          </div>
          <div className='hidden lg:block'>
            Supreme House, 110, 16th Road, Chembur, Mumbai - 400071.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
