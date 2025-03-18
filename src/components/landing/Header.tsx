export const Header = () => {
  return (
    <header className="text-[white] pt-5 pb-[120px] px-[120px] max-md:px-[60px] max-md:py-10 max-sm:px-5 max-sm:py-8 bg-[#000066]">
      <nav className="flex justify-between items-center px-0 py-5">
        <div className="text-2xl font-semibold">upwork education</div>
        <div className="flex gap-8 max-sm:hidden">
          <button className="cursor-pointer">Courses</button>
          <button className="cursor-pointer">Career</button>
          <button className="cursor-pointer">Services</button>
        </div>
        <div className="flex gap-4 items-center">
          <button className="cursor-pointer">Login</button>
          <button className="bg-white text-[#000066] rounded cursor-pointer px-4 py-2">
            Register now
          </button>
        </div>
      </nav>
      <div className="max-w-[600px] mt-20">
        <h1 className="text-5xl font-semibold leading-[1.2] mb-8 max-sm:text-4xl">
          Your first step to a rewarding career in taxation
        </h1>
        <button className="bg-white text-[#000066] rounded cursor-pointer font-medium px-6 py-3">
          Get started
        </button>
      </div>
    </header>
  );
};
