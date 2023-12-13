const NextJSBlob = () => {
  return (
    <div>
      <div
        className=" flex place-items-center before:absolute z-20 fixed top-10
      before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full 
      before:bg-gradient-radial before:from-cyan-300 before:to-cyan-500 before:blur-3xl 
      before:content-['']  after:absolute after:z-20 after:h-[180px] after:w-[240px] 
      after:translate-x-1/3 after:bg-gradient-to-br after:from-sky-300 after:via-cyan-400 
      after:blur-xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent
       before:dark:to-cyan-400 before:dark:opacity-10 after:dark:from-fuchsia-400
       after:dark:via-[#0141ff] after:dark:opacity-20 before:lg:h-[360px] "
      />
    </div>
  );
};

const SaqGreenBlob = () => {
  return (
    <div className=" ">
      <div
        className=" flex place-items-center before:absolute z-20 fixed bottom-60   right-60
      before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full 
      before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl 
      before:content-['']  after:absolute after:z-20 after:h-[180px] after:w-[240px] 
      after:translate-x-1/3 after:bg-gradient-to-tr after:from-saq-green after:via-saq-green 
      after:blur-xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent
       before:dark:to-fuchsia-600 before:dark:opacity-10 after:dark:from-fuchsia-600
       after:dark:via-fuchsia-600/80 after:dark:opacity-10 before:lg:h-[360px] "
      />
    </div>
  );
};

export { NextJSBlob, SaqGreenBlob };
