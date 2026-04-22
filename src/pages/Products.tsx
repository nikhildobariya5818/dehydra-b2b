/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = [
  {
    id: "dehydrated-vegetables",
    title: "Dehydrated Vegetables",
    description: "Premium quality flakes, powders, and granules for soup mixes, seasonings, and processed foods.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBMJ-AlI33p13B_2QRQIyMT19e_NgMgmsa9i4hqPe_IctWVdzET8E8JM5-TUidNfSvVs64asC6o_7Uq30rRITODwZ7xAeWyn_lEFZvkZiJIjQTEQ4C_xezMODiCO290a66RfEIlEhsApR5ltKn0vCp4oXLq63MGlL3j-0-rAXGGZ-nwblHc_2LJYqhLGnDvj6Cc7DS4hM2HaeS5sY5TvbRsev3yASMVYfaDOBdJHHtNoGHFGHDXG5FoGpfMmJ-Y6gh5pJG3li_eqg",
    alt: "Dehydrated vegetable flakes"
  },
  {
    id: "fried-onion-garlic",
    title: "Fried Onion & Garlic",
    description: "Crispy, shelf-stable fried onion and garlic variants processed with minimal oil absorption for culinary excellence.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWpjHvKZJIT2knz2W_WS0LMEmu5Xq1QJ1gGNW3J1L89kSflgleW07541Gtos9b9L_JhFLrwCZZur-BxqgwWLZBNVUXUA6QE1BAY_dfCPhvGlBTUcj5tUWF5dAf3uRPDZVxN9_EJB4sNnMpg_iz4HiY3USLRbWHXAZNPl0mSGFE-osLSAU900FzOT_y6m0DC_euE_4gT11moflebK90-tGh5u8ayi7wrnI6kNI0y8cQLdmXIqJYPARewLtiFioPEsRXduuPe0va7AA",
    alt: "Fried onion rings and garlic"
  },
  {
    id: "fruit-slices-powders",
    title: "Fruit Slices & Powders",
    description: "Concentrated nutrition in fruit form, perfect for confectionery, baking, and health supplements.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvjEIOB7qwkA8-383d-gYuaeU-bjFkXyQuDlr9-q09vMbu5hfhbs3O3_amMCPoC6xBIZ2jAL_RWlkDLxOhS0Yv6wXF8-s22-0eVkrTv8UlugIPmLIEcveOfhj1zcw2pC3HpHd8Coc9jho9YnQ3z0Ra-dPJz3uHgItxMEtrdx_52rBIyKjv5oRxHDb-be3sherq-WFRXiLVYy22dq0ob9LTYlgJUltE9X0lmLxliPeQErZsl7lINMCwrDZ2NKopl8qbQyyw1dCVwlI",
    alt: "Dried mango and fruit powders"
  },
  {
    id: "leaves-herb-powders",
    title: "Leaves & Herb Powders",
    description: "Potent aromatic leaves and herbs dried at low temperatures to maintain high essential oil content.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5aLffVN532FO5S22VAzA6n8uLqcG1Kvt3xolG44Q3dBr-8ENlwzF1Us5vXcWAUV2KG7h7Azj_4O8g6gZ9zdT2rzijLcRRZC5YPxwtKDs04Kbwsmb03NoHRfBIzCsN1IVQAI2-5KH1NQufFEcYqeqXKRy72lxpLy9epl7fdQAOiXF7rvPbgYqaeTzxPCOWPKEYGnYxWv7Xs0s_piCLa-9ACDiJJQxvZ31vFAuj3hHmIniZSEQ5LpHHf7UN0Trk1U_hPK2fEN7o4J4",
    alt: "Dried basil and oregano"
  },
  {
    id: "spices-whole-spices",
    title: "Spices & Whole Spices",
    description: "Authentic whole and ground spices sourced from dedicated plantations for uncompromising potency.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6KOF2AWePHrw7QnuWAg-QG0aseYwXy7lvIlsYeT77qRSAycfKCW2YGYiEF2hx_Nbsf4r8F1fjBAq_FimshbEod_6Zf_HXo0iad91lLdNZENdAh7tCOSYPJzdd7bPVMO9n1wIq8jhl9o3h3giFx3Hn0-k5eXKP0DKzTUyOFn4HFQPPiQI-5AYz-wQhrpl4libJ56BbOCDKu-LaFthY9tdUu4k7cMgIgYJcH0BRN4oI_cwbEd0_Aq6uZ0NchLuFJ0puC6Ea0moN2xs",
    alt: "Whole black peppercorns and turmeric"
  },
  {
    id: "oil-seeds-cereals",
    title: "Oil Seeds & Cereals",
    description: "Mechanically cleaned and graded oil seeds and cereals for industrial food production and animal feed.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs18YQomXb0QCF6E2je43RoiFd3L0CGaSXQliS5aIhBVjnYSJuX1MyrxtMQ86nmgRp5st63waRLhvKhdD5iiZPGZTnK09u1WOCcEK5W9vsdKVQesUaZFdlwvco5LxEatXyCAT6aGXpYAye14eI1_JEApsZDEEqBLTgRJ7luS2B7_QFHtxrwbsP_UOA8lqTzrDCBMMJoe3X2PrFFeAvE4yc15gxqgZ2oKvNCL7dRBZPTdiqI4KvfNs8RvaHHM78IqiCNq7_Y_ipEyg",
    alt: "Sesame and sunflower seeds"
  }
];

export const Products = () => {
  return (
    <div className="bg-background pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-2xl"
        >
          <span className="label-sm text-secondary uppercase tracking-[0.2em] mb-4 block">Institutional Organic</span>
          <h1 className="text-h1 text-primary mb-6">Product Categories</h1>
          <p className="text-body-lg text-on-surface-variant">
            Our industrial-grade dehydration process preserves the essence of nature while meeting the rigorous technical specifications of global export markets.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category, i) => (
            <motion.div 
              key={category.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-surface-container-lowest border border-outline-variant p-4 flex flex-col transition-all duration-300 hover:border-primary hover:shadow-xl hover:-translate-y-1"
            >
              <Link to={`/products/${category.id}`} className="block">
                <div className="aspect-video overflow-hidden mb-6 bg-surface-container rounded-sm">
                  <img 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    src={category.image} 
                    alt={category.alt}
                  />
                </div>
                <div className="px-2 pb-4 flex-grow">
                  <h3 className="text-h3 text-primary mb-3">{category.title}</h3>
                  <p className="text-body-md text-on-surface-variant mb-6 line-clamp-2">
                    {category.description}
                  </p>
                  <button className="inline-flex items-center label-sm text-secondary group-hover:gap-2 transition-all cursor-pointer">
                    VIEW SPECIFICATIONS <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Institutional Trust Banner */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-primary text-on-primary flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5" />
          <div className="relative z-10 flex-1">
            <h2 className="text-h2 mb-4 text-primary-fixed">Custom Bulk Requirements?</h2>
            <p className="text-body-lg text-on-primary-container">We provide tailored dehydration specifications, mesh sizes, and packaging for institutional buyers globally.</p>
          </div>
          <Link 
            to="/contact"
            className="relative z-10 bg-secondary text-white px-8 py-4 label-sm uppercase tracking-[0.1em] hover:brightness-110 transition-all active:scale-95 shadow-lg"
          >
            Consult an Expert
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
