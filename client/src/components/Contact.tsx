import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: "fas fa-map-marker-alt",
    title: "Visit Our Lab",
    content: "123 Innovation Way\nMarine Tech Center, CA 90210",
    color: "bg-tech-blue"
  },
  {
    icon: "fas fa-phone",
    title: "Call Us",
    content: "(555) 123-INNO\nMon-Fri: 8am-6pm PST",
    color: "bg-innovation-teal"
  },
  {
    icon: "fas fa-envelope",
    title: "Email",
    content: "info@innonautics.com\npartners@innonautics.com",
    color: "bg-electric-cyan"
  }
];

const quickActions = [
  { icon: "fas fa-calendar", text: "Schedule a Demo" },
  { icon: "fas fa-download", text: "Download Tech Specs" },
  { icon: "fas fa-handshake", text: "Partnership Inquiry" }
];

const socialLinks = [
  { icon: "fab fa-instagram", href: "#" },
  { icon: "fab fa-facebook", href: "#" },
  { icon: "fab fa-youtube", href: "#" },
  { icon: "fab fa-tiktok", href: "#" }
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      experienceLevel: undefined,
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to send message");
      }
      
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    setIsSubmitting(true);
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading font-bold text-5xl md:text-6xl text-deep-marine mb-6 tracking-tight">
            Contact
          </h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed">
            Get in touch with our experts for demonstrations, partnerships, or questions about our autonomous water solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">First Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John" 
                            {...field} 
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Last Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Doe" 
                            {...field} 
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Email *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          placeholder="john@example.com" 
                          {...field} 
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Phone</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="(555) 123-4567" 
                          {...field}
                          value={field.value || ""}
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="experienceLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Experience Level</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent">
                            <SelectValue placeholder="Select your level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
                          <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                          <SelectItem value="pro">Professional</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={4}
                          placeholder="Tell us about your water sport needs, project requirements, or partnership interests..." 
                          {...field} 
                          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tech-blue focus:border-transparent resize-none"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full !bg-deep-marine !text-white py-4 rounded-lg text-lg font-semibold hover:!bg-gray-800 transition-colors shadow-xl border-2 border-deep-marine"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-2xl text-deep-navy mb-6">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                      <i className={`${info.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{info.title}</h4>
                      <p className="text-gray-600 whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <Card className="bg-deep-marine rounded-2xl p-8 text-white">
              <CardContent className="p-0">
                <h4 className="font-heading font-bold text-xl mb-6">Quick Actions</h4>
                <div className="space-y-4">
                  {quickActions.map((action, index) => (
                    <button 
                      key={index}
                      className="w-full text-left py-3 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    >
                      <i className={`${action.icon} mr-3`}></i>
                      {action.text}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div>
              <h4 className="font-heading font-bold text-xl text-deep-marine mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="w-12 h-12 bg-tech-blue rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
