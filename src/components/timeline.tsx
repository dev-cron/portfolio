import { experience } from "../utils/const";

export default function Timeline() {
  return (
    <>
    <main className='h-screen pt-5 font-virgil '>
      <section className='px-2 py-5 mx-[9.25rem] mt-[5.5rem] rounded-3xl sm:border-4 mx-[3.25rem]'>
        <h1 className='text-center text-[40px] font-extrabold'>Experience</h1>
      </section>
      <section className='px-2 py-5 mx-[9.25rem] mt-[5.5rem]'>
      <ol className="px-5 py-3">
        {
            experience.map((ele)=>{
              return (<li className="rounded-3xl sm:border-4 px-2 py-2 my-4">
                <div className="flex-start flex items-center mt-2">
                  <div className="-ml-[9px] -mt-2 mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
                  <h4 className="-mt-2 text-xl font-semibold">{ele.title}</h4>
                </div>
                <div className="ml-6 pb-[0.5rem]">
                  <a href={ele.link}>
                    {ele.org}
                  </a>
                  <p className="mb-1 mt-2 text-neutral-600 dark:text-neutral-300">{ele.description}</p>
                </div>
              </li>)
            })
        }
      </ol>
      </section>
    </main>
    </>
  );
}
