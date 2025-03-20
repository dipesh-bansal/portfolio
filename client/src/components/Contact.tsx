import { useState } from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init({
  publicKey: 'YS4MCXpCF8DeFWY6I',
  limitRate: {
    throttle: 5000, // 5 seconds
  },
});

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = form.getValues();
      const result = await emailjs.send(
        'service_7n8a7ff',
        'template_u6dvc08',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YS4MCXpCF8DeFWY6I'
      );

      console.log('Email sent successfully:', result);

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
        duration: 5000
      });
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-space font-bold">
            <span className="text-white">Connect with me</span>
            <span className="text-primary">_</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Form {...form}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-code text-gray-300">Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="w-full bg-[#1A1A1A] border border-primary rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary font-code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-code text-gray-300">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your@email.com"
                          className="w-full bg-[#1A1A1A] border border-primary rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary font-code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-code text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message here..."
                          rows={5}
                          className="w-full bg-[#1A1A1A] border border-primary rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-primary font-code"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="neo-border rounded-md px-6 py-3 text-primary text-sm font-code hover:bg-primary hover:text-[#121212] transition duration-300 flex items-center"
                >
                  {isSubmitting ? "Sending..." : "Send Message"} <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {SOCIAL_LINKS.map((social, index) => (
                <motion.a 
                  key={social.name}
                  href={social.url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neo-border rounded-full h-32 flex flex-col items-center justify-center hover:bg-primary hover:text-[#121212] transition duration-300 group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                >
                  <div className="text-primary group-hover:text-[#121212] text-2xl mb-2">
                    <i className={`fab fa-${social.icon}`}></i>
                  </div>
                  <span className="font-code text-sm">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
