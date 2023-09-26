// import React from 'react'
import GridCard from "../UI/GridCard"
function HeroSection() {
    return (
        <>
            <section className="flex flex-col mx-16 gap-6 mt-10">
                <GridCard />
            <div className="flex flex-col justify-center  gap-3">
                    <h1 className="font-bold text-7xl ">Online experiences</h1>
                    <p className="max-w-sm text-lg">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
                </div>
            </section>
        </>
    )
}

export default HeroSection
