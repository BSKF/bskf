import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  enquiry: string;
}

const EnquiryForm = () => {
  const { toast } = useToast();
  const form = useForm<EnquiryFormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      purpose: '',
      enquiry: '',
    },
  });

  const purposeOptions = [
    { value: 'volunteer', label: 'Become a Volunteer' },
    { value: 'donation', label: 'Make a Donation' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'training', label: 'Training Programs' },
    { value: 'support', label: 'General Support' },
    { value: 'other', label: 'Other' },
  ];

  const handleSubmit = async (values: EnquiryFormData) => {
    try {
      const scriptURL = "https://script.google.com/macros/s/AKfycbwYqgfGH1ImUyiRUyJc0plXObKZIVv1g32EI2npoS9r7KGeFWRjtahGdSDPWLsfgKsMOA/exec";
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(values)
      });

      const result = await response.json();

      if (result.result === "success") {
        console.log('Enquiry submitted:', values);
        toast({
          title: "Enquiry Submitted!",
          description: "Thank you for your interest. We'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: "There was an error submitting your form. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section 
      className="relative py-20 px-6 bg-cover bg-center"
      style={{ 
        backgroundImage: "url('/enquiryform_background_img.jpg')" // <-- Set to Farmer.jpg
      }}
    >
      {/* Overlay has been removed */}

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {/* Text color changed to dark green for readability */}
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Get in Touch
          </h2>
          {/* Text color changed to darker gray */}
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Ready to make a difference? Let us know how you'd like to contribute to our mission.
          </p>
        </div>

        <Card className="bg-white/70 backdrop-blur-sm shadow-2xl border-0 overflow-hidden border-2 border-green-700">
          <h3 className="text-1xl md:text-4xl font-bold text-green-800 mb-5 mt-4 text-center">
            Enquiry Form
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-1">

            {/* Right Side: Form */}
            <div className="p-8 md:p-10 lg:border-l border-gray-200 items-center">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-green-800 font-medium">Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              className="h-12"
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
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-green-800 font-medium">Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              className="h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      rules={{ required: "Phone number is required" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-green-800 font-medium">Phone Number *</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Your phone number"
                              className="h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="purpose"
                      rules={{ required: "Please select a purpose" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-green-800 font-medium">Purpose of Enquiry *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select purpose" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {purposeOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="enquiry"
                    rules={{ required: "Please provide details about your enquiry" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-800 font-medium">Your Message *</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Please provide details about your enquiry, how you'd like to help, or any questions you have..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="text-right">
                    <Button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 h-12 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      Submit Enquiry
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EnquiryForm;