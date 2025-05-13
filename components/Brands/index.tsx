"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import styles from "./brands.module.css";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-11 dark:border-y-strokedark dark:bg-black overflow-hidden">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className={styles.scrollContainer}>
            <div className={styles.scrollTrack}>
              {/* First set of 6 brands */}
              {brandData.map((brand, key) => (
                <div key={key} className={styles.scrollItem}>
                  <SingleBrand brand={brand} />
                </div>
              ))}
              {/* Duplicate set for seamless looping */}
              {brandData.map((brand, key) => (
                <div key={`duplicate-${key}`} className={styles.scrollItem}>
                  <SingleBrand brand={brand} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;


