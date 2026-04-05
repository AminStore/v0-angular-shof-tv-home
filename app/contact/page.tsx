'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', subject: '', message: '' });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black">
      <Navbar />

      {/* Hero */}
      <section className="py-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-black mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">Have a question about your subscription, a movie request, or just want to say hi? We&apos;re here for you.</p>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Contact Methods */}
          <div>
            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-8 mb-6">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-300 text-sm mb-4">Our team is ready to help.</p>
              <p className="text-yellow-500 font-bold">support@shoftv.com</p>
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-8 mb-6">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-300 text-sm mb-4">Mon-Fri from 8am to 5pm.</p>
              <p className="text-yellow-500 font-bold">+1 (555) 123-4567</p>
            </div>

            <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-8">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-2">Headquarters</h3>
              <p className="text-gray-300 text-sm">123 ShofTV Blvd<br/>Cinema City, CA 90210</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500"
              >
                <option value="">Select a subject...</option>
                <option value="subscription">Subscription Inquiry</option>
                <option value="billing">Billing Question</option>
                <option value="technical">Technical Support</option>
                <option value="feedback">Feedback</option>
                <option value="other">Other</option>
              </select>

              <textarea
                name="message"
                placeholder="How can we help you today?"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />

              <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="w-full h-96 bg-gray-800 rounded-xl flex items-center justify-center text-gray-500">
            [Map goes here]
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
