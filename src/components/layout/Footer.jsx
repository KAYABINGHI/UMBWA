import React from 'react';
import Logo from './logo.png';


const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-48 h-48 md:w-32 md:h-14 rounded-lg overflow-hidden flex items-center justify-center p-1">
              <img src={Logo} alt="EMAGE logo" className="w-full h-full object-contain" />
            </div>
            {/* <span className="text-xl font-bold text-gray-900">EMAGE</span> */}
          </div>
                  <br/>
                  {/* <br/> */}
          <p className="text-emerald-100 text-sm">
            Empowering minds and transforming lives through compassionate mental health care.
          </p>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2 text-emerald-100 text-sm">
            <li><a href="#" className="hover:text-white transition">Individual Counseling</a></li>
            <li><a href="#" className="hover:text-white transition">Couples Therapy</a></li>
            <li><a href="#" className="hover:text-white transition">Group Sessions</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2 text-emerald-100 text-sm">
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition">Resources</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-4">Links</h3>
          <ul className="space-y-2 text-emerald-100 text-sm">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-emerald-600 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-emerald-200 transition">Facebook</a>
          <a href="#" className="hover:text-emerald-200 transition">Twitter</a>
          <a href="#" className="hover:text-emerald-200 transition">Instagram</a>
          <a href="#" className="hover:text-emerald-200 transition">LinkedIn</a>
        </div>
        <p className="text-emerald-100 text-sm">© 2025 EMAGE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;