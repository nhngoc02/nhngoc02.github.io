'use strict';

/*
 * Portfolio projects.
 *
 * To add a project, copy one entry and edit it:
 *   category  "data" (Data Analysis tab) or "swe" (Software Engineering tab)
 *   image     path to a 16:9 thumbnail, or null to show a plain text tile
 *   summary   one line shown on the card
 *   context / approach / outcome   short paragraphs shown in the popup
 *   tools     list of tags shown in the popup
 *   links     buttons at the bottom of the popup; the first one is the main link
 */
const PROJECTS = [
  // ---------- Data Analysis ----------
  {
    category: 'data',
    title: 'Pricing Performance Analysis for Goodwill San Antonio',
    label: 'Consulting project',
    date: 'Feb – May 2024',
    image: './assets/images/goodwill-project.jpg',
    summary: 'Pricing performance and operations analysis for 28 Goodwill San Antonio stores.',
    context: 'Goodwill San Antonio wanted to understand how well its pricing strategies were working across its 28 stores.',
    approach: 'I defined 3 performance metrics (pricing variance, pricing efficiency, and total revenue) and evaluated them against 2.5 million historical data points, then built an interactive Tableau dashboard so store managers and associates could explore the results.',
    outcome: 'Delivered consulting reports and the dashboard to Goodwill managers, giving them a shared way to compare pricing performance across stores.',
    tools: ['Tableau', 'Data analysis', 'Consulting'],
    links: [
      { label: 'View Tableau dashboard', url: 'https://public.tableau.com/app/profile/ngoc.nguyen5931/viz/PricingPerformanceAnalysis-GoodwillSanAntonio/Goodwill-PricingPerformancePresentation' }
    ]
  },
  {
    category: 'data',
    title: 'Food Safety Analysis, Business Analytics Competition 2023',
    label: '3rd place of 24 teams',
    date: 'Feb – May 2023',
    image: './assets/images/bac-2023.jpg',
    summary: 'Food safety analysis for Sub-Saharan Africa and Central America and the Caribbean.',
    context: 'Trinity University sent a team of 4 students to the national Business Analytics Competition at Manhattan College. The topic was food safety in Sub-Saharan Africa and Central America and the Caribbean.',
    approach: 'We spent three months researching food safety in Sub-Saharan Africa, then competed in a 15-hour datathon in New York comparing it with Central America and the Caribbean. We used K-Means clustering, an LSTM neural network, random forests and other tree methods, and proposed region-specific improvement strategies.',
    outcome: 'Placed third out of 24 teams from across the United States.',
    tools: ['R', 'Python', 'Tableau', 'K-Means', 'LSTM', 'Random forest'],
    links: [
      { label: 'View project materials', url: 'https://drive.google.com/drive/folders/1_zltyRAnT6I8L1DcARR4R3WkMaxVuBiu?usp=sharing' },
      { label: 'Read the Trinity news story', url: 'https://www.trinity.edu/trinity-tuday/trinitys-team-places-third-business-analytics-competition' }
    ]
  },
  {
    category: 'data',
    title: 'Dell Supply Chain Analytics',
    label: 'Case study',
    date: '2023',
    image: './assets/images/dell-project.jpg',
    summary: 'Predicting missing, wrong, or damaged (MWD) order units across Dell carriers.',
    context: 'Dell tracks how many order units each carrier delivers missing, wrong, or damaged (MWD). The industry standard is to keep MWD under 1%.',
    approach: 'Using six order-level datasets covering two quarters of Dell\'s fiscal 2023, I analyzed the data in R and built a prediction model for MWD units per carrier. I then packaged the model in an interactive R Shiny web app.',
    outcome: 'The model was used to describe which carrier characteristics are associated with an MWD rate above the 1% threshold.',
    tools: ['R', 'R Shiny', 'Predictive modeling'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/nhngoc02/Dell_MWD' }
    ]
  },
  {
    category: 'data',
    title: 'Ames House Price Prediction',
    label: 'Business analytics project',
    image: './assets/images/house-price-project.jpg',
    summary: 'Regression model for house prices from 81 property characteristics.',
    context: 'The Ames housing dataset describes residential sales with 81 variables about each house. The goal was to predict sale price.',
    approach: 'I explored and cleaned the data, then ran regression model diagnostics to choose a final model.',
    outcome: 'The final model reached an adjusted R² of 0.91. The write-up is included as a Kaggle-style report.',
    tools: ['R', 'Regression', 'Data cleaning'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/nhngoc02/AmesHousePrice' }
    ]
  },
  {
    category: 'data',
    title: 'Diversity Sampling of Antibody Sequences',
    label: 'Research, Trinity Neuroscience Lab',
    image: null,
    summary: 'Unsupervised clustering to pick diverse antibody sets for discovery screens.',
    context: 'Labs screening antibodies want sets of sequences that are as diverse as possible, in sizes that match their screening capacity.',
    approach: 'I wrote Python pipelines that download and aggregate sequences from the Observed Antibody Space database, then cluster them with Diamond and MMseqs2 so diverse representatives can be sampled from each cluster.',
    outcome: 'A reusable, command-line pipeline with a documented conda environment for collecting and clustering antibody sequences.',
    tools: ['Python', 'Diamond', 'MMseqs2', 'Linux', 'Unsupervised ML'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/nhngoc02/antibody-research' }
    ]
  },
  {
    category: 'data',
    title: 'Credit Card Behavior Analysis',
    label: 'Statistics project',
    image: './assets/images/credit-card-project.jpg',
    summary: 'Regression and hypothesis testing on credit card applicants.',
    context: 'Using applicant data from the textbook Econometric Analysis, I looked at how credit card usage relates to applicants\' personal and financial characteristics.',
    approach: 'I explored the data and used regression models and hypothesis tests to examine those relationships.',
    outcome: 'An R Markdown report walking through the analysis and findings.',
    tools: ['R', 'R Markdown', 'Regression', 'Hypothesis testing'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/nhngoc02/credit-card' }
    ]
  },
  {
    category: 'data',
    title: 'Order & Delivery Report',
    label: 'Power BI dashboard',
    date: 'Jul 2023',
    image: './assets/images/productdeliveryreport.jpg',
    summary: 'Delivery status dashboard for KPIM\'s operations department.',
    context: 'KPIM\'s operations team needed one place to follow order fulfillment status and trends.',
    approach: 'I built an interactive Power BI report on 12 months of order data, using bookmarks to switch between views, buttons for filtering, and DAX for calculated fields.',
    outcome: 'An interactive report that shows delivery status and trends at a glance.',
    tools: ['Power BI', 'DAX'],
    links: [
      { label: 'View dashboard (PDF)', url: 'https://drive.google.com/file/d/1VHtZS--IILqqo8u0l8z3mgSizc03z8PZ/view?usp=sharing' }
    ]
  },
  {
    category: 'data',
    title: 'Recruiting Pipeline Dashboard',
    label: 'Power BI dashboard',
    image: './assets/images/recruitingpipelinereport.jpg',
    summary: 'Tracking applicants across recruiting stages for KPIM.',
    context: 'KPIM\'s recruiting team wanted to see where applicants were in the hiring process.',
    approach: 'I designed a Power BI dashboard that reports applicant status at each recruiting stage.',
    outcome: 'A single view of the recruiting pipeline for the hiring team.',
    tools: ['Power BI'],
    links: [
      { label: 'View dashboard (PDF)', url: 'https://drive.google.com/file/d/1y2OQ9PXGEZOn4Msv_OSdAFDEWNu1I3jo/view?usp=sharing' }
    ]
  },
  {
    category: 'data',
    title: 'Walmart Retail Dashboard',
    label: 'Tableau dashboard',
    image: './assets/images/walmart-tableau.jpg',
    summary: 'Sales and profit by location, category, and customer segment.',
    context: 'Walmart retail sales and profit data across locations, product categories, and customer segments.',
    approach: 'I built an interactive Tableau dashboard comparing sales and profit across locations, product categories, and customer segments.',
    outcome: 'A dashboard for spotting which regions, categories, and segments drive profit.',
    tools: ['Tableau'],
    links: [
      { label: 'View dashboard (PDF)', url: 'https://drive.google.com/file/d/1tHsCkehtfO1C9dAi64m47R2jUHXCVID4/view?usp=sharing' }
    ]
  },
  {
    category: 'data',
    title: 'AdventureWorks Sales Dashboard',
    label: 'Excel dashboard',
    image: './assets/images/excel-dashboard.jpg',
    summary: 'Total sales and growth trends for AdventureWorks.',
    context: 'AdventureWorks is a sample company dataset for practicing business reporting.',
    approach: 'I built an Excel dashboard analyzing total sales and growth trends.',
    outcome: 'An interactive Excel dashboard of sales performance.',
    tools: ['Excel'],
    links: [
      { label: 'Open workbook', url: 'https://trinity0-my.sharepoint.com/:x:/r/personal/nnguyen5_trinity_edu/Documents/AdventureWorks_Dashboard.xlsx?d=wa0bac37c38024072aecab20c3be61bae&csf=1&web=1&e=Twq9BH' }
    ]
  },

  // ---------- Software Engineering ----------
  {
    category: 'swe',
    title: 'Kennel Link: Kennel Web Portal',
    label: 'Team software engineering project',
    date: '2024',
    image: './assets/images/kennel-link-project.jpg',
    summary: 'Full-stack web portal for a kennel business.',
    context: 'A web portal for a kennel business, built as a team software engineering project.',
    approach: 'Our team built the app with Node.js and Express on the backend, EJS, HTML, and CSS on the frontend, and a MongoDB database, with Jest tests. We worked through GitHub issues and pull requests.',
    outcome: 'A working web portal, built collaboratively through GitHub issues, branches, and pull requests.',
    tools: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Jest'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/nhngoc02/KennelProject_SWE' }
    ]
  },
  {
    category: 'swe',
    title: 'License Plate Detection with YOLO',
    label: 'Computer vision project',
    date: '2024',
    image: './assets/images/license-plate-project.jpg',
    summary: 'Training and fine-tuning YOLOv8 models across two license plate datasets.',
    context: 'I wanted to see how well YOLO object detection models find license plates, and how well a model trained on one dataset transfers to another.',
    approach: 'I trained YOLOv8 models on the CCPD and UFPR-ALPR datasets at several training sizes (200 to 1,800 images), tuned hyperparameters, and fine-tuned across datasets to test cross-dataset performance.',
    outcome: 'The tuned CCPD model reached precision of 1.0 and mAP50 of 0.995 on its test set. The report also documents where cross-dataset transfer broke down.',
    tools: ['Python', 'YOLOv8', 'Ultralytics', 'Jupyter'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/nhngoc02/license_plate_detection' }
    ]
  },
  {
    category: 'swe',
    title: 'Scala Space Game',
    label: 'Course project, CS2',
    image: './assets/images/space-game-project.jpg',
    summary: 'A Galaga-style space shooter written in Scala.',
    context: 'Final project for Trinity University\'s CS2 course.',
    approach: 'I built the game with object-oriented Scala: separate classes for the player, enemies, enemy swarms, bullets, and sprites, plus a small 2D vector class for movement.',
    outcome: 'A playable game where the player moves in four directions and shoots waves of aliens. A recording is on the GitHub page.',
    tools: ['Scala', 'Object-oriented design'],
    links: [
      { label: 'View on GitHub', url: 'https://github.com/nhngoc02/scala-space-game' }
    ]
  }
];
