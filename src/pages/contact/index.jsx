import React, { useState } from 'react';

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const clearErrors = () => {
        setErrors({});
    };

    const sendEmail = (e) => {
        e.preventDefault();
        // Example validation
        const errors = {};
        if (!firstName.trim()) {
            errors.first_name = 'First Name is required';
        }
        if (!lastName.trim()) {
            errors.last_name = 'Last Name is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        }
        if (!phone.trim()) {
            errors.phone_number = 'Phone Number is required';
        }
        if (!message.trim()) {
            errors.message = 'Message is required';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        // If validation passes, proceed with sending email
        // Replace with your actual email sending logic
        console.log('Form data:', { firstName, lastName, email, phone, message });

        // Clear form after submission
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');

        // Optionally, show success message or navigate to another page
    };

    return (
        <>
            <div id="contact" className="flex justify-center items-center mt- w-full bg-white py-12 lg:py-0">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail}>
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-brown-800 uppercase text-4xl">Send us a message</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="first_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="First Name*"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.first_name && (
                                        <p className="text-red-500 text-sm">{errors.first_name}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        name="last_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Last Name*"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.last_name && (
                                        <p className="text-red-500 text-sm">{errors.last_name}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="tel"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.phone_number && (
                                        <p className="text-red-500 text-sm">{errors.phone_number}</p>
                                    )}
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder="Message*"
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors.message && (
                                    <p className="text-red-500 text-sm">{errors.message}</p>
                                )}
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="uppercase text-sm font-bold tracking-wide bg-brown-300 hover:bg-blue-900 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-9 ml-auto bg-brown-300 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Address</h2>
                                    <p className="text-white-400">40, yelahanka new town, Bengaluru, Karnataka-560064,India</p>
                                </div>
                            </div>
                          
                            
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl">Call Us</h2>
                                    <p className="text-white-400">Tel: 123456789</p>
                                    <div className='mt-5'>
                                        <h2 className="text-2xl">Send an E-mail : <span className="text-white-400">sales@design.in</span></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
   
    <br/>

 
    
        </>
    );
};

export default Contact;
