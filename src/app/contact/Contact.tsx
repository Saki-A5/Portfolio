"use client"
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'
import { useForm } from 'react-hook-form';

const Contact = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
    },
    mode: "onChange"
  });
  return (
    <div className='contact'>
      <h1 className='text-center text-white text-3xl font-extrabold pt-8 mb-12'>Contact Me!</h1>
      <div className='flex flex-col md:flex-row-reverse'>
        <div className='justify-center items-center w-9/10 mx-auto pb-8 text-white md:w-1/2 md:mx-8'>
        <Form {...form}>
          <FormField 
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
          />
          <FormField 
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input placeholder='Email' {...field}/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
          />
          <FormField 
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem className='mb-2'>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Textarea placeholder='Subject' className='min-h-50 resize-y'/>
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
          />
          <Button>Submit</Button>
          </Form>
      </div>
      <div className='font-semibold w-9/10 mx-auto text-white md:w-1/2 md:mx-8'>
        <h1 className='text-2xl font-extrabold mb-4'>Let's talk</h1>
        <p className='mb-4'>I'm currently available to take on new projects so feel free to send me a message about anything that you want to work on. You can contact anytime soon.</p>
        <div className='flex mb-4'>
          <img src="/envelope-alt.png" alt="message" className='filter brightness-0 invert mr-4'/> 
          kaysaki63@gmail.com
        </div>
        <div className='flex mb-4'>
          <img src="/phone-ring.png" alt="message" className='filter brightness-0 invert mr-4'/> 
          091111111111
        </div>
        <div className='flex mb-4'>
          <img src="/location.png" alt="message" className='filter brightness-0 invert mr-4'/> 
          Port Harcourt, Rivers State, Nigeria
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact;
