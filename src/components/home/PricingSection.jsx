"use client";

import React, { useState } from "react";
import { pricingPlans } from "@/lib/siteData";
import { Link } from "react-router-dom";

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-20 px-6 md:px-12 max-w-[1300px] mx-auto">
      
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        PRICING PLANS
      </h2>

      {/* TOGGLE */}
      <div className="flex justify-center mb-14">
        <div className="flex items-center bg-gray-100 rounded-full p-1">
          
          <button
            onClick={() => setAnnual(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              !annual ? "bg-black text-white" : "text-gray-500"
            }`}
          >
            Monthly
          </button>

          <button
            onClick={() => setAnnual(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              annual ? "bg-black text-white" : "text-gray-500"
            }`}
          >
            Yearly
          </button>

          <span className="ml-3 text-sm text-gray-400">Save 25%</span>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, i) => {
          const price = annual ? plan.yearly : plan.monthly;

          return (
            <div
              key={i}
              className={`rounded-2xl overflow-hidden flex flex-col ${
                plan.popular
                  ? "bg-gradient-to-b from-green-500 to-red-500 text-white"
                  : plan.isProject
                  ? "bg-black text-white"
                  : "bg-white border"
              }`}
            >
              
              {/* HEADER */}
              <div className="flex justify-between items-center px-6 pt-6 pb-4">
                <h3 className="font-semibold text-lg">{plan.name}</h3>

                {plan.popular && (
                  <span className="bg-white text-green-500 text-xs px-3 py-1 rounded-full font-semibold">
                    Popular
                  </span>
                )}
              </div>

              <hr className={`mx-6 ${
                plan.popular || plan.isProject
                  ? "border-white/20"
                  : "border-gray-200"
              }`} />

              {/* PRICE */}
              <div className="px-6 py-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">
                    ${price.toLocaleString()}
                  </span>

                  <span className="text-sm opacity-70">
                    {plan.isProject
                      ? "starting at"
                      : "/ month"}
                  </span>
                </div>

                <p className="text-sm mt-3 opacity-80">
                  {plan.description}
                </p>
              </div>

              {/* FEATURES */}
              <div className="px-6 flex-1">
                <p className="text-xs uppercase mb-4 opacity-60">
                  What's included:
                </p>

                <ul className="space-y-2 text-sm">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>✓ {f}</li>
                  ))}
                </ul>
              </div>

              {/* BUTTON */}
              <div className="p-6">
               <Link
                to="/contact"
                className={`flex items-center justify-center w-full py-3 rounded-full font-medium transition ${
                  plan.popular
                    ? "bg-white text-green-500"
                    : plan.isProject
                    ? "bg-white text-black"
                    : "border hover:bg-gray-100"
                }`}
              >
                ○ Get Started
              </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}