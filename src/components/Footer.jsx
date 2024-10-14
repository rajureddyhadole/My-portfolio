import ReactDOM from 'react-dom'

function Footer() {
  return (
    <div>
      <div className='flex justify-center mt-8 mb-4 space-x-8 font-medium'>
        <a className=' hover:text-slate-500 active:text-slate-600' href="https://www.linkedin.com/in/rajureddy-hadole-a647b8247/" target='_blank'><i class="text-neutral-600 hover:text-neutral-500 fa-brands fa-linkedin"></i></a>
        <a className=' hover:text-slate-500 active:text-slate-600' href="https://github.com/rajureddyhadole" target='_blank'><i class="text-neutral-600 hover:text-neutral-500 fa-brands fa-github"></i></a>
        <a className=' hover:text-slate-500 active:text-slate-600' href="https://www.instagram.com/raju_reddy_5/" target='_blank'><i class="text-neutral-600 hover:text-neutral-500 fa-brands fa-square-instagram"></i></a>
        <a className=' hover:text-slate-500 active:text-slate-600' href="https://x.com/Rajureddy452" target='_blank'><i class="text-neutral-600 hover:text-neutral-500 fa-brands fa-square-x-twitter"></i></a>
      </div>
    </div>
  )
}

export default Footer
