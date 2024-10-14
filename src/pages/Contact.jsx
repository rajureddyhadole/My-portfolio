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
    <div>
      <form onSubmit={onSubmit} className='flex flex-col h-[570px] items-center justify-center gap-8 p-4'>
        <h1 className='text-3xl font-semibold'>Contact</h1>
        <input className='h-8 px-2 rounded w-[400px]' type="text" name='name' placeholder='Name...' />
        <input className='h-8 px-2 rounded w-[400px]' type="email" name='email' placeholder='Email...' />
        <textarea rows='8' className='px-2 rounded w-[400px]' name='message' placeholder='Feedback...'></textarea>
        <button className='px-8 py-2 bg-yellow-400 rounded hover:bg-yellow-500 active:bg-yellow-400' type='submit'>Submit</button>
      </form>
      <Footer />
    </div>
  )
}

export default Contact
