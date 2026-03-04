import { SignupForm } from "@/components/signup-form"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 pt-24 md:p-10 md:pt-32">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  )
}
