import React from 'react';
import {ServiceCard} from "../../serviceCard/ServiceCard.jsx";

function HealthCare() {
    const healthcareServices = [
        { iconUrl: 'https://img.icons8.com/color/96/000000/stethoscope.png', title: 'General Checkup', description: 'Routine health exams to maintain well-being.' },
        { iconUrl: 'https://img.icons8.com/color/96/000000/hospital-bed.png', title: 'Inpatient Care', description: 'Comfortable rooms for extended medical care.' },
        { iconUrl: 'https://img.icons8.com/color/96/000000/medical-doctor.png', title: 'Specialist Consultation', description: 'Consult experienced doctors from various specialties.' },
        { iconUrl: 'https://img.icons8.com/color/96/000000/emergency.png', title: 'Emergency Services', description: '24/7 emergency medical support for critical cases.' },
    ];

    return (
        <div className="min-h-screen bg-green-50 p-8">

            {/* Page Title */}
            <h1 className="text-4xl font-extrabold text-center text-green-700 mb-8">
                Comprehensive Health Care Services
            </h1>
            <p className="text-center text-lg text-gray-700 mb-12">
                We offer advanced medical care across various departments to ensure your health and well-being.
            </p>

            {/* Healthcare Services */}
            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {healthcareServices.map((service, index) => (
                    <ServiceCard
                        key={index}
                        iconUrl={service.iconUrl}
                        title={service.title}
                        description={service.description}
                        slug=""
                    />
                ))}
            </section>

            {/* Why Choose Us */}
            <section className="bg-white rounded-lg shadow-md p-8 text-center mb-12">
                <h2 className="text-3xl font-semibold text-green-700 mb-6">
                    Why Choose Our Hospital?
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-lg">
                    <li>Highly experienced medical professionals</li>
                    <li>State-of-the-art medical equipment</li>
                    <li>Personalized patient care</li>
                    <li>24/7 Emergency services</li>
                </ul>
            </section>

            {/* Call to Action */}
            <section className="text-center">
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
                    Book an Appointment
                </button>
            </section>

        </div>
    );
}

export default HealthCare;
