import { Play, Layout, Type, Leaf, TextSelect, Moon, Users, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2634] to-[#3b4b8f]">
      {/* Header */}
      <header className="p-6">
      <img src="/societylogo.png" alt="society Logo" className="w-25 h-25 mr-4" />
        {/* <div className="text-white font-bold text-2xl">
          the <span className="text-secondary">soci3ty</span>
        </div> */}
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Let's make your vision
          <div className="text-[#8C9EFF] mt-2">a reality</div>
        </h1>
        
        <div className="max-w-2xl mx-auto mt-8 text-gray-300">
          <p className="text-xl mb-2">You are a visionary entrepreneur and</p>
          <p className="text-xl font-semibold mb-6">you want to have impact.</p>
          
          <p className="text-lg mb-4">
            The Soci3ty is the technological and community layer to make it happen.
          </p>
          <p className="text-lg italic">
            Find mentors, early adopters and financial resources.
          </p>
        </div>

{/* Video Section */}
<div className="max-w-4xl mx-auto mt-16 relative">
  <div className="aspect-video bg-black/30 rounded-lg overflow-hidden">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/ndFxwwpFGFM"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


        {/* Platform Section */}
        <div className="mt-32 text-white">
          <h2 className="text-4xl font-bold mb-8">
            A platform that supports
            <div className="mt-2">visionaries</div>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            The Soci3ty is made up of pioneers who are at the forefront of change and who want to
            <span className="font-semibold"> come together and support each other.</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 bg-[#1E293B] rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-[#4ADE80] mb-8">Other platforms</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center space-x-4 text-white">
              <Layout className="w-6 h-6" />
              <span>Governance</span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Type className="w-6 h-6" />
              <span>Centralized</span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Leaf className="w-6 h-6" />
              <span>Community</span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <TextSelect className="w-6 h-6" />
              <span>Decentralized</span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Moon className="w-6 h-6" />
              <span>Innovation</span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Users className="w-6 h-6" />
              <span>Collaboration</span>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <Code className="w-6 h-6" />
              <span>Development</span>
            </div>
          </div>
        </div>

          {/* Call to Action Button */}
          <div>

        
        <div >
          <a
            href="https://www.society.xyz/"
            className="mt-16 inline-block bg-[#95FFDF] text-#323232 px-[50px] py-[20px] rounded-[80px]  text-lg font-semibold transition duration-300 hover:bg-[#7A8BFF] gap-[12px]"
          >
            JOIN THE NETWORK
          </a>
        </div>

        {/* {Logo - icon} */}
        <div className="mt-20 inline-block w-[208px] h-[183px]">
          <img src="/soci3ty3Logo.png" alt="society Logo" className="w-full h-full object-contain" />
        </div>


        <div className="mt-32 text-white">
        <h2 className="text-4xl font-bold mb-8">
          A platform built for visionaries
        </h2>
        </div>

        {/* tables */}

        <div className="mt-16 flex items-center justify-center p-4">
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {[
              "A global pool of impact driven changemakers and talent to collaborate with",
              "Online and IRL events to network, grow and find collaborators",
              "A collective treasury governed by members to support impact driven initiatives",
              "Ability to organize your community in a clan to empower it and offer an opportunity for financial sustainability"
            ].map((text, index) => (
            <div
              key={index}
              className=" p-6 text-white text-[20px] font-bold leading-[100%] text-center rounded-xl border-4 border-[#95FFDF] shadow-md flex items-center justify-center"
            >
             {text}
            </div>
            ))}
          </div>
          
        </div>
        {/* Apply Button */}
        <div className='mt-16 flex items-center justify-center'>
          <a
            href="https://www.society.xyz/"
            className="mt-13 inline-block bg-[#95FFDF] text-#323232 px-[70px] py-[20px] rounded-[80px]  text-lg font-semibold transition duration-300 hover:bg-[#7A8BFF] gap-[12px]"
          >
            APPLY HERE
          </a>
        </div>

      </div>

        {/* Partners */}
        <div>
          <div className="mt-32 text-white">
            <h2 className="text-4xl font-bold mb-8">
              They joined us
            </h2>
          </div>
          <div className="mt-20 flex flex-wrap justify-center  gap-6 px-4">
            <div className="flex flex-col items-center">
            <img
              src="/emmanuel.png"
              alt="Frame 1"
              className="w-[256px] h-[256px] border-[5px] border-[#8099EC] rounded-full object-cover"
            />
             <p className="mt-2 text-[32px]  text-white leading-[100%] text-center font-normal custom-white">
             Emmanuel Aldeguer
            </p>
            <div className='flex justify-center items-center mt-4 w-[191px] h-[54px]'>
              <img
                src="/axone.svg"
                alt="Axone icon logo"
                className="mt-4 w-[191px] h-[54px]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
              <img
                src="/koko.png"
                alt="Frame 2"
                className="w-[256px] h-[256px] border-[5px] border-[#8099EC] rounded-full object-cover"
              />
              <p className="mt-2 text-[32px]  text-white leading-[100%] text-center font-normal custom-white">
                Koko
              </p>
              <div className='flex justify-center items-center mt-2 w-[275px] h-[60px]'>
              <img
                src="/safaridao1.png" 
                alt="SafariDao icon logo"
                className="mt-4 w-[275px] h-[70px] object-contain"
              />
            </div>

            </div>

            <div className="flex flex-col items-center">
              <img
                src="/etienne.png"
                alt="Frame 3"
                className="w-[256px] h-[256px] border-[5px] border-[#8099EC] rounded-full object-cover"
              />
                <p className="mt-2 text-[32px]  text-white leading-[100%] text-center font-normal custom-white">
                Etienne de Sainte Marie
              </p>
              <div className='flex justify-center items-center mt-4 w-[241px] h-[24px]'>
              <img
                src="/republik.png" 
                alt="SafariDao icon logo"
                className="mt-4 w-[241px] h-[24px]"
              />
            </div>
            </div>            
          </div>

          <div className="mt-20 flex flex-wrap justify-center  gap-6 px-4">
            
            <div className="flex flex-col items-center">
              <img
                src="/emilia.png"
                alt="Frame 1"
                className="w-[256px] h-[256px] border-[5px] border-[#8099EC] rounded-full object-cover"
              />
               <p className="mt-2 text-[32px]  text-white leading-[100%] text-center font-normal custom-white">
               Emilie-Alice Fabrizi
              </p>
              <div className='flex justify-center items-center mt-4 w-[175px] h-[93px]'>
              <img
                src="/thegoodtoken.png" 
                alt="The Good Token Society icon logo"
                className="mt-4 w-[175px] h-[93px]"
              />
            </div>


            </div>
            <div className="flex flex-col items-center">
              <img
                src="/nico.png"
                alt="Frame 1"
                className="w-[256px] h-[256px] border-[5px] border-[#8099EC] rounded-full object-cover"
              />
               <p className="mt-2 text-[32px]  text-white leading-[100%] text-center font-normal custom-white">
               Nico Gallardo
              </p>
              <div className='flex justify-center items-center mt-8 w-[180px] h-[49px]'>
                <img
                  src="/lottopgf.png" 
                  alt="LottoPGFDAO icon logo"
                  className="mt-4 w-[200px] h-[60px]"
                />
              </div>
            </div>
          </div>


    </div>
      </main>
    </div>
  );
}

export default App;