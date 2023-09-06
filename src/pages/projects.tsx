import { Card } from "../components/card"
import { details } from "../utils/const"

export const Projects = () => {
  return (
   <>
    <main className='h-screen pt-5 font-virgil'>
      <section className='px-2 py-5 mx-[9.25rem] mt-[5.5rem] rounded-3xl sm:border-4 mx-[3.25rem]'>
        <h1 className='text-center text-[40px] font-extrabold'>Projects</h1>
      </section>
      <section className='my-8 flex justify-center items-center space-x-3 text-[1.5rem]'>
        <div className="h-fit w-fit px-1 py-1 rounded-lg bg-slate-300">Web</div>
        <div className="h-fit w-fit px-1 py-1 rounded-lg bg-slate-300">Android</div>
        <div className="h-fit w-fit px-1 py-1 rounded-lg bg-slate-300">ML/AI</div>
      </section>
      <section className='py-8 mx-8 px-8 flex flex-wrap justify-center space-x-4'>
        {details.map((ele)=>{
          return <Card
          name={ele.name}
          description={ele.description} 
          img={ele.image} 
          link={ele.link}/>
        })}
      </section>
    </main>
   </> 
  )
}
