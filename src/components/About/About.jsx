import {useState,useEffect} from 'react'
import videoBG from '../../Assets/videoBG.mp4'
import { useSpring, animated } from '@react-spring/web';
import Loader from '../Loader/Loader';

const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 2500 },
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching or component loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
    {isLoading ? (
      <Loader/>
      ):(
      <div className=''>
        <div className="mt-[7.3%] absolute top-0 left-0 w-[100%] h-[100%] bg-black/40">
          </div>
          <div className=" m-0 p-0 w-[100%] h-[100vh] ">
            <video
              src={videoBG}
              autoPlay
              loop
              muted
              className="w-[100%] h-[100%] object-cover"
            ></video>
          </div>
          <animated.div style={fadeIn} className="top-0 absolute w-[100%] h-[100%] flex-col flex justify-center ">
            <div className="absolute p-10  text-white m-auto md:w-[700px]">
              <h3 className="items-center font-Aleo sm:text-4xl md:text-5xl text-5xl font-bold">
                Welcome to St. Bhatevara Foundation
              </h3>
              <p className="text-xl py-6 font-Rajdhani flex text-justify">
              St. Bhatevara Foundation, set up in 2007, operating out of Pune is a not-for-profit organization that believes in doing good work without looking for praise or validation from the world. They believe that actual good deeds borne out of the right intention are done in silence without loudly proclaiming them and being swayed by the attention which is why they have not, to this day, created a website to represent themselves or social media accounts to advertise their work.
            </p>
            </div>
          </animated.div>
          <div className="max-w-[1200px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="grid grid-cols-2 h-[90vh] grid-rows-3">
            <img
              className="row-span-2 p-2 w-full h-full object-cover"
              src="https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="/"
            />
            <img
              className=" w-full h-full p-2 object-cover"
              src="https://images.pexels.com/photos/12094881/pexels-photo-12094881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="/"
            />
            <img
              className="row-span-2 p-2 w-full h-full object-cover"
              src="https://savioursfoundation.org/wp-content/uploads/2021/09/1_VtkWJ2QtjrSey6XqFw-u5w-2.jpeg"
              alt="/"
            />
            <img
              className="row-span-2 w-full p-2 h-full object-cover"
              src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="/"
            />
            <img
              className="w-full h-full p-2 object-cover"
              src="https://images.pexels.com/photos/998591/pexels-photo-998591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="/"
            />
          </div>

          {/* Right Side */}

          <div className=" flex flex-col justify-center">
            <p className="font-bold text-5xl md:text-5xl font-Aleo w-full py-3">
              Scholarship Criteria
            </p>
            <div className="">
              <div>
                <p className="text-xl font-Aleo flex  py-3">
                1. Target Beneficiaries: Deserving, underprivileged students.
                </p>
              </div>
              <div>
                <p className="text-xl font-Aleo flex text-justify py-3">
                2. Educational Qualification: Must have completed the 12th class (high school).
                </p>
              </div>
              <div>
                <p className="text-xl font-Aleo flex text-justify py-3">
                3. Academic Performance: Must have achieved a minimum of 60% marks in their 12th class examinations.
                </p>
              </div>
              <div>
                <p className="text-xl font-Aleo flex text-justify py-3">
                4. Future Aspirations: Resilience: Must have dreams and aspirations of pursuing further studies to complete their graduation.
                </p>
              </div>
              <div>
                <p className="text-xl font-Aleo flex text-justify py-3">
                5. Purpose of the Scholarship: To prevent meritorious students from dropping out due to financial constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default About