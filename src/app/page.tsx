import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const user = await currentUser();
  const role = user?.publicMetadata?.role as string | undefined;

  if (!user || !role) {
    redirect("/sign-in");
  }

  redirect(`/${role}`);
}
