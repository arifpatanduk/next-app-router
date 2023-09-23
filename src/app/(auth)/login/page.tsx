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

export default function Login() {
  return (
    <div className="h-screen flex justify-center items-center max-w-2xl mx-auto">
      <Card className="w-8/12">
        <CardBody>
          <p className="text-center font-bold text-lg">Login</p>
          <form className="space-y-6 py-5" action="#">
            <Input type="email" label="Email" />
            <Input type="password" label="Password" />
            <Button color="primary" className="block w-full">
              Login
            </Button>
            <div className="text-center text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?{" "}
              <Link
                href="/register"
                className="text-blue-700 hover:underline dark:text-blue-500"
              >
                Create account
              </Link>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}
