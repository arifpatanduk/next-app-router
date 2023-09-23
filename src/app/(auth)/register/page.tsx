"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Input,
} from "@nextui-org/react";
import Link from "next/link";

export default function Register() {
  return (
    <div className="h-screen flex justify-center items-center max-w-2xl mx-auto">
      <Card className="w-8/12">
        <CardBody>
          <p className="text-center font-bold text-lg">Register</p>
          <form className="space-y-6 py-5" action="#">
            <Input type="text" label="Full Name" id="fullname" />
            <Input type="email" label="Email" id="email" />
            <Input type="password" label="Password" id="password" />
            <Button color="primary" className="block w-full">
              Sign up
            </Button>
            <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
              Have registered?{" "}
              <Link
                href="/login"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Login
              </Link>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
