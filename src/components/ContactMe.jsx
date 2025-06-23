import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactMe() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_qyjfqgn',   
            'template_5fpzb13',  
            form.current,
            'khcJDCTlT3qeWtiEn'    
        )
        .then((result) => {
            console.log(result.text);
            alert('Pesan berhasil dikirim!');
            form.current.reset();
        }, (error) => {
            console.log(error.text);
            alert('Terjadi kesalahan saat mengirim pesan.');
        });
    };

    return (
        <div id='contact' className="dark:bg-gray-800 bg-white">
            <div className="container mx-auto h-screen flex flex-col justify-center">
                <h1 className="text-center text-4xl font-bold dark:text-white text-black mb-16">Hubungi Saya</h1>

                <div className="mx-auto w-md-[65%] w-[75%] bg-gray-800 p-8 rounded-lg shadow-md text-white">
                    <form ref={form} onSubmit={sendEmail} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block mb-1 font-medium">Nama</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-1 font-medium">Pesan</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-center mt-[24px]">
                            <button
                                type="submit"
                                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                            >
                                Kirim
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactMe;
