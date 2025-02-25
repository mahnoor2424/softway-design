import { useState } from "react";


// import React from "react"; 
// const HomePackages: React.FC = () => {
//     const [selectedCategory, setSelectedCategory] = useState<string>("Logo Design");
//     const [activeTab, setActiveTab] = useState<number>(1);
  
//     const handleTabClick = (tabId: number) => {
//       setActiveTab(tabId);
//     };
//     // Filter plans by selected category
//     const filteredPlans = pricingPlans.filter(
//       (plan) => plan.category === selectedCategory
//     );
  
//     return (
      
//       <div
//         style={{
//           margin: "0 auto", // Center the container
//         }}
//       >
        
        
        
//          <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-12 col-lg-8">
//               <div className="section__header text-center">
//                 <span className="sub-title">
//                 Pricing Plans
//                   <i className="fa-solid fa-arrow-right"></i>
//                 </span>
//                 <h2 className="title title-anim">Flexible Pricing Plans to Fit Your Needs</h2>
//               </div>
//             </div>
//           </div>
//         </div>
        
  
//   <section className="section service-t pt-2">
//         <div className="container">
      
//   <div style={{ marginBottom: "20px", textAlign: 'center'}}>
//           {["Logo Design", "Branding", "Website", "Video Animation"].map(
//             (category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`btn ${selectedCategory === category ? 'btn--primary' : 'btn--secondary'}`}
//                 style={{
                
//                   marginLeft: '20px',
//                 }}
               
//               >
//                 {category}
//               </button>
//             )
//           )}
//         </div>
  
