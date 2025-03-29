import React from 'react';

const PlanSection = () => {
  const categories = [
    {
      title: "ध्वज गीत",
      image: "",
      description: "text."
    },
    {
      title: "Online Registration",
      image: "",
      description: "text."
    },
    {
      title: "ताज़ा खबर",
      image: "",
      description: "text."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div 
          className="h-full w-full bg-center bg-no-repeat bg-cover"
          style={{ 
            backgroundImage: "url('/plan-bg.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex flex-col items-center justify-center mb-8">
       
          <div className="mb-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-700 to-red-800 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-700 to-red-800"></div>
              </div>
            </div>
          </div>
          
        
          <div className="mb-4">
            <img 
              src="/ring.png" 
              alt="Wedding Ring" 
              className="w-16 h-16 object-contain"
            />
          </div>
          
      
          <h1 className="text-3xl font-bold text-red-800 mb-2">Our Plans</h1>
        
        </div>
        
   
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
           
              <div className="mb-1 overflow-hidden bg-white p-2 shadow-lg">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
           
              <div className="bg-red-50 p-6 flex flex-col items-center border border-red-100">
                <h3 className="font-bold text-red-800 mb-2">{category.title}</h3>
                <p className="text-sm text-center text-gray-700">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanSection;