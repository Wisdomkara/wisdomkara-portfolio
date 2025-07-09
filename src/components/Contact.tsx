
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success state after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'wisdom.kara@email.com',
      href: 'mailto:wisdom.kara@email.com',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Available Worldwide',
      href: '#',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-400 mb-8">
                I'm always excited to work on new projects and collaborate with innovative teams. 
                Whether you have a specific project in mind or just want to chat about possibilities, 
                I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/30 hover:bg-slate-700/40 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className={`p-3 bg-gradient-to-r ${info.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{info.title}</h4>
                    <p className="text-slate-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-slate-700/30">
              <h4 className="text-white font-bold mb-3">Response Time</h4>
              <p className="text-slate-400 text-sm">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                please mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
              
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <p className="text-green-400">Thank you! Your message has been sent successfully.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-slate-300 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-slate-300 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-slate-300 font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-slate-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors resize-none"
                    placeholder="Tell me about your project or ideas..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
