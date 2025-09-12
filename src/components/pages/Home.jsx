import React from 'react'
import ServiceCard from "../serviceCard/ServiceCard.jsx";
function Home() {
    const services = [
        { iconUrl: 'https://img.icons8.com/color/96/000000/heart-with-pulse.png', title: 'Health Care', description: 'Comprehensive heart care services.', slud: "" },
        { iconUrl: 'https://img.icons8.com/color/96/000000/stethoscope.png', title: 'Find Doctors', description: 'Consult top doctors near you.', slud: "" },
        { iconUrl: 'https://img.icons8.com/color/96/000000/laboratory.png', title: 'Lab Tests', description: 'Get lab tests done at home.', slud: "" },
        { iconUrl: 'https://img.icons8.com/color/96/000000/syringe.png', title: 'Vaccines', description: 'Easy vaccine booking services.', slud: "" },
    ];

    return (
        <div className="bg-white min-h-auto">

            {/* Top Animated Heading */}
            <div className="min-h-auto bg-cover bg-center flex items-center justify-center py-1">
                <div className="w-[94%] h-screen relative">
                    <img
                        src="https://imgs.search.brave.com/_sdtywu7dpKe5FvdhgmR4sm2fuCZWDckVEUtppbyH5Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3ItaG9zcGl0/YWwtcm9vbS1sb29r/aW5nLWNhbWVyYV85/OTc1LTIzMDUzLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA"
                        alt="Health Banner"
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                    />

                </div>

            </div>

            {/* Services Cards */}
            <section className="p-6">
                <h2 className="text-3xl text-green-700 font-semibold text-center mb-4 ">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index}>
                            <ServiceCard
                                iconUrl={service.iconUrl}
                                title={service.title}
                                description={service.description}
                                slug={service.slud}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Animated Secondary Heading */}

                <section className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <div key={index}>
                                <ServiceCard
                                    iconUrl={service.iconUrl}
                                    title={service.title}
                                    description={service.description}
                                    slug={service.slud}
                                />
                            </div>
                        ))}
                    </div>
                </section>

        </div>
    );
}

export default Home;
