/* =========================================================
   ✏️  EDIT THIS FILE TO CHANGE WHAT YOUR WEBSITE SHOWS
   ---------------------------------------------------------
   - Put your pictures in the "images" folder.
   - Then write the file name, e.g. image: "images/my-map.jpg"
   - Keep the commas and quotes exactly like the examples.
   ========================================================= */

window.PORTFOLIO = {
  name: "Felikss Urga",
  role: "Physical geography · GIS · Remote sensing",
  intro:
    "BSc in Physical Geography and Ecosystem Science from Lund University. I use satellite data, field work and GIS to map how landscapes, cities and ecosystems change.",
  email: "urgafelix@gmail.com",
  location: "Lund, Sweden",
  links: [],
  skills: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "Python & ArcPy", "Remote sensing", "Landsat & Sentinel-2", "MODIS", "Fieldwork", "Cartography", "Land cover classification"],

  projects: [
    {
      title: "Urban Heat Under Mediterranean Skies",
      year: "2026",
      role: "Bachelor's thesis (NGEK11) · Lund University · Pass with distinction",
      tags: ["Urban heat islands", "Landsat LST", "MODIS", "Google Earth Engine", "ArcGIS Pro"],
      image: "images/project-thesis.jpg",
      description:
        "Compared how surface urban heat islands developed in Malta and in Zaragoza, Spain, two places with the same Mediterranean climate. Using summer land surface temperatures from 2013–2025, plus land cover, impervious surfaces and NDVI, I found that Malta has no classic daytime heat island (its built-up rural areas were warmer than the towns), while Zaragoza's city was clearly hotter than its surroundings. Night-time MODIS data from 2003–2025 showed the urban heat island growing in both places.",
      link: ""
    },
    {
      title: "Soil Erosion Risk in the Nyamagabe Catchment, Rwanda",
      year: "2026",
      role: "Group field project (NGEA09) · Fieldwork in Rwanda",
      tags: ["RUSLE", "Fieldwork", "Soil erosion", "ArcGIS Pro"],
      image: "images/project-rwanda.jpg",
      description:
        "Modelled soil erosion risk in a steep farming catchment in southwestern Rwanda with the RUSLE model. All of the data was gathered by us in Rwanda: 178 field points on land cover, soil texture and erosion-control measures, rainfall from a weather station in the catchment, and interviews with local farmers. The model put mean soil loss at about 32 t/ha per year, and 68% of the spots where farmers reported heavy erosion fell in its higher-risk areas. I digitised and merged the support-practice (P-factor) layer, helped write the methods and wrote the conclusion.",
      link: ""
    },
    {
      title: "Verkaå Catchment Land Cover Study",
      year: "2025",
      role: "Group project (NGEA03 Remote Sensing) · Pass with distinction",
      tags: ["Aerial photo interpretation", "Change detection", "Sentinel-2", "Python"],
      image: "images/project-verka.jpg",
      description:
        "A remote sensing pilot study in Österlen, Scania, that mapped land cover from aerial photos of 1940, 1999 and 2016 and from Sentinel-2 imagery, and measured how the landscape changed over almost 80 years. I was responsible for the change detection analysis (written in Python), digitised two of the Sentinel-2 areas, brought in extra data, did the final editing and made the video visualisation.",
      link: ""
    },
    {
      title: "Burn Severity Tool for ArcGIS Pro",
      year: "2026",
      role: "Individual project · Python toolbox",
      tags: ["Python", "ArcPy", "Landsat 8/9", "Wildfires", "dNBR"],
      image: "images/project-dnbr.jpg",
      description:
        "Coded an ArcGIS Pro tool in Python (ArcPy) that detects how badly an area has burned. You give it Landsat images from before and after a fire. It calculates the differenced Normalized Burn Ratio (dNBR), sorts every pixel into seven burn-severity classes with a ready-made colour scheme, and can export a CSV of area statistics. It also gives clear error messages to help users. I tested it on the 2024 Jasper wildfire in Canada and the 2021 Dixie fire in California.",
      link: ""
    }
  ],

  maps: [
    { title: "Average Land Surface Temperature, Malta 2013–2025", year: "2026", tools: "Landsat · ArcGIS Pro", image: "images/map-malta-lst.jpg", description: "Mean summer land surface temperature across Malta, from my bachelor's thesis." },
    { title: "10-year Mean Land Surface Temperature, Zaragoza", year: "2026", tools: "Landsat · ArcGIS Pro", image: "images/map-zaragoza-lst.jpg", description: "Mean summer surface temperature around Zaragoza, showing the city's heat island." },
    { title: "Burn Severity of the 2024 Jasper Wildfire", year: "2026", tools: "ArcPy tool · Landsat 8/9", image: "images/map-jasper-burn-severity.jpg", description: "Output of my dNBR burn severity tool for Jasper National Park, Canada." },
    { title: "Soil Deposition Potential Index, Nyamagabe", year: "2026", tools: "ArcGIS Pro · field data", image: "images/map-rwanda-sdpi.jpg", description: "Where eroded soil is likely to settle in the Rwandan study catchment." },
    { title: "10-year Mean NDVI, Zaragoza", year: "2026", tools: "ArcGIS Pro", image: "images/map-zaragoza-ndvi.jpg", description: "Vegetation greenness around Zaragoza, 2015–2025." },
    { title: "Sen's Slope of Surface Temperature, Malta", year: "2026", tools: "Landsat · ArcGIS Pro", image: "images/map-malta-sens-slope.jpg", description: "Pixel-by-pixel trend in yearly land surface temperature in Malta, 2013–2025 (°C/year). Red areas warmed, blue areas cooled." },
    { title: "Verkaå Catchment Land Cover, 2016", year: "2025", tools: "Aerial photos · ArcGIS Pro", image: "images/map-verka-2016.jpg", description: "Land cover digitised from aerial photos for the Verkaå study in Scania." },
    { title: "Management Practices and Mitigation, Nyamagabe", year: "2026", tools: "ArcGIS Pro · fieldwork", image: "images/map-rwanda-mitigation.jpg", description: "Current land management practices and recommended erosion-control measures in the Rwandan catchment." },
    { title: "Stable Land Use and Land Cover, Zaragoza 2018–2023", year: "2026", tools: "Copernicus land cover · ArcGIS Pro", image: "images/map-zaragoza-lulc.jpg", description: "Areas whose land use stayed the same, used to compare temperatures between land cover types." }
  ],

  certificates: [
    { group: "participation", title: "Volunteer, ICOS Science Conference 2026", issuer: "ICOS ERIC Head Office", date: "September 2026", image: "images/cert-icos.jpg" },
    { group: "participation", title: "Society from Space Challenge 2026 (hackathon)", issuer: "SESAC – Swedish Competence Centre for Satellite-Enabled Social Science Analytics", date: "November 2026", image: "images/cert-seasac.jpg", details: "Two-day hackathon in Lund, using satellite data to answer real urban questions about Lund and Nairobi in an interdisciplinary team." },
    { group: "participation", title: "ECO-Syria Mapathon", issuer: "Lund University, Dept. of Physical Geography and Ecosystem Science", date: "2024 & 2025", image: "images/cert-mapathon.jpg", details: "Took part in both 2024 and 2025. Created training and validation data for land cover mapping in Syria using Sentinel-2 and Google Earth imagery." },
    { group: "courses", title: "Bachelor of Science, Physical Geography and Ecosystem Science", issuer: "Lund University · 180 credits", date: "June 2026", image: "images/cert-bachelor-1.jpg", pages: ["images/cert-bachelor-1.jpg", "images/cert-bachelor-2.jpg"], details: "Courses: Introduction to the Global Environment · Remote Sensing for Landscape Studies (distinction) · Ecosystems Analysis (distinction) · Theory and Methods of Physical Geography · Land Surface Processes and Landscape Dynamics (distinction) · GIS Basic Course · GIS Advanced Course · Hydrology · The Climate System · Bachelor's Degree Project (distinction)." },
    { group: "courses", title: "Exchange semester, Queen's University, Canada", issuer: "Queen's University, Kingston", date: "Fall 2025", image: "images/cert-queens.jpg", details: "Courses: Maps and Society · Photogrammetry · Environmental Assessment · Foundations in Visual Art · Approaches to Film Form. Term GPA 3.74." }
  ]
};
