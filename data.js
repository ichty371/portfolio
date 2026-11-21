/* =========================================================
   ✏️  EDIT THIS FILE TO CHANGE WHAT YOUR WEBSITE SHOWS
   ---------------------------------------------------------
   - Put your pictures in the "images" folder.
   - Then write the file name, e.g. image: "images/my-map.jpg"
   - Leave image: "" and the site draws a nice placeholder.
   - Keep the commas and quotes exactly like the examples.
   ========================================================= */

window.PORTFOLIO = {
  name: "Your Name",
  role: "Projects · Maps · Spatial stories",
  intro:
    "I turn places and data into maps, and ideas into finished projects. Here is a selection of what I have made and the work I have been part of.",
  email: "you@example.com",
  location: "Stockholm, Sweden",
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "GitHub", url: "https://github.com/" }
  ],
  skills: ["QGIS", "ArcGIS Pro", "Cartography", "Field surveys", "Remote sensing", "Data analysis", "Project coordination", "Illustrator"],

  projects: [
    {
      title: "Urban Green Corridors",
      year: "2026",
      role: "Project member · Mapping lead",
      tags: ["GIS", "Urban planning"],
      image: "",
      description:
        "Mapped green spaces across the city and proposed connecting corridors for wildlife and cyclists. I collected field data, built the maps and presented them to the planning group.",
      link: ""
    },
    {
      title: "Coastal Erosion Study",
      year: "2025",
      role: "Research assistant",
      tags: ["Remote sensing", "Fieldwork"],
      image: "",
      description:
        "Compared satellite images from 20 years to measure how fast the shoreline is moving. Built an interactive before/after map for the final report.",
      link: ""
    },
    {
      title: "Community Trail Map",
      year: "2025",
      role: "Volunteer · Designer",
      tags: ["Cartography", "Design"],
      image: "",
      description:
        "Designed a printed and online trail map for a local hiking association, from GPS tracks to the final folded leaflet.",
      link: ""
    }
  ],

  maps: [
    { title: "Elevation of the Northern Valley", year: "2026", tools: "QGIS", image: "", description: "Hillshade and contour map made from open elevation data." },
    { title: "Population Density", year: "2025", tools: "ArcGIS Pro", image: "", description: "Choropleth map of density by municipality." },
    { title: "Old Town Walking Map", year: "2025", tools: "Illustrator", image: "", description: "Hand-styled tourist map with points of interest." },
    { title: "Flood Risk Zones", year: "2024", tools: "QGIS", image: "", description: "Risk areas based on terrain and river data." },
    { title: "Forest Cover Change", year: "2024", tools: "Sentinel-2", image: "", description: "Loss and gain of forest between two time periods." },
    { title: "Bike Network", year: "2024", tools: "QGIS", image: "", description: "Existing and planned cycle lanes in the city centre." }
  ],

  certificates: [
    { title: "Certificate of Participation — Urban Green Corridors", issuer: "City Planning Office", date: "June 2026", image: "" },
    { title: "GIS Fundamentals", issuer: "Online course", date: "March 2025", image: "" },
    { title: "Coastal Research Programme", issuer: "University field school", date: "August 2025", image: "" },
    { title: "Volunteer Recognition", issuer: "Local Hiking Association", date: "October 2025", image: "" }
  ]
};
