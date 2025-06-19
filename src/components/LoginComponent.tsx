"use client";

import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { Roboto } from "next/font/google";
import { useRouter } from "next/navigation";

const roboto = Roboto({
  weight: ["300"],
  subsets: ["latin"],
  display: "swap",
});

interface LoginFormValues {
  username: string;
  password: string;
}

const LoginComponent = () => {
  const form = useForm<LoginFormValues>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: LoginFormValues) => {
    try {
      if (data.username && data.password) {
        const token = "your-auth-token"; // Replace with actual token from API
        // Set cookie with secure attributes, conditional for development
        document.cookie = `authToken=${token}; path=/; SameSite=Strict${
          process.env.NODE_ENV === "production" ? "; Secure" : ""
        }`;
        localStorage.setItem("username", data.username);
        console.log("Login successful:", data);

        // Add a slight delay to ensure cookie is set before redirect
        setTimeout(() => {
          router.push("/");
          // Force a page refresh to ensure cookie is available
          router.refresh();
        }, 100);
      } else {
        form.setError("username", { message: "Invalid username or password" });
      }
    } catch (error) {
      console.error("Login failed:", error);
      form.setError("username", { message: "Login failed. Please try again." });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-7xl h-[600px] shadow-2xl rounded-2xl overflow-hidden my-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden lg:block w-1/2 bg-primary-foreground"
        >
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/login.jpeg"
              alt="Login Illustration"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 bg-white flex items-center justify-center p-6"
        >
          <div className="w-full max-w-md">
            <div className="text-center">
              <div className="relative h-40 mx-auto">
                <Image
                  src="/assets/images/eon.png"
                  alt="EON Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={`text-gray-700 font-medium group ${roboto.className}`}
                      >
                        Username
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your username"
                          className={`w-full px-4 py-6 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-black ${roboto.className}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm mt-1" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel
                        className={`text-gray-700 font-medium group ${roboto.className}`}
                      >
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          className={`w-full px-4 py-6 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 text-black ${roboto.className}`}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-500 text-sm mt-1" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-chart-1 h-12 text-white hover:bg-chart-2 cursor-pointer transition-colors duration-200"
                >
                  Login
                </Button>
              </form>
            </FormProvider>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginComponent;