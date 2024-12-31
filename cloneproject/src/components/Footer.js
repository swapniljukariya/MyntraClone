import React from 'react'

function Footer() {
  return (
    <footer class="bg-gray-100 py-8 border-t border-gray-300">
  <div class="max-w-7xl mx-auto px-4">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">

      <div>
        <h3 class="font-bold mb-3">Online Shopping</h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><a href="#" class="hover:underline">Men</a></li>
          <li><a href="#" class="hover:underline">Women</a></li>
          <li><a href="#" class="hover:underline">Kids</a></li>
          <li><a href="#" class="hover:underline">Home & Living</a></li>
          <li><a href="#" class="hover:underline">Beauty</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-bold mb-3">Customer Policies</h3>
        <ul class="space-y-2 text-sm text-gray-600">
          <li><a href="#" class="hover:underline">Contact Us</a></li>
          <li><a href="#" class="hover:underline">FAQ</a></li>
          <li><a href="#" class="hover:underline">Returns</a></li>
          <li><a href="#" class="hover:underline">Shipping</a></li>
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>


      <div>
        <h3 class="font-bold mb-3">Experience Our App</h3>
        <div class="flex space-x-4 mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1024px-Google_Play_Store_badge_EN.svg.png"
            alt="Google Play"
            class="h-10 object-contain"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
            alt="App Store"
            class="h-10 object-contain"
          />
        </div>
        <div class="flex space-x-4 text-gray-600 text-xl">
          <a href="#" class="hover:text-gray-800"><i class="fab fa-facebook"></i></a>
          <a href="#" class="hover:text-gray-800"><i class="fab fa-instagram"></i></a>
          <a href="#" class="hover:text-gray-800"><i class="fab fa-twitter"></i></a>
          <a href="#" class="hover:text-gray-800"><i class="fab fa-youtube"></i></a>
        </div>
      </div>

  
      <div>
        <h3 class="font-bold mb-3">Popular Searches</h3>
        <p class="text-sm text-gray-600 leading-relaxed">
          Sarees, Watches, T-Shirts, Jeans, Shoes, and more.
        </p>
      </div>
    </div>

    <div class="mt-8 text-center text-sm text-gray-500">
      <p>&copy; 2024 YourWebsite.com</p>
      <p>
        <a href="#" class="text-blue-500 hover:underline">Contact Us</a> for any concerns.
      </p>
    </div>
  </div>
</footer>

  )
}

export default Footer
