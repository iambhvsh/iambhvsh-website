import React from 'react';

export default function ContactForm() {
  return (
    <div className="bg-white dark:bg-black py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
      <div className="max-w-lg mx-auto lg:max-w-none">
        <form action="https://formsubmit.co/iam.bhvsh@gmail.com" method="POST" encType="multipart/form-data">
          <input type="text" name="name" placeholder="Full Name" required className="block w-full shadow-xs py-3 px-4 mb-4 rounded-md placeholder-gray-300 focus:ring-gray-500 focus:border-gray-500 border-none bg-neutral-900 text-white" />
          <input type="email" name="email" placeholder="Email" required className="block w-full shadow-xs py-3 px-4 mb-4 rounded-md placeholder-gray-300 focus:ring-gray-500 focus:border-gray-500 border-none bg-neutral-900 text-white" />
          <input type="tel" name="phone" placeholder="Phone" className="block w-full shadow-xs py-3 px-4 mb-4 rounded-md placeholder-gray-300 focus:ring-gray-500 focus:border-gray-500 border-none bg-neutral-900 text-white" />
          <textarea name="message" placeholder="Message" rows={4} className="block w-full shadow-xs py-3 px-4 mb-4 rounded-md placeholder-gray-300 focus:ring-gray-500 focus:border-gray-500 border-none bg-neutral-900 text-white"></textarea>
          <button type="submit" className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-xs text-base font-medium rounded-full text-white bg-apple-blue hover:bg-white hover:text-black hover:border-black hover:border-3 dark:hover:bg-white dark:hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Send</button>
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_autoresponse" value="Thank You, for form submission. With ❤️ by iambhvsh" />
        </form>
      </div>
    </div>
  );
}
