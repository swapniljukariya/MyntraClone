import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 py-8 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div>
            <h3 className="font-bold mb-3">Online Shopping</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Men</a></li>
              <li><a href="#" className="hover:underline">Women</a></li>
              <li><a href="#" className="hover:underline">Kids</a></li>
              <li><a href="#" className="hover:underline">Home & Living</a></li>
              <li><a href="#" className="hover:underline">Beauty</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Customer Policies</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Shipping</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Experience Our App</h3>
            <div className="flex flex-wrap space-x-4 mb-4 justify-center">
              {/* Adjust image size for small devices */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1024px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="h-8 sm:h-8 md:h-8 lg:h-10 object-contain w-full md:w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store"
                className="h-8 sm:h-8 md:h-8 lg:h-10 object-contain w-full md:w-auto"
              />
            </div>
            <div className="flex space-x-4 text-gray-600 text-xl justify-center">
              <a href="#" className="hover:text-gray-800"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-gray-800"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-800"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-800"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Popular Searches</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sarees, Watches, T-Shirts, Jeans, Shoes, and more.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 YourWebsite.com</p>
          <p>
            <a href="#" className="text-blue-500 hover:underline">Contact Us</a> for any concerns.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
