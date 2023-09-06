import Typewriter from 'typewriter-effect';
import {ln, gh} from '../utils/const';

export default function Main() {
  return(
  <>
    <main className='h-screen pt-5 font-virgil '>
      <section className='px-2 py-5 mx-[9.25rem] mt-[5.5rem] rounded-3xl sm:border-4 mx-[3.25rem]'>
        <h1 className='text-center text-[40px] font-extrabold'>Hi! I'm karan</h1>
      </section>
      <section className='flex justify-center items-center px-8 py-5 mx-10 mt-10'>
        <h1 className='text-center text-[30px] font-extrabold'>I'm a
        <Typewriter
        options={{
          strings: ['software developer', 'undergraduate','tech geek!'],
          autoStart: true,
          loop: true,
        }}/>
        </h1>
      </section>
      <section className='flex justify-center space-x-5'>
        <button className='h-[200px] w-[200px] border-4 text-[20px] font-extrabold rounded-3xl hover:bg-stone-300'
        onClick={()=>location.href='/projects'}>Projects</button>
        <button className='h-[200px] w-[200px] border-4 text-[20px] font-extrabold rounded-3xl hover:bg-stone-300' onClick={()=>location.href='https://drive.google.com/file/d/1Tp5MmdCj4lBwMWSgAlltSQ_C5yh8vcj4/view?usp=drive_link'}>Resume</button>
      </section>
      <div className='flex justify-center items-center space-x-6 px-6 my-6'>
        <a className='hover:cursor-pointer' href='https://www.linkedin.com/in/vishkaranwakarma'>{ln}</a>
        <a className='hover:cursor-pointer' href='https://github.com/dev-cron'>{gh}</a>
      </div>
      <section className='flex justify-center space-x-5'>
        <button className='h-[50px] w-[170px] border-4 text-[20px] font-extrabold rounded-3xl hover:bg-stone-300'
        onClick={()=>location.href='/timeline'}>Timeline</button>
      </section>
    </main>
  </>
  )
}