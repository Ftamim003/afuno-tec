
import Footer from "../components/footer/Footer";
import Navbar from "../shared/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div>
        
      
        <Navbar />
        {children}
        <Footer></Footer>
      
    </div>
  );
}