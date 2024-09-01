import video1 from "../assets/video1.mp4";
import video4 from "../assets/video4.mp4";
import video3 from   "../assets/video3.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Consultancy services
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for you
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Unlock Your Potential with Expert Career Guidance. Connecting Talent with Opportunity, We Help You Find Your Perfect Job Match. Your Future Starts Here!
      </p>
      {/* <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
        >
          Start for free
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Documentation
        </a>
      </div> */}
      <div className="flex flex-wrap justify-center ">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 md:w-1/3 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 md:w-1/3 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/2 md:w-1/3 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>
    </div>
  );
};

export default HeroSection;
