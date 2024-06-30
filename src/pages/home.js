import React from 'react';
import Navbar from "./../components/navbar";
import Footer from "./../components/footer";
import Home1 from "./../images/home1.jpg";
import Arrow from "./../images/arrow.png";
import SBF from "./../images/sbf.jpg";
import Internship from "./../images/internship.jpg";
import GWF from "./../images/gwf.jpg";
import Compfest from "./../images/compfest.jpg";
import TWP from "./../images/twp.jpg";
import SXC from "./../images/sxc.jpg";
import { useNavigate } from 'react-router-dom';

// Export the scrollToSection function so it can be used in Navbar
export const scrollToSection = () => {
    const section = document.getElementById("section-2");
    section.scrollIntoView({ behavior: 'smooth' });
};

const articles = [
    {
        title: 'Sekolah BEM Fasilkom 2023 - Bismit (Web Development)',
        desc: 'Sekolah BEM Fasilkom adalah sebuah acara pelatihan yang diselenggarakan oleh Fakultas Ilmu Komputer Universitas Indonesia. Saya diterima menjadi salah satu mentee dalam biro bismit.',
        date: '2023',
        time: '8 months ago',
        link: '/sbf-bismit',
        image: SBF
    },
    {
        title: 'My First Internship as a IT Project Manager in PT Teleakses Solusindo',
        desc: 'Pada liburan semester satu menuju semester dua, saya mendapatkan kesempatan berharga untuk dapat menjadi staff dari team project manager PT Teleakses Solusindo. Secara spesifik, saya membantu dalam beberapa task dari project manager untuk sebuah proyek bersama Indosat Ooredo.',
        date: 'January, 2024',
        time: '5 months ago',
        link: '/first-internship',
        image: Internship
    },
    {
        title: 'Green Welfare Indonesia',
        desc: 'Green Welfare Indonesia adalah sebuah organisasi non-profit yang fokus pada bidang sosial dan lingkungan. Saya mendapatkan kesempatan untuk menjadi salah satu dari dua staff front-end developer.',
        date: 'February, 2024',
        time: '4 months ago',
        link: '/green-welfare-indonesia',
        image: GWF
    },
    {
        title: 'IT Project Manager Compfest',
        desc: 'Compfest adalah kepanitiaan pertama pada lingkup Fakultas Ilmu Komputer Universitas Indonesia bagi saya. Pada kepanitiaan ini, saya berkesempatan menjadi salah satu dari dua IT Project Manager dibawah divisi Business Development.',
        date: 'April, 2024',
        time: '2 months ago',
        link: '/project-manager-compfest',
        image: Compfest
    },
    {
        title: 'The Powered Women - Day 1',
        desc: 'The Powered Women adalah sebuah acara dibawah YLI ( Youth Leaders Indonesia ) dimana saya berkesempatan untuk menjadi salah satu dari dua puluh mentee. Pada hari pertama, saya dibekali bagaimana pentingnya personal branding dan bagaimana cara untuk memaksimalkan linked in.',
        date: 'June, 2024',
        time: '2 days ago',
        link: '/the-powered-women',
        image: TWP
    },
    {
        title: 'Front End Developer - SxC International Summit 2024',
        desc: 'Students X CEO International Summit 2024 kali ini membuka sebuah divisi technology. Saya berkesempatan untuk menjadi salah satu dari divisi technology tersebut yang dibawahi oleh divisi General Support.',
        date: 'June, 2024',
        time: 'today',
        link: '/sxc-international-summit',
        image: SXC
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
            <div id="section-2" className="py-10">
                <h1 className='text-white font-bold text-5xl text-center mt-10'>Micheline's Journey</h1>
                <div className="hidden md:block border-t-2 border-white flex-grow mx-10 my-5"></div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
                    {articles.map(article => (
                        <div key={article.title} className="border-1 border-white rounded-lg shadow-lg cursor-pointer" onClick={() => handleCardClick(article.link)}>
                            <img src={article.image} className="w-full h-48 object-cover rounded-t-lg" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-white">{article.title}</h3>
                                <p className="text-white">{article.date} • {article.time}</p>
                                <p className="text-white">{article.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}
