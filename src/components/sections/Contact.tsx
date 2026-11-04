import { useState, type FormEvent } from 'react';
import { Card } from '../ui';
import { Button } from '../ui';
import { Input, Textarea } from '../ui';
import { IconMail, IconSend, IconCheckCircle, IconLoader } from '../ui/Icons';
import { useScrollAnimation } from '../../hooks';

export function Contact() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.subject.trim()) newErrors.subject = 'Le sujet est requis';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';
    else if (formData.message.trim().length < 10) newErrors.message = 'Le message doit contenir au moins 10 caractères';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState('submitting');

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // For demo purposes, we'll show success
    // In production, you would call your backend API here
    setFormState('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div
            className={`order-2 lg:order-1 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Contact
            </span>
            <h2 id="contact-title" className="section-title mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>
              Travaillons<br />ensemble.
            </h2>
            <p className="text-text-muted text-lg mb-10 animate-slide-up" style={{ animationDelay: '300ms' }}>
              Vous avez un projet en tête ? Une collaboration à proposer ? Ou simplement envie d\'échanger ?
              N\'hésitez pas à me contacter, je réponds personnellement à chaque message.
            </p>

            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
              <a
                href="mailto:contact@cr4cot.fr"
                className="flex items-center gap-4 p-4 card group hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-bg transition-colors">
                  <IconMail size={24} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-text-muted text-sm">Email professionnel</p>
                  <p className="font-medium text-text group-hover:text-primary transition-colors">contact@cr4cot.fr</p>
                </div>
              </a>

              <a
                href="https://github.com/cr4cot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card group hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gray-300/10 flex items-center justify-center text-gray-300 group-hover:bg-gray-300/20 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-muted text-sm">Code & Projets</p>
                  <p className="font-medium text-text group-hover:text-primary transition-colors">github.com/cr4cot</p>
                </div>
              </a>

              <a
                href="https://youtube.com/@cr4cot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 card group hover:border-primary/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center text-red-400 group-hover:bg-red-500/30 transition-colors">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                    <path d="M10 15l5-3-5-3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-text-muted text-sm">Contenu vidéo</p>
                  <p className="font-medium text-text group-hover:text-primary transition-colors">youtube.com/@cr4cot</p>
                </div>
              </a>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '200ms' }}
          >
            <Card variant="elevated" padding="lg" className="bg-bg-card/50 border-border/50">
              {formState === 'success' ? (
                <div className="text-center py-12 animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                    <IconCheckCircle size={32} className="text-green-400" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-text mb-3">Message envoyé !</h3>
                  <p className="text-text-muted mb-6">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
                  <Button variant="secondary" onClick={() => setFormState('idle')}>
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Input
                      label="Nom"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      error={errors.name}
                      required
                      autoComplete="name"
                    />
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      error={errors.email}
                      required
                      autoComplete="email"
                    />
                  </div>
                  <Input
                    label="Sujet"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Sujet de votre message"
                    error={errors.subject}
                    required
                  />
                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet, votre demande ou simplement dites bonjour..."
                    error={errors.message}
                    required
                    rows={5}
                  />
                  <Button type="submit" size="lg" className="w-full" loading={formState === 'submitting'}>
                    {formState === 'submitting' ? (
                      <>
                        <IconLoader size={20} aria-hidden="true" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <IconSend size={18} aria-hidden="true" />
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-text-subtle text-center">
                    En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter.
                    Aucune donnée n'est vendue à des tiers.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}