import ceo from "../assets/ceo.jpg";
import cto from "../assets/cto.jpg";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
function Equipe() {
  return (
    <div className="mt-20 ">
      <div className="hidden mb-20 dark:block">
        <div
          className="w-[369px] h-[98px] relative rounded-tr-[10px] rounded-br-[10px] bg-black"
          style={{ boxShadow: "0px 0px 20px 0 #fff" }}
        >
          <p className="absolute left-[70px] top-[19px] text-[40px] font-semibold text-left text-[#fff9f9]">
            Équipe
          </p>
        </div>
      </div>
      <div className="block mb-20 dark:hidden">
        <div
          className="w-[369px] h-[98px] relative rounded-tr-[10px] rounded-br-[10px] bg-white"
          style={{ boxShadow: "0px 0px 20px 0 rgba(0,0,0,0.25)" }}
        >
          <p className="absolute left-[70px] top-[19px] text-[40px] font-semibold text-left text-black">
            Équipe
          </p>
        </div>
      </div>
      <main className="px-4">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-items-center max-w-7xl">
            {/* Team Member */}
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={ceo}
                  alt="Ceo"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  Bayrem Ben Algia
                </h3>
                <p className="mb-4 text-[#635226] dark:text-gray-300">CEO</p>
                <div className="flex justify-start space-x-4">
                  <a href="#" className="text-black hover:text-blue-500">
                    <Facebook size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-black hover:text-blue-400">
                    <Twitter size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-black hover:text-blue-700">
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-black hover:text-pink-500">
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member */}
            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={cto}
                  alt="Cto"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                  Walid Kacem
                </h3>
                <p className="mb-4 text-[#635226] dark:text-gray-300">CTO</p>
                <div className="flex justify-start space-x-4">
                  <a href="#" className="text-black hover:text-blue-500">
                    <Facebook size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-black hover:text-blue-400">
                    <Twitter size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-black hover:text-blue-700">
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                  <a href="#" className="text-black hover:text-pink-500">
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Equipe;
