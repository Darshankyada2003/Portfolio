import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'

import boat from '../assets/Image_Project/boAt.png'
import figmaDesign from '../assets/Image_Project/figmaDesign.png'
import netfilx from '../assets/Image_Project/netflix.png'

const projects = [
    {
        id: 1,
        title: 'Netflix Clone',
        description: 'A responsive Netflix clone built with React.js, featuring smooth UI and dynamic content from a movie API.',
        image: netfilx,
        tags: ['React.js', 'JavaScript', 'HTML', 'Css', 'Bootstrap'],
        demoURL: '',
        githubURL: 'https://github.com/Darshankyada2003/netfilx-clone'
    },
    // {
    //     id: 2,
    //     title: 'AdminLTE-React',
    //     description: 'This project is a modern admin dashboard built with React.js, styled using Tailwind CSS, and inspired by AdminLTE design. It features API integration for dynamic data handling and provides a responsive, clean UIfor admin management. Ideal for scalable and interactive frontend dashboards.',
    //     image: './public/Image_Project/admin_LTE.png',
    //     tags: ['React.js', 'JavaScript', 'HTML', 'Css', 'Bootstrap'],
    //     demoURL: '#',
    //     githubURL: 'https://github.com/Darshankyada2003/AdminLTE-React'
    // },
    {
        id: 3,
        title: 'FigmaDesign',
        description: 'Built a pixel-perfect responsive webpage from Figma using React.js, Tailwind CSS, and a scalable component-based architecture.',
        image: figmaDesign,
        tags: ['React.js', 'JavaScript', 'HTML', 'Tailwind CSS', 'Bootstrap'],
        demoURL: '',
        githubURL: 'https://github.com/Darshankyada2003/FigmaDesign'
    },
    {
        id: 4,
        title: 'boAt',
        description: 'Modern boAt-inspired UI with vibrant visuals, carousels, and a responsive layout for a bold, seamless shopping experience.',
        image: boat,
        tags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
        demoURL: 'https://boat-lyart.vercel.app/',
        githubURL: 'https://github.com/Darshankyada2003/boAt'
    },
]

const ProjectSection = () => {
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Featured <span className='text-primary'>Projects</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Here are some of my recent projects. Each projects was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>
                <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map((project, key) => (
                        <div
                            className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover'
                            key={key}
                        >
                            <div className='h-38 overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                            </div>
                            <div className='p-6'>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>
                                <div className='flex justify-between items-center'>
                                    <div className='flex space-x-3'>
                                        <a
                                            href={project.demoURL}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubURL}
                                            target='_blank'
                                            className='text-foreground/80 hover:text-primary transition-colors duration-300'
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='text-center mt-12'>
                    <a
                        href="https://github.com/Darshankyada2003"
                        className='cosmic-button w-fit flex items-center mx-auto gap-2'
                        target='_blank'
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection
