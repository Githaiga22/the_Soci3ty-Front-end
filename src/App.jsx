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
        <div >
          <a
            href="https://www.society.xyz/"
            className="mt-16 inline-block bg-[#95FFDF] text-#323232 px-[26px] py-[13px] rounded-[80px]  text-lg font-semibold transition duration-300 hover:bg-[#7A8BFF] gap-[12px]"
          >
            JOIN THE NETWORK
          </a>
        </div>
        {/* {Logo - icon} */}
        <div className="mt-16 inline-block w-[208px] h-[183px]">
          <img src="/soci3ty3Logo.png" alt="society Logo" className="w-25 h-25 mr-4" />
        </div>
      </main>
    </div>
  );
}

export default App;