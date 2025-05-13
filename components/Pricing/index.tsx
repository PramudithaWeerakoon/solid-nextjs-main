"use client";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===== Pricing Table Start ===== --> */}
      <section className="overflow-hidden pb-20 pt-15 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `PRICING PLANS`,
                subtitle: `Enterprise Solutions`,
                description: `We offer scalable enterprise software solutions tailored to your business requirements. Choose the plan that best suits your organization's needs and growth trajectory.`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <div className="relative mx-auto mt-15 max-w-[1207px] px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -bottom-15 -z-1 h-full w-full">
            <Image
              fill
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-7.5 lg:flex-nowrap xl:gap-12.5">
            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-Solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Starter Package
              </h4>
              <p>Perfect for small businesses looking to digitize their operations.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Basic CRM Implementation
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Website Development
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Email Support
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Quarterly Maintenance
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
                onClick={() => window.open('https://wa.me/94775206659', '_blank')}
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Request Quote
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-Solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              <div className="absolute -right-3.5 top-7.5 -rotate-90 rounded-bl-full rounded-tl-full bg-primary px-4.5 py-1.5 text-metatitle font-medium uppercase text-white">
                popular
              </div>

             
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Business Package
              </h4>
              <p>Comprehensive solution for growing businesses with complex needs.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Full ERP Implementation
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Mobile App Development
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    24/7 Priority Support
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Monthly Maintenance
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
                onClick={() => window.open('https://wa.me/94775206659', '_blank')}
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Request Quote
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>

            {/* <!-- Pricing Item --> */}
            <div className="animate_top group relative rounded-lg border border-stroke bg-white p-7.5 shadow-Solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[45%] lg:w-1/3 xl:p-12.5">
              
              <h4 className="mb-2.5 text-para2 font-medium text-black dark:text-white">
                Enterprise Package
              </h4>
              <p>Complete enterprise solution with custom development and dedicated support.</p>

              <div className="mt-9 border-t border-stroke pb-12.5 pt-9 dark:border-strokedark">
                <ul>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Custom Enterprise Software
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Multi-platform Integration
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Dedicated Support Team
                  </li>
                  <li className="mb-4 text-black last:mb-0 dark:text-manatee">
                    Weekly Maintenance & Updates
                  </li>
                </ul>
              </div>

              <button
                aria-label="Get the Plan button"
                className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
                onClick={() => window.open('https://wa.me/94775206659', '_blank')}
              >
                <span className="duration-300 group-hover/btn:pr-2">
                  Request Quote
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Pricing Table End ===== --> */}
    </>
  );
};

export default Pricing;
