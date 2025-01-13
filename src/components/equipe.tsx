import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
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
      <main className="">
        <div className="container flex flex-col items-center justify-center mx-auto">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 ">
            {/* Team Member */}
            <div className="overflow-hidden ">
              <img
                src={person1}
                alt="Person 1"
                className="max-w-[303px] max-h-[303px] object-cover"
              />
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">
                  Darrell Steward
                </h3>
                <p className="mb-4 text-[#635226]">Co-founder</p>
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
            <div className="overflow-hidden ">
              <img
                src={person2}
                alt="Person 2"
                className="max-w-[303px] max-h-[303px] object-cover"
              />
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">
                  Darrell Steward
                </h3>
                <p className="mb-4 text-[#635226]">Co-founder</p>
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
            <div className="overflow-hidden ">
              <img
                src={person3}
                alt="Person 2"
                className="max-w-[303px] max-h-[303px] object-cover"
              />
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">
                  Darrell Steward
                </h3>
                <p className="mb-4 text-[#635226]">Co-founder</p>
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
            <div className="overflow-hidden ">
              <img
                src={person4}
                alt="Person 2"
                className="max-w-[303px] max-h-[303px] object-cover"
              />
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">
                  Darrell Steward
                </h3>
                <p className="mb-4 text-[#635226]">Co-founder</p>
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
