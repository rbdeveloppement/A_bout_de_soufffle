import React, { useEffect }  from "react";

const Cgv = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
   <section  className="bg-white dark:bg-black/0 px-0 leading-none">
      <div className="py-8 mx-auto lg:max-w-screen-xl md:max-w-screen-lg md:pt-10 sm:pt-4 sm:px-5 lg:px-0">
        <nav className="pb-5 mb-11 sm:pb-2 md:mb-5 md:mt-5 sm:mt-5 lg:mt-2">
          <ul className="flex row-auto justify-around">
            <li className=" text-gray-900 dark:text-white px-3"><a href="#grandUnCgv">1. Dispositions générales </a></li>
            <li className=" text-gray-900 dark:text-white px-3"><a href="#grandDeuxCgv">2. Identification du fournisseur </a></li>
            <li className=" text-gray-900 dark:text-white px-3"><a href="#grandTroisCgv">3. Renseignements sur les produits et leur disponibilité </a></li>
            <li className=" text-gray-900 dark:text-white px-3"><a href="#grandQuatreCgv">4. Prix </a></li>
            <li className=" text-gray-900 dark:text-white px-3"><a href="#grandCinqCgv">5. Exécution du contrat  </a></li> 
            <li className=" text-gray-900 dark:text-white px-3"><a href="#grandSixCgv">6. Mode de paiement  </a></li>
          </ul>
        </nav>
        <div className="pt-8 text-left border-gray-700">
          <h2 id="grandUnCgv" className="mb-8 text-4xl tracking-tight font-extrabold text-white">
            Conditions générales de ventes
          </h2>
          <div>
            <div  className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              1. Dispositions générales 
              </h3>
              <p  className="text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                quaerat maxime repudiandae molestiae assumenda ex. Officiis
                dolorum eius sequi provident nostrum itaque.
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                quaerat maxime repudiandae molestiae assumenda ex. Officiis
                dolorum eius sequi provident nostrum itaque.
              </p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                quaerat maxime repudiandae molestiae assumenda ex. Officiis
                dolorum eius sequi provident nostrum itaque.
              </p>
              <p id="grandDeuxCgv" className="text-gray-500 dark:text-gray-400 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                quaerat maxime repudiandae molestiae assumenda ex. Officiis
                dolorum eius sequi provident nostrum itaque.
              </p>
            </div>
            <div className="mb-10">
              <h3  className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
              2. Identification du fournisseur 
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
              </p>
              <p id="grandTroisCgv" className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                3. Renseignements sur les produits et leur disponibilité 
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Feel free to{" "}
                <a
                  className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  contact us
                </a>{" "}
                and we'll help you out as soon as we can.
              </p>
              <p id="grandQuatreCgv" className="text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                quaerat maxime repudiandae molestiae assumenda ex. Officiis
                dolorum eius sequi provident nostrum itaque.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                4. Prix 
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Find out more information by{" "}
                <a
                  
                  className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  reading the license
                </a>
                .
              </p>
              <p id="grandCinqCgv" className="text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                quaerat maxime repudiandae molestiae assumenda ex. Officiis
                dolorum eius sequi provident nostrum itaque.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                5. Exécution du contrat
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                The free updates that will be provided is based on the{" "}
                <a
                  
                  className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  roadmap
                </a>{" "}
                that we have laid out for this project. It is also possible that
                we will provide extra updates outside of the roadmap as well.
              </p>
              <p id="grandSixCgv" className="text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                quaerat maxime repudiandae molestiae assumenda ex. Officiis
                dolorum eius sequi provident nostrum itaque.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                6. Mode de paiement
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                The{" "}
                <a
                  className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  free version
                </a>{" "}
                of Windster includes a minimal style guidelines, component
                variants, and a dashboard page with the mobile version alongside
                it.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                You can use this version for any purposes, because it is
                open-source under the MIT license.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                quaerat maxime repudiandae molestiae assumenda ex. Officiis
                dolorum eius sequi provident nostrum itaque.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
              </p>
              <p id="cgv" className="text-gray-500 dark:text-gray-400">
                Find out more information by{" "}
                <a
                  className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                >
                  reading the license
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cgv;
