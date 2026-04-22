/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProductVariant {
  name: string;
  forms: string;
  image: string;
}

export interface Specification {
  parameter: string;
  detail: string;
}

export interface ProductData {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  standardDescription: string;
  specs: Specification[];
  variants: ProductVariant[];
  smallVariants: string[];
}

export const PRODUCT_DATA: Record<string, ProductData> = {
  "dehydrated-vegetables": {
    id: "dehydrated-vegetables",
    title: "Dehydrated Vegetables - Bulk Export",
    description: "Premium-grade dehydrated vegetables processed at peak freshness. Our advanced air-drying technologies ensure maximum nutritional retention and authentic flavor profiles for global food manufacturing.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAMYYXrhmoFR93BseOdg8lDxnS8v0i4mPHHl--_ZFo-Yei88vQWDQn4piJl7ivE03-1B1Zt1VjZlarVTfE-6jqVFcbuCMcuyXmC6OOv94cf5tItAUpm5vdYUhIqY5wt11ZIkPNQXvCP1sy_BpjIS-HND-aV6oJ7s-qhzXNAGzYtZn1BaGhP_0cLZrgcmrGdQI-Emv7KYx5hM6q8oD7KPh1hkuiPiQKYoSk6gnqC0a3-QGOadPPv8LcMq2tFquaXyW1tDSbEPkWbYxg",
    standardDescription: "Our dehydration process is engineered to preserve the biological integrity of the vegetable. By utilizing low-temperature air drying, we prevent the oxidation of vital nutrients and maintain the cellular structure.",
    specs: [
      { parameter: "Mesh Size", detail: "Flakes (5-10mm), Cubes (3x3mm, 10x10mm), Powder (< 100 microns)" },
      { parameter: "Moisture Content", detail: "< 5% (Standard Export Grade)" },
      { parameter: "Shelf Life", detail: "12 - 24 Months (Stored in cool, dry conditions)" },
      { parameter: "Origin", detail: "India (Grown in Pesticide-Controlled Farms)" },
      { parameter: "Total Ash", detail: "< 7.0% Max" }
    ],
    variants: [
      { 
        name: "Onion", 
        forms: "Kibbled, Flakes, Minced, Powder", 
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBh9YoWikk_rTVAesRm2BSfPMMZwlOn1N-xuZLAEFqwKg1YfdLfh0Vq8ibpTsOO0I4lu_wU4aGN1AM4ZWKFHoDlcOXnvdiaxNSWq0rNGWjelMecZ98IvwW6ydIWSIUafYVRfVEh-W56WYZuFTYzZxWxV50KNImwIkN1UtcGptuQel3uDAP4dN3CwcL_124mV01uuINQX3g8pRQK9bdu6VVfCwKAjqJX-34TsBXwVrcCklHegH053djxxgx7LcHcLKmQe3jaraK9FKI" 
      },
      { 
        name: "Carrot", 
        forms: "Cubes, Strips, Powder", 
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo0WJxKyL2ENq2rj0KbL-QfyIw7meSYUpK6lLwC3kXrAS9AG7Prp7jKn0YUcV78D6G4V4aZwuMzCBQNwKiYp7cImQdwIsh_9yTdruk2nOQmwbckfGoKt7RcjeYOe9jE_-OB3Aaau5MQBuMK9Stz_-ZZQa58Nj71oQgd7mLJ-d-WByUAGAe4JVeJClDD1LwSO1JJ620aZqhrLhiekDioftnII4m4PnUgDdD5Wrhjsc5pNKRPuRo_fio4I0CCyDtueVLKqXLMd6ggfY" 
      },
      { 
        name: "Garlic", 
        forms: "Cloves, Minced, Granules, Powder", 
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7UhS-qmuEvVfnMSEYuKya1m69-u1KMfcLVFLNo9UT63FRgaO6o_eqFcHR6_WN7ihUdh59iAabLBtx5QGKuYVFhQ4_v7smye9HzO5xKUmVaeTUb78JhlfpUE3HPQnzMc5jIDSKw96jH_vkjhuwRp4nhSOoEPthiyXC6kadQ1Ikb6hloKkYZf31MF-1ioOxpxOV-4BSOAWBc8VmtbZHrThn-Lu0FPflhPRdkQBmE3ULJkzHAUCtw-c7gUQVOIo_hajLGc0CZqOZFh4" 
      }
    ],
    smallVariants: ["Cabbage", "Bitter Gourd", "Ginger", "Potato"]
  },
  "fried-onion-garlic": {
    id: "fried-onion-garlic",
    title: "Fried Onion & Garlic - Culinary Gold",
    description: "Expertly fried and dehydrated aromatics prepared with minimal oil absorption. Designed for institutional kitchens and retail packaging where crispness and flavor intensity are paramount.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWpjHvKZJIT2knz2W_WS0LMEmu5Xq1QJ1gGNW3J1L89kSflgleW07541Gtos9b9L_JhFLrwCZZur-BxqgwWLZBNVUXUA6QE1BAY_dfCPhvGlBTUcj5tUWF5dAf3uRPDZVxN9_EJB4sNnMpg_iz4HiY3USLRbWHXAZNPl0mSGFE-osLSAU900FzOT_y6m0DC_euE_4gT11moflebK90-tGh5u8ayi7wrnI6kNI0y8cQLdmXIqJYPARewLtiFioPEsRXduuPe0va7AA",
    standardDescription: "We use high-purity vegetable oils and precise temperature control to achieve uniform caramelization without the greasy residue common in traditional fried products.",
    specs: [
      { parameter: "Oil Content", detail: "< 15% (Centrifugally Extracted)" },
      { parameter: "Moisture", detail: "< 3% for Maximum Crispness" },
      { parameter: "Color", detail: "Uniform Golden Brown (L-scale Graded)" },
      { parameter: "Texture", detail: "Crunchy (Fracturability Tested)" }
    ],
    variants: [
      { 
        name: "Classic Fried Onion", 
        forms: "Flakes, Rings, Minced", 
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWpjHvKZJIT2knz2W_WS0LMEmu5Xq1QJ1gGNW3J1L89kSflgleW07541Gtos9b9L_JhFLrwCZZur-BxqgwWLZBNVUXUA6QE1BAY_dfCPhvGlBTUcj5tUWF5dAf3uRPDZVxN9_EJB4sNnMpg_iz4HiY3USLRbWHXAZNPl0mSGFE-osLSAU900FzOT_y6m0DC_euE_4gT11moflebK90-tGh5u8ayi7wrnI6kNI0y8cQLdmXIqJYPARewLtiFioPEsRXduuPe0va7AA" 
      }
    ],
    smallVariants: ["Crispy Garlic", "Toasted Onion", "Shallot Crisps"]
  },
  "fruit-slices-powders": {
    id: "fruit-slices-powders",
    title: "Fruit Slices & Powders - Natural Essence",
    description: "Concentrated fruit nutrition preserved through low-thermal dehydration. Perfect for confectionery, breakfast cereals, and health-conscious food manufacturers.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvjEIOB7qwkA8-383d-gYuaeU-bjFkXyQuDlr9-q09vMbu5hfhbs3O3_amMCPoC6xBIZ2jAL_RWlkDLxOhS0Yv6wXF8-s22-0eVkrTv8UlugIPmLIEcveOfhj1zcw2pC3HpHd8Coc9jho9YnQ3z0Ra-dPJz3uHgItxMEtrdx_52rBIyKjv5oRxHDb-be3sherq-WFRXiLVYy22dq0ob9LTYlgJUltE9X0lmLxliPeQErZsl7lINMCwrDZ2NKopl8qbQyyw1dCVwlI",
    standardDescription: "Our fruit dehydration process locks in natural sugars and vitamins without the need for sulfur or preservatives.",
    specs: [
      { parameter: "Sugar Content", detail: "Naturally Occurring (No Added Sugars)" },
      { parameter: "Purity", detail: "100% Fruit Base" },
      { parameter: "Solubility", detail: "Instant (For Powders)" }
    ],
    variants: [
      { 
        name: "Mango", 
        forms: "Slices, Diced, Powder", 
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvjEIOB7qwkA8-383d-gYuaeU-bjFkXyQuDlr9-q09vMbu5hfhbs3O3_amMCPoC6xBIZ2jAL_RWlkDLxOhS0Yv6wXF8-s22-0eVkrTv8UlugIPmLIEcveOfhj1zcw2pC3HpHd8Coc9jho9YnQ3z0Ra-dPJz3uHgItxMEtrdx_52rBIyKjv5oRxHDb-be3sherq-WFRXiLVYy22dq0ob9LTYlgJUltE9X0lmLxliPeQErZsl7lINMCwrDZ2NKopl8qbQyyw1dCVwlI" 
      }
    ],
    smallVariants: ["Banana", "Papaya", "Pomegranate", "Berry Blends"]
  },
  "leaves-herb-powders": {
    id: "leaves-herb-powders",
    title: "Leaves & Herb Powders - Aromatic Purity",
    description: "High-spec aromatic leaves dried at controlled temperatures to maintain essential oil content and medicinal properties.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5aLffVN532FO5S22VAzA6n8uLqcG1Kvt3xolG44Q3dBr-8ENlwzF1Us5vXcWAUV2KG7h7Azj_4O8g6gZ9zdT2rzijLcRRZC5YPxwtKDs04Kbwsmb03NoHRfBIzCsN1IVQAI2-5KH1NQufFEcYqeqXKRy72lxpLy9epl7fdQAOiXF7rvPbgYqaeTzxPCOWPKEYGnYxWv7Xs0s_piCLa-9ACDiJJQxvZ31vFAuj3hHmIniZSEQ5LpHHf7UN0Trk1U_hPK2fEN7o4J4",
    standardDescription: "We emphasize the preservation of terpenes and chlorophyll, ensuring our herbs remain vibrant in both color and profile.",
    specs: [
      { parameter: "Oil Content", detail: "Standardized Volatile Oil Ranges" },
      { parameter: "Microbiology", detail: "E-Coli & Salmonella Negative" },
      { parameter: "Texture", detail: "Coarse Leaf to Fine Powder" }
    ],
    variants: [
      { 
        name: "Basil", 
        forms: "Rubbed, Powder", 
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5aLffVN532FO5S22VAzA6n8uLqcG1Kvt3xolG44Q3dBr-8ENlwzF1Us5vXcWAUV2KG7h7Azj_4O8g6gZ9zdT2rzijLcRRZC5YPxwtKDs04Kbwsmb03NoHRfBIzCsN1IVQAI2-5KH1NQufFEcYqeqXKRy72lxpLy9epl7fdQAOiXF7rvPbgYqaeTzxPCOWPKEYGnYxWv7Xs0s_piCLa-9ACDiJJQxvZ31vFAuj3hHmIniZSEQ5LpHHf7UN0Trk1U_hPK2fEN7o4J4" 
      }
    ],
    smallVariants: ["Oregano", "Moringa", "Mint", "Curry Leaves"]
  },
  "spices-whole-spices": {
    id: "spices-whole-spices",
    title: "Spices & Whole Spices - Global Potency",
    description: "Authentic spices sourced from dedicated plantations. We provide both whole forms and customized ground powders with guaranteed heat and aroma profiles.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6KOF2AWePHrw7QnuWAg-QG0aseYwXy7lvIlsYeT77qRSAycfKCW2YGYiEF2hx_Nbsf4r8F1fjBAq_FimshbEod_6Zf_HXo0iad91lLdNZENdAh7tCOSYPJzdd7bPVMO9n1wIq8jhl9o3h3giFx3Hn0-k5eXKP0DKzTUyOFn4HFQPPiQI-5AYz-wQhrpl4libJ56BbOCDKu-LaFthY9tdUu4k7cMgIgYJcH0BRN4oI_cwbEd0_Aq6uZ0NchLuFJ0puC6Ea0moN2xs",
    standardDescription: "Each spice batch is traceable to the farm of origin, meeting the strictest international quality benchmarks (ASTA Standards).",
    specs: [
      { parameter: "Grade", detail: "Food Grade / Extraction Grade" },
      { parameter: "Extraneous Matter", detail: "Less than 1% Max" },
      { parameter: "Pungency", detail: "Tested by HPLC" }
    ],
    variants: [
      { 
        name: "Turmeric", 
        forms: "Whole, Finger, Powder (Curcumin 3%+)", 
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6KOF2AWePHrw7QnuWAg-QG0aseYwXy7lvIlsYeT77qRSAycfKCW2YGYiEF2hx_Nbsf4r8F1fjBAq_FimshbEod_6Zf_HXo0iad91lLdNZENdAh7tCOSYPJzdd7bPVMO9n1wIq8jhl9o3h3giFx3Hn0-k5eXKP0DKzTUyOFn4HFQPPiQI-5AYz-wQhrpl4libJ56BbOCDKu-LaFthY9tdUu4k7cMgIgYJcH0BRN4oI_cwbEd0_Aq6uZ0NchLuFJ0puC6Ea0moN2xs" 
      }
    ],
    smallVariants: ["Black Pepper", "Cinnamon", "Cardamom", "Chilli"]
  },
  "oil-seeds-cereals": {
    id: "oil-seeds-cereals",
    title: "Oil Seeds & Cereals - Industrial Purity",
    description: "Mechanically cleaned and graded oil seeds for oil extraction and industrial baking.",
    heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs18YQomXb0QCF6E2je43RoiFd3L0CGaSXQliS5aIhBVjnYSJuX1MyrxtMQ86nmgRp5st63waRLhvKhdD5iiZPGZTnK09u1WOCcEK5W9vsdKVQesUaZFdlwvco5LxEatXyCAT6aGXpYAye14eI1_JEApsZDEEqBLTgRJ7luS2B7_QFHtxrwbsP_UOA8lqTzrDCBMMJoe3X2PrFFeAvE4yc15gxqgZ2oKvNCL7dRBZPTdiqI4KvfNs8RvaHHM78IqiCNq7_Y_ipEyg",
    standardDescription: "We use laser sorting and gravity separation to achieve 99.9% purity levels required for European and North American standards.",
    specs: [
      { parameter: "Purity", detail: "99% Min (Machine Cleaned)" },
      { parameter: "Admixture", detail: "1% Maximum" },
      { parameter: "Oil Content", detail: "Standardized for Extraction" }
    ],
    variants: [
      { 
        name: "Sesame Seeds", 
        forms: "Natural, Hulled, Roasted", 
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDs18YQomXb0QCF6E2je43RoiFd3L0CGaSXQliS5aIhBVjnYSJuX1MyrxtMQ86nmgRp5st63waRLhvKhdD5iiZPGZTnK09u1WOCcEK5W9vsdKVQesUaZFdlwvco5LxEatXyCAT6aGXpYAye14eI1_JEApsZDEEqBLTgRJ7luS2B7_QFHtxrwbsP_UOA8lqTzrDCBMMJoe3X2PrFFeAvE4yc15gxqgZ2oKvNCL7dRBZPTdiqI4KvfNs8RvaHHM78IqiCNq7_Y_ipEyg" 
      }
    ],
    smallVariants: ["Sunflower Seeds", "Mustard", "Cumin Seeds", "Flax Seeds"]
  }
};
