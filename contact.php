<?php include 'header_two.php'; ?>
<section class="banner relative">
    <div class="mx-auto max-w-7xl lg:px-0 md:px-8 px-5">
        <div class="grid grid-cols-1">
            <div class="col-span-1">
                <div class="banner_wrap flex flex-col items-center">
                    <h2 class="text-white mb-4">Contact</h2>
                    <ul class="bread-crumb relative text-white mt-0 rounded-full inline-block">
                        <li class="relative px-2 inline-block font-bold"><a href="index.php">Home</a> </li>
                        <li class="relative px-2 inline-block font-bold"><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                        <li class="relative px-2 inline-block font-bold" class="current">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="contact-sec relative">
    <div class="mx-auto max-w-7xl lg:px-0 md:px-8 px-5">
        <div class="grid lg:grid-cols-2 lg:gap-10 gap-5">
           
            <div class="col-span-1">
                <div class="content-div">
                    <div class="div-title">
                        <h6>Connect with Us</h6>
                        <h2 class="pl-2  font-bold text-gray-700 border-l-4 border-blue-500 dark:border-blue-400 dark:text-gray-300">
                            Contact</h2>

                    </div>
                    <div class="contact-box bg-blue-800 lg:p-10 p-5 rounded-2xl shadow-2xl">
                        <div class="text-contact border-b-2 border-opacity-10 p-4">
                            <h3 class="text-white lg:text-4xl text-3x1 font-bold mb-2">Address</h2>
                                <p class="text-white text-lg"><i class="fa fa-map-marker" aria-hidden="true"></i> Business Village - Block B 6th floor office #637/13 * Deira- Dubai UAE</p>
                        </div>
                        <div class="text-contact border-b-2 border-opacity-10 p-4">
                            <h3 class="text-white lg:text-4xl text-3x1 font-bold mb-2">Phone</h2>
                                <p class="text-white text-lg"><i class="fa fa-phone transform rotate-90" aria-hidden="true"></i> +971 562777523</p>
                        </div>
                        <div class="text-contact border-b-2 border-opacity-10 p-4">
                            <h3 class="text-white lg:text-4xl text-3x1 font-bold mb-2">Email</h2>
                                <p class="text-white text-lg"><i class="fa fa-envelope" aria-hidden="true"></i> info@dkriver.com.np</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-1">
                <div class="form-box bg-white rounded-2xl shadow-2xl lg:p-10 p-5 lg:-mt-60 lg:ml-20">
                    <div class="div-title">
                        <h3 class="pl-2 mb-4  lg:text-5xl text-4X1 font-bold text-blue-900 border-l-4 border-blue-500 dark:border-blue-400 dark:text-gray-300">
                            Have Some Questions?</h2>
                    </div>
                    <form>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="name">
                                Name
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name">
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                                Email
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Enter your email">
                        </div>
                        <div class="mb-6">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="message">
                                Message
                            </label>
                            <textarea rows="4" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Enter your message"></textarea>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="submit-input w-full">
                                <input type="submit" class="w-full p-2 text-xl shadow rounded-lg bg-blue-900 text-white font-bold cursor-pointer submit_btn" value="Send Message">
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </div>
</section>
<section class="map-section relative p-0">
    <div class="grid grid-cols-1">
        <div class="col-span-1">
            <div class="map-div">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3070242250965!2d85.309886314872!3d27.738674682778964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19e51ba124d5%3A0xa5226b6fe85430a0!2sDK%20River%20Overseas!5e0!3m2!1sne!2snp!4v1678794102679!5m2!1sne!2snp" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
</section>


<?php include 'testimonial_panel.php'; ?>
<?php include 'partner_panel.php'; ?>
<?php include 'footer.php'; ?>