import { useState } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = t('contact.nameRequired');
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = t('contact.emailRequired');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('contact.emailInvalid');
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = t('contact.messageRequired');
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setFormStatus('success');
        
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' });
          setFormStatus('idle');
        }, 3000);
      }, 1500);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-primary-900 p-6 md:p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t('contact.name')} *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-md border ${
            errors.name 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 dark:border-primary-700 focus:ring-primary-500 dark:focus:ring-accent-950'
          } focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white dark:bg-primary-800 text-gray-900 dark:text-white transition-colors duration-300`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle size={14} className="mr-1" /> {errors.name}
          </p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t('contact.email')} *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 rounded-md border ${
            errors.email 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 dark:border-primary-700 focus:ring-primary-500 dark:focus:ring-accent-950'
          } focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white dark:bg-primary-800 text-gray-900 dark:text-white transition-colors duration-300`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle size={14} className="mr-1" /> {errors.email}
          </p>
        )}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t('contact.message')} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={`w-full px-4 py-2 rounded-md border ${
            errors.message 
              ? 'border-red-500 focus:ring-red-500' 
              : 'border-gray-300 dark:border-primary-700 focus:ring-primary-500 dark:focus:ring-accent-950'
          } focus:outline-none focus:ring-2 focus:ring-opacity-50 bg-white dark:bg-primary-800 text-gray-900 dark:text-white transition-colors duration-300`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle size={14} className="mr-1" /> {errors.message}
          </p>
        )}
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting || formStatus === 'success'}
        className={`w-full py-2.5 rounded-md font-medium flex items-center justify-center transition-all duration-300 ${
          formStatus === 'success'
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-primary-500 hover:bg-primary-600'
        } text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500`}
      >
        {isSubmitting ? (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : formStatus === 'success' ? (
          <Check size={20} className="mr-2" />
        ) : (
          <Send size={18} className="mr-2" />
        )}
        {formStatus === 'success' ? t('contact.success') : t('contact.send')}
      </button>
      
      {formStatus === 'error' && (
        <p className="mt-3 text-sm text-red-500 flex items-center justify-center">
          <AlertCircle size={16} className="mr-1" /> {t('contact.error')}
        </p>
      )}
    </form>
  );
};

export default ContactForm;