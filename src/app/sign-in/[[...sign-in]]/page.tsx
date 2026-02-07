import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <div className="flex flex-col items-center mx-auto px-4 py-32"><SignIn /></div>;
}
