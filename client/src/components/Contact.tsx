import { useState, useEffect } from "react";
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    try {
      // Initialize EmailJS
      emailjs.init({
        publicKey: "YS4MCXpCF8DeFWY6I", // Hardcoding for immediate testing
        limitRate: {
          throttle: 5000, // 5 seconds
        },
      });
    } catch (error) {
      console.error('Failed to initialize EmailJS:', error);
    }
  }, []);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        to_name: "Dipesh",
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        reply_to: data.email,
        title: "Portfolio Contact Form",
        time: new Date().toLocaleString()
      };

      const result = await emailjs.send(
        "service_7n8a7ff", // Hardcoding for immediate testing
        "template_u6dvc08", // Hardcoding for immediate testing
        templateParams
      );

      if (result.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          duration: 5000
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
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

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

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
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-space font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:dipeshbansal533@gmail.com" className="flex items-center space-x-3 text-gray-400 hover:text-primary transition">
                  <i className="fas fa-envelope"></i>
                  <span className="font-code">dipeshbansal533@gmail.com</span>
                </a>
                <a href="tel:+919027372927" className="flex items-center space-x-3 text-gray-400 hover:text-primary transition">
                  <i className="fas fa-phone"></i>
                  <span className="font-code">+91 9027372927</span>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-space font-bold text-white mb-4">Social Links</h3>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full flex items-center justify-center neo-border text-primary hover:bg-primary hover:text-[#121212] transition duration-300"
                    title={link.name}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
