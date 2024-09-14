"use client"

import { Button } from "@/components/ui/button"
import Form, { FormField } from "@/components/ui/form"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"

interface AdminLoginProps {}
const AdminLogin = (props: AdminLoginProps) => {
  const methods = useForm({})
  return (
    <Form {...methods}>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="px-3 py-9 border border-black items-center flex flex-col gap-5 rounded-lg max-w-[700px] w-full">
          <Label className="text-lg">Login</Label>
          <FormField
            name="text"
            label="Username"
            variant="TEXT"
            wrapperClassName="w-full max-w-[500px]"
            placeholder="Enter username ..."
          />
          <FormField
            name="password"
            label="Password"
            variant="PASSWORD"
            wrapperClassName="w-full max-w-[500px]"
            placeholder="Enter password ..."
          />
          <Button size="lg">Login</Button>
        </div>
      </div>
    </Form>
  )
}

export default AdminLogin
