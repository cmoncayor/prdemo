export const Home = () => (
  <div className="mt-10 flex w-full flex-col">
    <div className="flex w-full flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
        <span className="block">Ready to use React + Vite + TailwindCSS?</span>
      </h2>

      <a
        target="_blank"
        href="https://www.quave.dev"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
      >
        Visit quave.dev
      </a>
      <a
        target="_blank"
        href="https://www.google.com"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
      >
        Visit Google
      </a>
      <a
        target="_blank"
        href="https://www.bing.com"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
      >
        Visit Bing
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
      >
        Visit YouTube
      </a>
    </div>
    <div className="flex justify-center">
      <img className="w-1/2 md:w-1/3" src="./logo-with-shadow.png" alt="Vite Logo"/>
    </div>
  </div>
);
