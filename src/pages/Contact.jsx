import React from 'react'
import Footer from '../components/Footer';

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7f4eef25-a7af-40b6-af81-e05bbcb9c7e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='flex w-full flex-col justify-between h-[90vh]'>
      <form onSubmit={onSubmit} className='flex flex-col items-center justify-center gap-8 p-4 mt-10'>
        <h1 className='text-4xl font-semibold text-neutral-300'>Contact</h1>
        <input className='h-10 px-2 text-neutral-300 bg-[#262626] rounded-lg w-[400px] md:w-[600px]' type="text" name='name' placeholder='Name...' />
        <input className='h-10 px-2 rounded-lg bg-[#262626] w-[400px] md:w-[600px] text-neutral-300' type="email" name='email' placeholder='Email...' />
        <textarea rows='8' className='px-2 rounded-lg bg-[#262626] text-neutral-300 w-[400px] md:w-[600px] mb-8' name='message' placeholder='Feedback...'></textarea>
        <button className='px-12 py-2 text-lg font-semibold rounded-full bg-gradient-to-r from-orange-600 to-orange-800 text-neutral-900' type='submit'>Submit</button>
      </form>
      <Footer />
    </div>
  )
}

export default Contact
