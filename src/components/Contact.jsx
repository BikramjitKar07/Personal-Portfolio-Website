import React from 'react'
import Swal from 'sweetalert2'  

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "d44d8a80-8cfa-4657-96e2-b8714454c856");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          Swal.fire({
            title: "Congrats!",
            text: "You Submitted The Form",
            icon: "success"
          });
        }
    }
  return (
    <>
        <div name="Contact"className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <h1 className='text-3xl font-bold'>Contact</h1>
            <p>Please  fill out the below form to contact with me</p>
            </div>
          <div className='grid grid-flow-row md:grid-flow-col'>
            <div>
                <form onSubmit={onSubmit} action="" className='bg-violet-300 w-96 rounded-md flex flex-col py-5 px-5 m-auto mt-10'>
                    <p className="font-bold text-center">Send Your message</p>
                    <div className="flex flex-col md-4">
                    <label className='block text-center mt-4'>FullName</label>
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-500 mt-2 mb-4 leading-tight focus:outline-none" name={"name"} type="text" placeholder='Name' required />
                    </div>
                    <div className="flex flex-col md-4">
                    <label className='block text-center'>Number</label>
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-500 mt-2 mb-4 border-none focus:outline-none" name={"Mobile number"} type="tel" pattern="[0-9]{10}" placeholder='Enter Your Phone number' required/>
                    </div>
                    <div className="flex flex-col md-4">
                    <label className='block text-center'>Email</label>
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-500 mt-2 mb-4 border-none focus:outline-none" name={"email"} type="email" placeholder='Email Addresss' required />
                    </div>
                    <div className="flex flex-col md-4">
                    <label className='block text-center'>Message</label>
                    <textarea className="shadow appearance-none border rounded py-2 px-3 text-gray-500 mt-2 mb-4 border-none focus:outline-none" name={"message"} type="text" placeholder='Enter Your message here' required/>
                    </div>
                    <div className="flex justify-end"> <button className='px-4 bg-violet-800 text-slate-50 py-2 rounded-md items-center' type="submit">Submit</button></div>
                    
                </form>
            </div>
            <div className="mx-auto py-8">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.5242172921708!2d88.37651167475352!3d22.446926737565743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271965312b787%3A0x7caaee4618475f53!2sUTSHA%20Packaged%20Drinking%20Water!5e0!3m2!1sen!2sin!4v1734608282941!5m2!1sen!2sin" className="w-[390px] h-[300px] md:w-[600px] md:h-[500px] rounded-lg" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </>
  )
}

export default Contact