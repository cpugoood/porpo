import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { useReducedMotion } from '../../hooks/useReducedMotion';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [sent, setSent] = useState(false);
  const prefersReduced = useReducedMotion();

  const onSubmit = (data: FormData) => {
    // Simulate sending
    console.log('Form data:', data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="section-heading text-center"
        initial={prefersReduced ? {} : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      <motion.form
        className="glass p-8 rounded-3xl max-w-xl mx-auto space-y-6"
        onSubmit={handleSubmit(onSubmit)}
        initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your Name"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' },
            })}
            placeholder="your@email.com"
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <textarea
            {...register('message', { required: 'Message is required' })}
            rows={5}
            placeholder="Your message..."
            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold text-white hover:opacity-90 transition"
        >
          Send Message
        </button>
        {sent && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-center">
            Message sent successfully!
          </motion.p>
        )}
      </motion.form>
      <div className="flex justify-center gap-6 mt-8">
        <a href="mailto:goood@example.com" className="text-white/70 hover:text-white transition">
          <EnvelopeIcon className="w-6 h-6 inline mr-1" /> goood@example.com
        </a>
        <a href="https://github.com/goood" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
          GitHub
        </a>
        <a href="https://t.me/goood" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white">
          Telegram
        </a>
      </div>
    </section>
  );
}
