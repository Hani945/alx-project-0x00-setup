import React from "react"
import Card from "@/components/Card"

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Landing Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card 
          title="Beautiful House" 
          image="/assets/images/house.png" 
          badge="Featured" 
          rating={5} 
        />
        <Card 
          title="Luxury Apartment" 
          image="/assets/images/house.png" 
          badge="New" 
          rating={4} 
        />
        <Card 
          title="Cozy Cabin" 
          image="/assets/images/house.png" 
          rating={3} 
        />
      </div>
    </div>
  )
}

export default Landing
