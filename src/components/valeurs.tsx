function Valeurs() {
  return (
    <div className="mb-10">
      <div className="hidden dark:block">
        <div
          className="w-[369px] h-[98px] relative rounded-tr-[10px] rounded-br-[10px] bg-black"
          style={{ boxShadow: "0px 0px 20px 0 #fff" }}
        >
          <p className="absolute left-[70px] top-[19px] text-[40px] font-medium text-left text-white">
            Nos Valeurs
          </p>
        </div>
      </div>
      <div className="block dark:hidden">
        <div
          className="w-[369px] h-[98px] relative rounded-tr-[10px] rounded-br-[10px] bg-[#fffdfd]"
          style={{ boxShadow: "0px 10px 20px 0 rgba(0,0,0,0.25)" }}
        >
          <p className="absolute left-[70px] top-[19px] text-[40px] font-medium text-left text-black">
            Nos Valeurs
          </p>
        </div>
      </div>
      <div className="max-w-[1089px] h-full bg-white dark:bg-black rounded-xl shadow-lg dark:shadow-white shadow-gray-500 flex flex-col items-start p-5 mt-10 ml-10 md:ml-20 space-y-7 mr-10">
        <div className="h-full text-2xl font-bold text-black dark:text-white">
          Innovation
        </div>
        <div className="text-[20px] max-w-[1017px] h-full dark:text-white text-black">
          Nous croyons en l'importance de l'innovation pour rester compétitifs
          et offrir des solutions de pointe à nos clients . Nous investissons
          continuellement dans la recherche et le développement pour rester à la
          pointe de la technologie.
        </div>
      </div>
      <div className="flex items-end justify-end">
        <div className="max-w-[1089px] h-full bg-white dark:bg-black rounded-xl shadow-lg dark:shadow-white shadow-gray-500 flex flex-col items-start p-5 mt-10 ml-10 md:ml-20 space-y-7 mr-10">
          <div className="h-full text-2xl font-bold text-black dark:text-white">
            Qualité
          </div>
          <div className="text-[20px] max-w-[1017px] h-full dark:text-white text-black">
            La qualité est au cœur de tout ce que nous faisons. Nous nous
            engageons à fournir des résultats exceptionnels et à dépasser les
            attentes de nos clients
          </div>
        </div>
      </div>
      <div className="max-w-[1089px] h-full bg-white dark:bg-black rounded-xl shadow-lg dark:shadow-white shadow-gray-500 flex flex-col items-start p-5 mt-10 ml-10 md:ml-20 space-y-7 mr-10">
        <div className="h-full text-2xl font-bold text-black dark:text-white">
          Engagement
        </div>
        <div className="text-[20px] max-w-[1017px] h-full dark:text-white text-black">
          Nous nous engageons à fournir un service client exceptionnel et à
          bâtir des relations durables avec nos partenaires . Notre objectif est
          de devenir un partenaire de confiance pour nos clients
        </div>
      </div>
    </div>
  );
}

export default Valeurs;
