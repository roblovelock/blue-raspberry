import React from 'react';

const Contact = () => {

    return (
        <div id='contact' className='bg-gray-700 w-full height-auto min-h-screen sm:h-screen flex justify-center items-center p-4 text-gray-300 pt-[80px]'>
            <form method='POST' action='https://getform.io/f/cb516860-73e1-494d-8c61-479bff4411b4'
                  className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#35c0ed] '>Contact</p>
                    <p className='py-4'>Request more information about our services.</p>
                </div>
                <input className='bg-gray-200 p-2 text-gray-700' type='text' placeholder='Name' name='name'
                       required={true}/>
                <input className='bg-gray-200 my-4 p-2 text-gray-700' type='email' placeholder='Email' name='email'
                       required={true}/>
                <textarea className='bg-gray-200 p-2 text-gray-700' rows={10} placeholder='Message' name='message'
                          required={true}/>
                <button
                    className='text-gray-300 border-2 px-4 py-3 my-8 mx-auto flex items-center hover:bg-[#35c0ed] hover:text-gray-700 hover:border-[#35c0ed]'>
                    Get in contact!
                </button>
            </form>
        </div>
    );
};

export default Contact;