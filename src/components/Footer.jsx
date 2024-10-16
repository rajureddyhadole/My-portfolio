import ReactDOM from 'react-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full'>
      <div className='flex justify-center gap-5 mt-8 mb-4 font-medium'>
        <a href="https://www.linkedin.com/in/rajureddy-hadole-a647b8247/" target='_blank'><FaLinkedin className='text-3xl text-neutral-400 hover:text-neutral-300' /></a>
        <a href="https://github.com/rajureddyhadole" target='_blank'><FaGithubSquare className='text-3xl text-neutral-400 hover:text-neutral-300' /></a>
        <a href="https://www.instagram.com/raju_reddy_5/" target='_blank'><FaInstagramSquare className='text-3xl text-neutral-400 hover:text-neutral-300' /></a>
        <a href="https://x.com/Rajureddy452" target='_blank'><FaSquareXTwitter className='text-3xl text-neutral-400 hover:text-neutral-300' /></a>
      </div>
    </div>
  )
}

export default Footer
