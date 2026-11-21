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
      role: "Bachelor's thesis · Lund University · Pass with distinction",
      tags: ["Urban heat islands", "Landsat LST", "MODIS", "Google Earth Engine", "ArcGIS Pro"],
      image: "images/project-thesis.png",
      shape: "circle",
      description:
        "Compared how surface urban heat islands developed in Malta and in Zaragoza, Spain, two places with the same Mediterranean climate. Using summer land surface temperatures from 2013–2025, plus land cover, impervious surfaces and NDVI, I found that Malta has no classic daytime heat island (its built-up rural areas were warmer than the towns), while Zaragoza's city was clearly hotter than its surroundings. Night-time MODIS data from 2003–2025 showed the urban heat island growing in both places.",
      link: ""
    },
    {
      title: "Soil Erosion Risk in the Nyamagabe Catchment, Rwanda",
      year: "2026",
      role: "Group field project · Fieldwork in Rwanda",
      tags: ["RUSLE", "Fieldwork", "Soil erosion", "ArcGIS Pro"],
      image: "images/project-rwanda.jpg",
      description:
        "Modelled soil erosion risk in a steep farming catchment in southwestern Rwanda with the RUSLE model. All of the data was gathered by us in Rwanda: 178 field points on land cover, soil texture and erosion-control measures, rainfall from a weather station in the catchment, and interviews with local farmers. The model put mean soil loss at about 32 t/ha per year, and 68% of the spots where farmers reported heavy erosion fell in its higher-risk areas. I digitised and merged the support-practice (P-factor) layer, helped write the methods and wrote the conclusion.",
      link: ""
    },
    {
      title: "Verkaå Catchment Land Cover Study",
      year: "2025",
      role: "Group project · Remote sensing course · Pass with distinction",
      tags: ["Aerial photo interpretation", "Change detection", "Sentinel-2", "Python"],
      image: "images/project-verka.jpg",
      description:
        "A remote sensing pilot study in Österlen, Scania, that mapped land cover from aerial photos of 1940, 1999 and 2016 and from Sentinel-2 imagery, and measured how the landscape changed over almost 80 years. I was responsible for the change detection analysis (written in Python), digitised two of the Sentinel-2 areas and brought in extra data. I also created and edited the video that went along with our final submission.",
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
    },
    {
      title: "Vintergrönt: A Winter Greenspace Index for Lund",
      year: "2026",
      role: "SESAC hackathon · Society from Space Challenge · Team of six",
      tags: ["Hackathon", "Urban green space", "Satellite data", "Shadow modelling", "Interactive map"],
      image: "images/project-vintergront.png",
      shape: "cutout",
      description:
        "Green spaces are usually judged by how they look in summer, but in December Lund gets only about seven hours of daylight, and that is when people most need to get outside. In a two-day hackathon our team built a Winter Quality Index for Lund's parks. It combines hours of winter sunlight (from a shadow model of the sun's path on 21 December, with bare tree canopies treated as see-through) with how green each park stays in winter, measured from satellite data. The index showed which parks need improvements most. We added a winter biodiversity index, a look at lighting near parks after dark and an interactive map, and suggested fixes such as evergreen trees, winter-flowering plants, better lighting and snow clearing. During the project we also created an interactive website where anyone can explore the results on a map.",
      link: ""
    }
  ],

  maps: [
    { title: "Walking Distance from Home to a Park, Lund", year: "2026", tools: "OpenStreetMap · Python", image: "images/map-lund-walk-to-park.jpg", description: "From the Vintergrönt hackathon. Every home building is coloured by its walking distance to a park of at least 1 ha. 73% of residents meet Lund's 300 m target." },
    { title: "Estimated Soil Loss Rate, Nyamagabe Catchment", year: "2026", tools: "RUSLE · ArcGIS Pro", image: "images/map-rwanda-soil-loss.jpg", description: "Yearly soil loss modelled with RUSLE from the data we gathered in the field in Rwanda." },
    { title: "Burn Severity of the 2024 Jasper Wildfire", year: "2026", tools: "ArcPy tool · Landsat 8/9", image: "images/map-jasper-burn-severity.jpg", description: "Output of my dNBR burn severity tool for Jasper National Park, Canada." },
    { title: "Winter Sun at Ground Level, Lund", year: "2026", tools: "Lidar height model · Python shadow model", image: "images/map-lund-winter-sun.jpg", description: "Share of daylight in direct sun on 21 December, from the Vintergrönt hackathon project. The sun position was simulated every 2 minutes, with only buildings casting shadows." },
    { title: "Land Cover Types of Africa", year: "2023", tools: "ArcGIS Pro", image: "images/map-africa-landcover.jpg", description: "Africa divided into desert, semi-desert, semi-arid, dry forest, moist forest and forest-and-mountain land cover zones." },
    { title: "Anthill Locations and Measurement Area", year: "2023", tools: "Drone imagery · field measurements", image: "images/map-anthills.jpg", description: "Anthills mapped from point data measured on site, together with a slope raster from a drone-derived terrain model." },
    { title: "Land Cover of Neighbouring Areas, Verkaå 2016", year: "2025", tools: "Aerial photos · ArcGIS Pro", image: "images/map-verka-neighbouring-2016.jpg", description: "Land cover digitised from aerial photos for the Verkaå study in Scania, joined with the neighbouring study areas." },
    { title: "GPS Accuracy Testing, Lund", year: "2023", tools: "GPS · ArcGIS", image: "images/map-lund-gps-accuracy.jpg", description: "Comparing positions from a GPS test and the Min Karta app with randomly generated target points, at 1:1000." },
    { title: "10-year Mean NDVI, Zaragoza", year: "2026", tools: "ArcGIS Pro", image: "images/map-zaragoza-ndvi.jpg", description: "Vegetation greenness around Zaragoza, 2015–2025, from my bachelor's thesis." },
    { title: "Management Practices and Mitigation, Nyamagabe", year: "2026", tools: "ArcGIS Pro · fieldwork", image: "images/map-rwanda-mitigation.jpg", description: "Current land management practices and recommended erosion-control measures in the Rwandan catchment." }
  ],

  certificates: [
    { group: "participation", title: "Volunteer, ICOS Science Conference 2026", issuer: "ICOS ERIC", image: "images/cert-icos.jpg",
      details: "ICOS (Integrated Carbon Observation System) is a European research network that measures greenhouse gases in the atmosphere, in ecosystems and in the ocean. I volunteered at its international science conference, held in Lund, helping it run smoothly for researchers on site and online." },
    { group: "participation", title: "Society from Space Challenge (hackathon)", issuer: "SESAC", image: "images/cert-seasac.jpg",
      details: "SESAC, the Swedish Competence Centre for Satellite-Enabled Social Science Analytics, connects Earth observation with social science. In its two-day hackathon, interdisciplinary teams used satellite data to answer real urban questions about Lund and Nairobi. Our team built Vintergrönt, a winter green space index for Lund." },
    { group: "participation", title: "ECO-Syria Mapathon", issuer: "Lund University", image: "images/cert-mapathon.jpg",
      details: "A mapathon for the ECO-Syria research project, where volunteers create training and validation data for land cover maps of Syria by interpreting Sentinel-2 and Google Earth imagery. The data is shared openly for other researchers. I took part twice, in 2024 and 2025." },
    { group: "courses", title: "Bachelor of Science, Physical Geography and Ecosystem Science", issuer: "Lund University · 180 credits", image: "images/cert-bachelor-1.jpg", pages: ["images/cert-bachelor-1.jpg", "images/cert-bachelor-2.jpg"],
      details: "Courses: Introduction to the Global Environment · Remote Sensing for Landscape Studies (distinction) · Ecosystems Analysis (distinction) · Theory and Methods of Physical Geography · Land Surface Processes and Landscape Dynamics (distinction) · GIS Basic Course · GIS Advanced Course · Hydrology · The Climate System · Bachelor's Degree Project (distinction)." },
    { group: "courses", title: "Exchange semester, Queen's University, Canada", issuer: "Queen's University, Kingston", image: "images/cert-queens.jpg",
      details: "Courses: Maps and Society · Photogrammetry · Environmental Assessment · Foundations in Visual Art · Approaches to Film Form. Term GPA 3.74." }
  ]
};
