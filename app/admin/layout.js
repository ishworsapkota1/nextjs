export const metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <>
    <div className="grid grid-cols-5">
        <div className="col-span-1">Sidebar</div>
        <div className="col-span-4">
            {children}
        </div>
    </div>
    </>
  );
}
