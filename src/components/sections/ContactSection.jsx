import React, { useState } from 'react';
import Swal from 'sweetalert2';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple client-side validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    Swal.fire({
      title: 'Sending message',
      text: 'Please wait while we send your message...',
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
      showConfirmButton: false,
    });

    try {
      // Placeholder: in a real app you'd POST to your API endpoint
      await new Promise((r) => setTimeout(r, 900));
      Swal.close();
      Swal.fire({
        icon: 'success',
        title: 'Sent',
        text: 'Message sent. We will get back to you shortly.',
      });
      setForm({ name: '', email: '', message: '' });
    } catch {
      Swal.close();
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to send message. Please try again later.',
      });
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-emerald-600 font-semibold mb-2">CONTACT</p>
          <h2 className="text-3xl font-bold text-gray-900">Get in touch with our team</h2>
          <p className="text-gray-600 mt-3">Have questions or need support? Send us a message and we'll respond as soon as possible.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Your email"
              className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
          </div>

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            placeholder="How can we help you?"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-200 mb-4"
          />

          <div className="flex items-center justify-between">
            <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full transition">
              Send Message
            </button>

            {status && (
              <div className={`ml-4 text-sm ${status.type === 'error' ? 'text-red-600' : status.type === 'success' ? 'text-green-600' : 'text-gray-600'}`}>
                {status.message}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
