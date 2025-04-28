import { Layout, Type, Leaf, TextSelect, Moon, Users, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const platforms = [
  { name: "Ownership", value1: "Team/shareholders", value2: "You" },
  { name: "Governance", value1: "Centralized", value2: "Decentralized" },
  { name: "Value creation", value1: "Centralized at the top", value2: "Shared at the bottom" },
  { name: "Target audience", value1: "Privileged", value2: "Truly global" },
  { name: "Signup/onboarding", value1: "Free for all", value2: "Referral only" },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2634] to-[#3b4b8f]">
      {/* Header */}
      <header className="p-6">
        <Image src="/societylogo.png" alt="society Logo" width={100} height={100} className="w-25 h-25 mr-4" />
        {/* <div className="text-white font-bold text-2xl">
          the <span className="text-secondary">soci3ty</span>
        </div> */}
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl font-[900] mb-8 font-blaak text-white" >
          Let's make your vision
          <div className="text-[#8C9EFF] mt-2">a reality</div>
        </h1>

        <div className="max-w-2xl mx-auto mt-8 text-gray-300">
          <p className="text-xl mb-2 ">You are a visionary entrepreneur and</p>
          <p className="text-xl font-semibold mb-6">you want to have impact.</p>

          <p className="text-lg mb-4">The Soci3ty is the technological and community layer to make it happen.</p>
          <p className="text-lg italic">Find mentors, early adopters and financial resources.</p>
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
        <h2 className="text-4xl font-[900] mb-8 font-blaak">A platform built for visionaries</h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            The Soci3ty is made up of pioneers who are at the forefront of change and who want to
            <span className="font-semibold"> come together and support each other.</span>
          </p>
        </div>

        {/* Features Grid */}
        <table className="w-full bg-black rounded-xl overflow-hidden">
          <thead>
            <tr className="">
              <th className="p-4 text-left font-medium text-gray-500"></th>
              <th className="p-4 text-center text-[25px] font-[900] font-blaak text-[#95FFDF]">Other platforms</th>
              <th className="p-4 text-left font-medium text-gray-500">
                <div className="flex items-center gap-4">
                <Image src="/societylogo.png" alt="society Logo" width={200} height={200} className="w-25 h-25 mr-4" /> 
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {platforms.map((platform, index) => (
              <tr key={index} className={index < platforms.length - 1 ? "" : ""}>
                <td className="p-6 font-blaak text-white text-[25px] font-[900] text-right">{platform.name}</td>
                <td className="p-4 border-l text-white text-[25px] font-small text-center">{platform.value1}</td>
                <td className="p-4 border-l text-white text-[25px] font-normal text-center">{platform.value2}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Call to Action Button */}
        <div>
          <div>
            <Link
              href="https://www.society.xyz/"
              className="mt-16 inline-block bg-[#95FFDF] text-[#323232] px-[50px] py-[20px] rounded-[80px] text-lg font-semibold transition duration-300 hover:bg-[#7A8BFF] gap-[12px]"
            >
              JOIN THE NETWORK
            </Link>
          </div>

          {/* {Logo - icon} */}
          <div className="mt-20 inline-block w-[208px] h-[183px]">
            <Image
              src="/soci3ty3Logo.png"
              alt="society Logo"
              width={208}
              height={183}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mt-32 text-white">
            <h2 className="text-4xl font-[900] mb-8 font-blaak">A platform built for visionaries</h2>
          </div>

          {/* tables */}
          <div className="mt-16 flex items-center justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "A global pool of impact driven changemakers and talent to collaborate with",
                "Online and IRL events to network, grow and find collaborators",
                "A collective treasury governed by members to support impact driven initiatives",
                "Ability to organize your community in a clan to empower it and offer an opportunity for financial sustainability",
              ].map((text, index) => (
                <div
                  key={index}
                  className="p-6 text-white text-[20px] font-bold leading-[100%] text-center rounded-xl border-4 border-[#95FFDF] shadow-md flex items-center justify-center"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="mt-16 flex items-center justify-center">
            <Link
              href="https://www.society.xyz/"
              className="mt-13 inline-block bg-[#95FFDF] text-[#323232] px-[70px] py-[20px] rounded-[80px] text-lg font-semibold transition duration-300 hover:bg-[#7A8BFF] gap-[12px]"
            >
              APPLY HERE
            </Link>
          </div>
        </div>

        {/* Partners */}
        <div>
          <div className="mt-32 text-white">
            <h2 className="text-4xl font-[900] font font-blaak mb-8">They joined us</h2>
          </div>
          <div className="mt-20 flex flex-wrap justify-center gap-6 px-4">
            <div className="flex flex-col items-center">
              <Image
                src="/emmanuel.png"
                alt="Emmanuel Aldeguer"
                width={256}
                height={256}
                className="w-[256px] h-[256px] border-[5px] border-[#8099EC] rounded-full object-cover"
              />
              <p className="mt-2 text-[32px] text-white leading-[100%] text-center font-blaak font-[900]">
                Emmanuel Aldeguer
              </p>
              <div className="flex justify-center items-center mt-4 w-[191px] h-[54px]">
                <Image
                  src="/axone.svg"
                  alt="Axone icon logo"
                  width={191}
                  height={54}
                  className="mt-4 w-[191px] h-[54px]"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src="/etienne.png"
                alt="Etienne de Sainte Marie"
                width={256}
                height={256}
                className="w-[256px] h-[256px] border-[5px] border-[#8099EC] rounded-full object-cover"
              />
              <p className="mt-2 text-[32px] text-white leading-[100%] text-center font-blaak font-[900]">
                Etienne de Sainte Marie
              </p>
              <div className="flex justify-center items-center mt-4 w-[241px] h-[24px]">
                <Image
                  src="/republik.png"
                  alt="SafariDao icon logo"
                  width={241}
                  height={24}
                  className="mt-4 w-[241px] h-[24px]"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-6 px-4">
            <div className="flex flex-col items-center">
              <Image
                src="/emilia.png"
                alt="Emilie-Alice Fabrizi"
                width={256}
                height={256}
                className="w-[256px] h-[256px] border-[5px] border-[#8099EC] rounded-full object-cover"
              />
              <p className="mt-2 text-[32px] text-white leading-[100%] text-center font-blaak font-[900]">
                Emilie-Alice Fabrizi
              </p>
              <div className="flex justify-center items-center mt-4 w-[175px] h-[93px]">
                <Image
                  src="/thegoodtoken.png"
                  alt="The Good Token Society icon logo"
                  width={175}
                  height={93}
                  className="mt-4 w-[175px] h-[93px]"
                />
              </div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src="/nico.png"
                alt="Nico Gallardo"
                width={256}
                height={256}
                className="w-[256px] h-[256px] border-[5px] border-[#8099EC] rounded-full object-cover"
              />
              <p className="mt-2 text-[32px] text-white leading-[100%] text-center font-blaak font-[900]">
                Nico Gallardo
              </p>
              <div className="flex justify-center items-center mt-8 w-[180px] h-[49px]">
                <Image
                  src="/lottopgf.png"
                  alt="LottoPGFDAO icon logo"
                  width={200}
                  height={60}
                  className="mt-4 w-[200px] h-[60px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* End of partners section */}
      


      <div className="gradient-bg min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <div className="text-center max-w-2xl mx-auto">
            <div className="mt-32 text-#323232">
              <h2 className="font-blaak text-[36px] font-weight:400 leading-[100%] tracking-[0%] text-center">
                What can you do as a founder
              </h2>
            </div>
        

          <div className="coin-container">
            <Image src="/coin.png" alt="Coin" width={200} height={200} className="coin w-36 h-36 mx-auto" />
          </div>

          <h2 className="text-3xl font-bold mb-6 text-white tracking-tight flex items-center justify-center">
            You own
            <span className="ml-2 inline-block relative">
              <Image src="/societylogo.png" alt="Society Logo" width={100} height={100} className="w-25 h-25 mr-2" />
              <span className="absolute -top-[2px] left-0 w-full border-t-2 border-white"></span>
            </span>
          </h2>

          <p className="text-white/80 text-sm max-w-md mx-auto mb-20 leading-relaxed font-Neue Montreal">
            Unlike traditional companies, The Soci3ty will only emit shares once that can be acquired during an initial
            sale or by participating in The Soci3ty economic activity.
          </p>

          <div className="space-y-12 mb-20">
            <div>
              <h3 className="section-title text-[#8C9EFF] font-bold text-lg">Ownership</h3>
              <p className="section-text font-bold text-lg text-[#FFFFFF]">You own The Soci3ty and the assets</p>
            </div>

            <div>
              <h3 className="section-title text-[#8C9EFF] font-bold text-lg">Governance</h3>
              <p className="section-text font-bold text-lg text-[#FFFFFF]">
                Every month, you gain more governance power as the
                <br />
                treasury grows.
              </p>
            </div>

            <div>
              <h3 className="section-title text-[#8C9EFF] font-bold text-lg">Utility</h3>
              <p className="section-text font-bold text-lg text-[#FFFFFF]">
                You can also use Arrow to perform important actions
                <br />
                (sponsor citizens, create a clan, etc).
              </p>
            </div>
          </div>

          <div>
            <Link
              href="https://www.society.xyz/"
              className="mt-16 inline-block bg-[#95FFDF] text-[#323232] px-[50px] py-[20px] rounded-[80px] text-lg font-semibold transition duration-300 hover:bg-[#7A8BFF] gap-[12px]"
            >
              JOIN THE COMMUNITY
            </Link>
          </div>
        </div>
      </div>
      </main>
    </div>
    
  )
}
