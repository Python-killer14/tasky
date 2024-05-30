"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { formatSlug } from "@/app/utils/formatSlug";
import MaxWidthWrapper from "./MaxWidthWrapper";

function Login({ callbackUrl }) {
  const formRef = useRef();
  const { data: session } = useSession();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    await signIn("credentials", {
      ...data,
      redirect: true,
      callbackUrl: callbackUrl || `/u/${session?.user?.username}/boards`,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen py-6">
      <div>
        <h1 className="text-2xl font-bold mb-4">Login Form</h1>
        <Card className="max-w-80">
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>Please enter your email</CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="email" name="email" placeholder="Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Password</Label>
                  <Input id="password" name="password" placeholder="Password" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Button type="submit">Submit</Button>
                  <Link href={callbackUrl || "/"} className="w-full">
                    <Button className="w-full" type="button">
                      Cancel
                    </Button>
                  </Link>
                </div>
              </div>
            </form>
            <div className="flex flex-col space-y-1.5 mt-4">
              <Button
                onClick={() =>
                  signIn("github", {
                    redirect: true,
                    callbackUrl: `/`,
                  })
                }
                variant="outline"
                className="w-full "
              >
                Github
              </Button>
              <Button
                onClick={() =>
                  signIn("google", {
                    redirect: true,
                    callbackUrl: `/`,
                  })
                }
                variant="outline"
                className="w-full"
              >
                Google
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Login;
