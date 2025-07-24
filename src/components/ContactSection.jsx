import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from 'lucide-react'
import React from 'react'
import { cn } from '../lib/utils'

const ContactSection = () => {
    return (
        <section
            id='contact'
            className='p-24 px-4 relative bg-secondary/30'
        >
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'>Touch</span>
                </h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-6'> Contact Information</h3>
                        <div className='space-y-6 justify-center ml-0 lg:ml-20'>
                            <div className='flex items-center space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium mr-20'>Email</h4>
                                    <a href="mailto:darshankyada115@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                        darshankyada115@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a href="tel:+91 8866549182" className='text-muted-foreground hover:text-primary transition-colors'>
                                        +91 8866549182
                                    </a>
                                </div>
                            </div>
                            <div className='flex items-center space-x-4'>
                                <div className='p-3 rounded-full bg-primary/10'>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                                        Bengaluru, KA, India
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='pt-8 lg:mr-10'>
                            <h4 className='font-medium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a
                                    href="https://www.linkedin.com/in/darshan-kyada/"
                                    target='_blank'
                                >
                                    <Linkedin />
                                </a>
                                <a href="">
                                    <Twitter />
                                </a>
                                <a href="">
                                    <Instagram />
                                </a>
                                <a href="">
                                    <Twitch />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
                        <form
                            action="https://formspree.io/f/xpwlpedd"
                            method='POST'
                            className='space-y-6'
                        >
                            {/* Hidden: custom subject and thank-you redirect */}
                            <input type="hidden" name="_subject" value="New message from portfolio contact form" />
                            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

                            <div>
                                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='Darshan...'
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='hello@gmail.com'
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                    placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button
                                type='submit'
                                className={cn('cosmic-button w-full flex items-center justify-center gap-2')}
                            >
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
