export const Footer = () => {
  return (
    <footer>
      <div className="text-center px-[120px] py-[60px] max-md:px-[60px] max-md:py-10 max-sm:px-5 max-sm:py-8">
        <h2 className="text-[32px] font-semibold text-[#000066] mb-8">
          Enroll in our qualifying education course
        </h2>
        <button className="text-[white] rounded cursor-pointer font-medium bg-[#000066] px-8 py-4">
          Get started
        </button>
      </div>
      <div className="bg-[#f8f9fa] px-[120px] py-[60px] max-md:px-[60px] max-md:py-10 max-sm:px-5 max-sm:py-8">
        <div className="text-2xl font-semibold mb-8">upwork education</div>
        <div className="flex gap-16 max-sm:flex-col max-sm:gap-8">
          <div className="flex flex-col gap-4">
            <button className="text-[#666] cursor-pointer text-left">
              Career
            </button>
            <button className="text-[#666] cursor-pointer text-left">
              Contact
            </button>
            <button className="text-[#666] cursor-pointer text-left">
              About us
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <button className="text-[#666] cursor-pointer text-left">
              Terms of use
            </button>
            <button className="text-[#666] cursor-pointer text-left">
              Privacy policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
