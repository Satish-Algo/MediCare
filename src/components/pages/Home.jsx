import React from 'react'
import {ServiceCard} from "../serviceCard/ServiceCard.jsx";
function Home() {
    const services = [
        { iconUrl: 'https://img.icons8.com/color/96/000000/heart-with-pulse.png', title: 'Health Care', description: 'Comprehensive heart care services.', slug: "/health" },
        { iconUrl: 'https://img.icons8.com/color/96/000000/stethoscope.png', title: 'Find Doctors', description: 'Consult top doctors near you.', slug: "" },
        { iconUrl: 'https://img.icons8.com/color/96/000000/laboratory.png', title: 'Lab Tests', description: 'Get lab tests done at home.', slug: "" },
        { iconUrl: 'https://img.icons8.com/color/96/000000/syringe.png', title: 'Vaccines', description: 'Easy vaccine booking services.', slug: "" },
    ];
    const departments = [

        { iconUrl: 'https://img.icons8.com/color/96/000000/heart-with-pulse.png', title: 'Cardiology', description: 'Heart and blood vessel treatment.' },
        { iconUrl: 'https://img.icons8.com/color/96/000000/brain.png', title: 'Neurology', description: 'Brain and nervous system care.' },
        { iconUrl: 'https://img.icons8.com/color/96/000000/baby.png', title: 'Pediatrics', description: 'Child health services.' },
        { iconUrl: 'https://img.icons8.com/color/96/000000/bone.png', title: 'Orthopedics', description: 'Bone and joint care.' },
        { iconUrl: 'https://img.icons8.com/color/96/000000/female.png', title: 'Gynecology', description: 'Women reproductive health.' },
        { iconUrl: 'https://img.icons8.com/color/96/000000/cancer-ribbon.png', title: 'Oncology', description: 'Cancer care and treatment.' },
        { iconUrl: 'https://img.icons8.com/color/96/000000/ophthalmology.png', title: 'Ophthalmology', description: 'Eye care services.' },
        { iconUrl: 'https://img.icons8.com/color/96/000000/tooth.png', title: 'Dentistry', description: 'Dental and oral care.' },

];


    return (
        <div className=" min-h-auto">
            {/* Top Animated Heading */}
            <div className="min-h-auto bg-cover bg-center flex items-center justify-center py-1 bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-lg shadow-lg mb-4">
                <div className="w-[94%] h-[80%] relative  justify-center flex items-center my-6 space-x-6">
                    <img
                        src="https://imgs.search.brave.com/_sdtywu7dpKe5FvdhgmR4sm2fuCZWDckVEUtppbyH5Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3ItaG9zcGl0/YWwtcm9vbS1sb29r/aW5nLWNhbWVyYV85/OTc1LTIzMDUzLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA"
                        alt="Health Banner"
                        className="w-[70%] h-[70%] object-cover rounded-lg shadow-lg"
                    />
                    <img
                        src="https://imgs.search.brave.com/_sdtywu7dpKe5FvdhgmR4sm2fuCZWDckVEUtppbyH5Y/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9k/b2N0b3ItaG9zcGl0/YWwtcm9vbS1sb29r/aW5nLWNhbWVyYV85/OTc1LTIzMDUzLmpw/Zz9zZW10PWFpc19o/eWJyaWQmdz03NDAm/cT04MA"
                        alt="Health Banner"
                        className="w-[70%] h-[70%] object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Services Cards */}
            <section className="p-8 bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl font-extrabold text-center text-green-800 mb-12  ">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index}>
                            <ServiceCard
                                iconUrl={service.iconUrl}
                                title={service.title}
                                description={service.description}
                                slug={service.slug}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="p-8 bg-gradient-to-r from-green-100 via-green-200 to-green-300 rounded-lg shadow-lg">
                {/* Animated Secondary Heading */}
                <h2 className="text-4xl font-extrabold text-center text-green-800 mb-12 ">
                    Hospital Departments
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    {departments.map((dept, index) => (
                        <div key={index}>
                            <ServiceCard
                                iconUrl={dept.iconUrl}
                                title={dept.title}
                                description={dept.description}
                                slug={dept.slug}
                            />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}

export default Home;
