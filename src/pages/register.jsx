import React from "react";

export const RegisterForm =()=>{

    return(

     <>
     
     {/* Checkout Section: Simple Box */}
<div className="bg-white"><div className="container mx-auto shadow-2xl bg-white text-black">
  <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
    {/* Box */}
    <div className="flex flex-col rounded-xl shadow-sm bg-white overflow-hidden">
      <div className="p-5 lg:p-6 grow w-full md:w-3/4 lg:w-3/5 xl:w-2/5 mx-auto">
        {/* Heading */}
        <div className="text-center mt-5">
          <h6 className="text-sm uppercase font-bold tracking-wider text-black mb-1">
            Know Your Customer(KYC)
          </h6>
          <h1 className="text-2xl font-bold mb-1">
            Building a web app (Course)
          </h1>
          <p className="text-sm text-gray-600 font-medium mb-5">
            Enter your information
          </p>
          
          <div className="flex items-center my-5">
            <span aria-hidden="true" className="grow bg-gray-200 rounded h-px" />
            
            <span aria-hidden="true" className="grow bg-gray-200 rounded h-px" />
          </div>
        </div>
        {/* END Heading */}
        {/* Checkout Form */}
        <div className="space-y-6">
          <form onsubmit="return false;" className="space-y-6">
            <div className="space-y-6 p-4 rounded border bg-gray-50">
              <div className="space-y-1">
                <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="email" id="email" name="email" placeholder="FIRST NAME:" />
              </div>
              <div className="space-y-1">
                <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="email" id="email" name="email" placeholder="LAST NAME:" />
              </div>
              <div className="space-y-1">
                <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="email" id="email" name="email" placeholder="EMAIL:" />
              </div>
              <div className="space-y-1">
                <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="vat_id" name="vat_id" placeholder="PASSWORD" />
              </div>
            </div>
            <div className="space-y-6 p-4 rounded border bg-gray-50">
              <div className="space-y-1">
                <label htmlFor="card_name" className="font-medium">ADDRESS:</label>
                <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="card_name" name="card_name" />
              </div>
              <div className="space-y-1">
                <label htmlFor="card_number" className="font-medium">Card number</label>
                <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="card_number" name="card_number" />
              </div>
              <div className="space-y-6 sm:space-y-0 sm:flex sm:space-x-3">
                <div className="space-y-1 grow">
                  <label htmlFor="card_exp" className="font-medium">Expiration date (MM/YY)</label>
                  <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="card_exp" name="card_exp" />
                </div>
                <div className="space-y-1 sm:w-40">
                  <label htmlFor="card_cvc" className="font-medium">CVC</label>
                  <input className="block border placeholder-gray-400 px-5 py-3 leading-6 w-full rounded border-gray-200 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" type="text" id="card_cvc" name="card_cvc" />
                </div>
              </div>
            </div>
            <div className="rounded border p-4 text-sm text-gray-600 font-medium text-center">
              You’ll be charged US$90.85 including VAT (15%).
            </div>
            <button type="submit" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none w-full px-4 py-3 leading-6 rounded border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700">
              <span>Pay</span>
            </button>
          </form>
        </div>
        {/* END Checkout Form */}
        {/* Footer */}
        <div className="text-center my-5">
          <p className="text-sm text-gray-500 font-medium">
            Thanks for buying from our store.
          </p>
        </div>
        {/* Footer */}
      </div>
    </div>
    {/* END Box */}
  </div>
</div></div>
{/* END Checkout Section: Simple Box */}

     
     </>
  )
}

        
       