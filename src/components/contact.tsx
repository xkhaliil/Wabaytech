import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
function Contact() {
  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="max-h-[582px] flex flex-col items-start justify-between p-14">
          <div className="container">
            <div className="flex flex-col gap-4">
              <div className="font-bold text-4xl md:text-6xl lg:text-[70px] max-w-full lg:max-w-[637px] dark:text-white text-black">
                Créons quelque chose de cool !
              </div>
              <a
                href="mailto:Wabaytech@gmail.com"
                className="text-lg md:text-xl lg:text-[24px] max-w-full lg:max-w-[556px] font-semibold underline dark:text-white text-black"
              >
                Wabaytech@gmail.com
              </a>
              <a
                href="tel:+21653887723"
                className="text-lg md:text-xl lg:text-[24px] max-w-full lg:max-w-[556px] font-semibold dark:text-white text-black"
              >
                +216 53887723
              </a>
              <p className="text-lg md:text-xl lg:text-[24px] max-w-full lg:max-w-[556px] font-semibold dark:text-white text-black">
                24 Immeuble Titanium Les Jardins du Lac 2 , 1053 Tunis
              </p>
            </div>
          </div>
        </div>
        <div className="h-[582px] flex flex-col items-start justify-between p-16">
          <div className="text-[24px] font-semibold max-w-[254px]  dark:text-white text-black">
            Envoyer un message
          </div>
          <div className="space-y-8 max-w-[622.01px] w-full">
            <Input
              type="text"
              id="name"
              className="block w-full px-0 py-2 text-black bg-transparent border-0 border-b border-black rounded-none dark:border-white focus:ring-0 dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70"
              placeholder="Quel est ton nom ?"
            />

            <Input
              type="text"
              id="company"
              className="block w-full px-0 py-2 text-black bg-transparent border-0 border-b border-black rounded-none dark:border-white focus:ring-0 dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70"
              placeholder="What's your company name ?"
            />

            <Input
              type="email"
              id="email"
              className="block w-full px-0 py-2 text-black bg-transparent border-0 border-b border-black rounded-none dark:border-white focus:ring-0 dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70"
              placeholder="Quel est ton email ?"
            />

            <Textarea
              id="message"
              className="block w-full bg-transparent border-0 border-b border-black dark:border-white rounded-none focus:ring-0 px-0 py-2 text-black dark:text-white placeholder:text-black/70 dark:placeholder:text-white/70 resize-none min-h-[100px]"
              placeholder="Votre message"
            />
          </div>

          <Button className="w-full py-6 mt-12 text-lg text-black transition-colors shadow-none dark:text-white">
            Soumettre
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
