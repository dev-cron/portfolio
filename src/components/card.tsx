export const Card = ({name, description, img, link}:{name:string; description:string; img:string; link:string}) => {
  return (
    <>
      <div className="my-2 w-[18rem] block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <a href={link}>
          <img style={{height:"300px", width:"282px"}}
            className="rounded-t-lg"
            src={img}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {name}
          </h5>
          <p className="mb-1 text-base text-neutral-600 dark:text-neutral-200">{description} 
          </p>
        </div>
      </div>
    </>
  );
};
