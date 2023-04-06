import { SideBar } from "@/components/SideBar";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "@/components/Login";
import ClientProvider from "@/components/ClientProvider";

export const metadata = {
  title: "Aurora ChatGPT",
  description: "Chat GPT Clone",
};


// Redeploy
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProvider Session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              {/*SIdeBar */}
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-y-[20rem]">
                <SideBar />
              </div>
              {/* Client provider = Notification */}
              <ClientProvider />

              <div className="bg-slate-900 flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
