
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

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

  const handleSubmit = (data: EnquiryFormData) => {
    console.log('Enquiry submitted:', data);
    toast({
      title: "Enquiry Submitted!",
      description: "Thank you for your interest. We'll get back to you soon.",
    });
    form.reset();
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-orange-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to make a difference? Fill out the form below and let us know how you'd like to contribute to our mission.
          </p>
        </div>

        <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-green-800 text-center">
              Enquiry Form
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    rules={{ required: "Name is required" }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-green-700 font-medium">Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your full name"
                            className="h-12 border-green-200 focus:border-green-500"
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
                        <FormLabel className="text-green-700 font-medium">Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Enter your email address"
                            className="h-12 border-green-200 focus:border-green-500"
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
                        <FormLabel className="text-green-700 font-medium">Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Enter your phone number"
                            className="h-12 border-green-200 focus:border-green-500"
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
                        <FormLabel className="text-green-700 font-medium">Purpose of Enquiry *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 border-green-200 focus:border-green-500">
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
                      <FormLabel className="text-green-700 font-medium">Your Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please provide details about your enquiry, how you'd like to help, or any questions you have..."
                          className="min-h-[120px] border-green-200 focus:border-green-500"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default EnquiryForm;
