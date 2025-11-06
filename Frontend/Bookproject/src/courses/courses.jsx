import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

function Courses() {   // Use PascalCase
    return (
        <>
            <Navbar />
            <div className="text-center p-10 min-h-screen">
                <h1 className="text-3xl font-bold">Courses Page</h1>
                
            </div>
            <Footer />
        </>
    );
}

export default Courses;
