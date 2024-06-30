import React from 'react';
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import Home1 from "./../images/home1.jpg";
import Arrow from "./../images/arrow.png";
import { useNavigate } from 'react-router-dom';

// Export the scrollToSection function so it can be used in Navbar
export const scrollToSection = () => {
    const section = document.getElementById("section-2");
    section.scrollIntoView({ behavior: 'smooth' });
};

const articles = [
    {
        title: 'Is There a Wrong Way of Praying?',
        date: 'May 28, 2023',
        time: '2 min',
        link: '/is-there-a-wrong-way-of-praying',
        image: '/path/to/image1.jpg'
    },
    {
        title: '5 Spiritual Disciplines to Lighten Your Load',
        date: 'May 28, 2023',
        time: '1 min',
        link: '/5-spiritual-disciplines-to-lighten-your-load',
        image: '/path/to/image2.jpg'
    },
    {
        title: 'How Can You Learn to Trust God?',
        date: 'May 28, 2023',
        time: '2 min',
        link: '/how-can-you-learn-to-trust-god',
        image: '/path/to/image3.jpg'
    },
];

export default function Home() {
    const navigate = useNavigate();

    const handleCardClick = (link) => {
        navigate(link);
    };

    return (
        <div className="bg-primary-1 relative min-h-screen">
            <Navbar scrollToSection={scrollToSection} /> {/* Pass scrollToSection as prop */}
            <div className="relative h-screen">
                <img src={Home1} className="absolute inset-0 w-full h-full object-cover" />
                <h1 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl text-center">
                    Hi, I'm Micheline 
                    <p className="text-2xl">Welcome to my journey</p>
                </h1>
                <button 
                    onClick={scrollToSection} 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-20"
                >
                    <img src={Arrow} className="w-20"/>
                </button>
            </div>
            <div id="section-2" className="h-screen bg-secondary-">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                    {articles.map(article => (
                        <div key={article.title} className="border-1 border-white rounded-lg shadow-lg cursor-pointer" onClick={() => handleCardClick(article.link)}>
                            <img src={article.image} className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-white">{article.title}</h3>
                                <p className="text-white">{article.date} • {article.time}</p>
                                <p className="text-white">Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
