import React from 'react'
import { useEffect }  from "react";
export default function CgvDeux() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
  return (
    <div className="flex flex-row">
      <div className=" w-96 bg-gray-300">
        <ul className="">
            <li tabIndex={0} className="collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content" href="#">1. Dispositions générales</a>
                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p tabIndex={0}>hello</p>
                </div>
            </li>
            <li tabIndex={0} className=" collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content" href="#">2. Identification du fournisseur</a>
                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p tabIndex={0}>hello</p>
                </div>
            </li>
            <li tabIndex={0} className=" collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content" href="#">mako</a>
                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p tabIndex={0}>hello</p>
                </div>
            </li>
            <li tabIndex={0} className=" collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content" href="#">mako</a>
                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </li>
            <li tabIndex={0} className=" collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content" href="#">mako</a>
                 <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </li>
            <li tabIndex={0} className=" collapse collapse-plus">
                <input type="checkbox" className="peer" />
                <a className="hover:text-white collapse-title dark:bg-black/0 text-primary-content peer-checked:bg-slate-400 peer-checked:text-secondary-content" href="#">mako</a>
                 <div className="collapse-content dark:bg-black/0  text-primary-content peer-checked:bg-slate-400 peer-checked:text-secondary-content">
                    <p>hello</p>
                </div>
            </li>
        </ul>
      </div>
        <section  className="bg-white dark:bg-black/0 px-0">
        <div className="lg:py-3 mx-auto max-w-screen-xl sm:py-16 lg:px-4">
            <h2 id="grandUnCgv" className="mb-8 text-5xl tracking-tight font-extrabold text-white">
            Conditions générales de ventes
            </h2>
            <div className="pt-8 text-left border-t border-gray-700 leading-9">
            <div>
                <div  className="mb-10">
                <h3 className="flex items-center mb-4 text-4xl font-medium text-gray-900 dark:text-white">
                1. Dispositions générales 
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                    asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                    quaerat maxime repudiandae molestiae assumenda ex. Officiis
                    dolorum eius sequi provident nostrum itaque.
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                    asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                    quaerat maxime repudiandae molestiae assumenda ex. Officiis
                    dolorum eius sequi provident nostrum itaque.
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                    asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                    quaerat maxime repudiandae molestiae assumenda ex. Officiis
                    dolorum eius sequi provident nostrum itaque.
                </p>
                <p id="grandDeuxCgv" className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                    asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                    quaerat maxime repudiandae molestiae assumenda ex. Officiis
                    dolorum eius sequi provident nostrum itaque.
                </p>
                </div>
                <div className="mb-10">
                <h3  className="flex items-center mb-4 text-4xl font-medium text-gray-900 dark:text-white">
                2. Identification du fournisseur 
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                    Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                    Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
                </p>
                <p id="grandTroisCgv" className="text-gray-500 dark:text-gray-400 mb-4  text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                    Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                    Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
                </p>
                </div>
                <div className="mb-10">
                <h3 className="flex items-center mb-4 text-4xl font-medium text-gray-900 dark:text-white">
                    3. Renseignements sur les produits et leur disponibilité 
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                    Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                    Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                    Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                    Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                    Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                    Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id molestias odio cumque temporibus, minus nam alias nisi? Expedita atque minus possimus accusantium mollitia molestias suscipit, omnis repudiandae quas ratione harum?
                    Possimus aspernatur cumque blanditiis magnam impedit at mollitia laudantium sequi perspiciatis ut, dolores veritatis porro voluptates natus molestiae ea quas a temporibus inventore nam quidem eum sit nihil iste. Natus.
                    Necessitatibus eius quis doloremque iste quasi sapiente quod quidem architecto culpa odit aperiam modi tenetur nesciunt enim optio in perspiciatis alias corporis, ipsam fugit mollitia eum beatae. Assumenda, labore placeat.
                    Ea ex repudiandae molestiae amet aut laudantium nam exercitationem praesentium atque doloribus, hic eaque sunt illo qui quibusdam unde, ut porro repellat modi natus? Odio itaque dolor iste autem ab!
                    Placeat voluptates assumenda, odit optio molestiae vero aliquam eaque doloremque illo. Velit illum asperiores, molestiae commodi nihil ex expedita saepe voluptatibus doloribus sint ab enim sed cupiditate officia! Eum, architecto!
                    Autem, numquam recusandae nemo inventore perferendis sed necessitatibus nisi hic debitis voluptate esse, voluptas laudantium nulla ea dolores totam voluptatum iste. Nostrum sed perspiciatis, esse cupiditate earum consequatur rem aut.
                    Quia voluptates iure iste qui cum aliquid, provident pariatur facere modi laudantium quod libero eos dolorum blanditiis veniam vitae aut accusantium atque et obcaecati labore tenetur nostrum expedita! Ea, molestiae.
                    Consequatur officiis dolores repellendus? Consequatur impedit pariatur aliquam quaerat repudiandae aperiam eos reprehenderit voluptates beatae quae est hic, ducimus quod sint voluptatum provident expedita! Sapiente quae blanditiis adipisci. Neque, qui.
                    Labore aperiam suscipit sint repellat deleniti inventore qui, maiores reprehenderit in quam delectus eius impedit numquam perspiciatis dolore beatae nemo officiis quis quos ad animi. Ipsa esse aliquam quia sint?
                    Quod placeat numquam, voluptatum, tenetur incidunt velit facilis architecto ducimus eius ipsa tempora itaque impedit dolorum! Harum, cupiditate. Repellendus, ad? Ullam tenetur ad quod itaque id optio hic mollitia provident?
                    Iure ullam quibusdam vero harum quo, eum beatae qui aliquid, tempore fugit architecto laboriosam a fuga mollitia nihil asperiores ducimus necessitatibus alias reprehenderit rem possimus debitis officiis quos! Fuga, facilis.
                    Eum hic, atque ratione, tenetur, dignissimos excepturi deserunt natus veniam eius ex culpa laborum quo non! Eos eveniet fugit, facilis, iusto earum error sit impedit voluptatum pariatur mollitia nisi incidunt.
                    Maxime itaque quae ducimus rerum magni! Inventore et iure ipsam impedit aliquam, fugit sit, recusandae architecto accusamus atque fuga alias facilis quaerat ea consectetur, accusantium dolores tempora pariatur porro! Aliquid?
                    Quibusdam, saepe. Inventore omnis nemo quas repudiandae aliquid explicabo, rem assumenda blanditiis magnam cupiditate temporibus perferendis reprehenderit ut impedit iste illo molestias ipsum iusto, quisquam nam laudantium. Similique, est nulla.
                    Porro sapiente similique dolorem voluptas inventore sed cupiditate blanditiis veniam ad vitae repudiandae tempore eaque, quibusdam cumque numquam voluptate suscipit ipsa voluptatum optio illo libero iusto officiis. Ad, ut eius!
                    Cumque amet eligendi ad voluptates molestias nulla inventore vel rem illo, dolore veniam a ipsa quibusdam, fugiat recusandae enim deserunt ratione nihil et fuga sunt assumenda saepe repellendus eveniet! Reiciendis.
                    Facilis in nostrum sapiente a eum, blanditiis, suscipit doloremque fugit sed dolores dicta autem, repellat voluptatibus! Doloremque ut, eos recusandae odit voluptates quam natus obcaecati maxime laborum eius, quos voluptate!
                    Ullam quasi, temporibus inventore voluptatibus doloribus unde. Non repudiandae ex rem dolorum deserunt, explicabo vel molestiae, eius similique quaerat dolorem ut ab obcaecati qui laborum laudantium ipsa, sequi quisquam debitis?
                    Ipsam fugiat quis soluta modi nostrum, harum itaque sunt cumque in eius repellat voluptatem aliquam sequi animi hic, accusantium provident unde incidunt? Fuga dolore natus dolorem, tempora voluptatum cupiditate in?
                    Quaerat tenetur voluptatibus veritatis incidunt quibusdam, sed quis ducimus repellendus explicabo ad. Ab quibusdam tempora eaque consectetur voluptatem cupiditate odio neque quos. Aperiam id alias, earum enim velit libero totam!
                    Totam vitae ad qui accusantium, accusamus, doloribus quis perspiciatis sit quo ea saepe rerum necessitatibus esse similique, aperiam vel mollitia corporis suscipit neque inventore temporibus nobis sapiente! Commodi, quae quis?
                    Placeat laudantium nostrum tempore hic inventore architecto voluptates in? Ratione hic minus nobis illo expedita nisi, quae molestiae praesentium pariatur, doloremque distinctio voluptate ad facilis aut? Culpa quaerat est voluptas.
                    Nemo quo labore est voluptate odit quam exercitationem earum natus at repellat beatae molestiae corporis, laborum unde, omnis, expedita nesciunt consequuntur similique! Atque at doloribus dicta et quam magni eos.
                    Nostrum animi, excepturi delectus sunt perferendis nisi mollitia incidunt necessitatibus repudiandae expedita, porro sed, ducimus veniam! Aliquid natus inventore cupiditate consequuntur accusamus eos! Consequuntur ipsam laboriosam voluptas laborum assumenda explicabo.
                    Placeat exercitationem magni quasi sit dolore ea explicabo quae perferendis odit, omnis possimus ab quibusdam nisi ipsum quos dolores sunt facere earum. Facere tenetur iste ullam laudantium nihil quibusdam sit.
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
                <p id="grandQuatreCgv" className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                    asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                    quaerat maxime repudiandae molestiae assumenda ex. Officiis
                    dolorum eius sequi provident nostrum itaque.
                </p>
                </div>
                <div className="mb-10">
                <h3 className="flex items-center mb-4 text-4xl font-medium text-gray-900 dark:text-white">
                    4. Prix 
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, quo. 
                    Perferendis fugiat beatae fuga quibusdam ea, eum nisi sint qui laborum quis dolorum.
                    Quisquam impedit necessitatibus cupiditate vitae dignissimos ad?
                </p>
                <p className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Find out more information by{" "}
                    <a
                    
                    className="font-medium underline text-primary-600 dark:text-primary-500 hover:no-underline"
                    >
                    reading the license
                    </a>
                    .
                </p>
                <p id="grandCinqCgv" className="text-gray-500 dark:text-gray-400 mb-4 text-lg">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                    asperiores, nisi aliquam saepe porro praesentium libero, ipsum
                    quaerat maxime repudiandae molestiae assumenda ex. Officiis
                    dolorum eius sequi provident nostrum itaque.
                </p>
                </div>
            </div>
            <div>
                <div className="mb-10">
                <h3 className="flex items-center mb-4 text-4xl font-medium text-gray-900 dark:text-white">
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
                <h3 className="flex items-center mb-4 text-4xl font-medium text-gray-900 dark:text-white">
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
                <h3 className="flex items-center mb-4 text-4xl font-medium text-gray-900 dark:text-white">
                    
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
                <h3 className="flex items-center mb-4 text-4xl font-medium text-gray-900 dark:text-white">
                    
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
    </div>
  )
}
