import Link from "next/link";
import Container from "@/app/Container";
import FooterList from "./FooterList";

const Footer = () => {
    return (
        <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
          <Container>
            <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
              <FooterList>
              <h3 className="text-base font-bold mb-2">Book Categories</h3>
              <Link href={''}>
              Romansa
              </Link>
              <Link href={''}>
              Akademik
              </Link>
              <Link href={''}>
              Kehidupan
              </Link>
              </FooterList>
              <FooterList>
              <h3 className="text-base font-bold mb-2">Customer Service</h3>
              <Link href={''}>
              Contact Us
              </Link>
              </FooterList>
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-base font-bold mb-2">About Us</h3>
                <p className="mb-2">Sistem Informasi Perpustakaan Pusaka merupakan.....
                </p>
                <p>&copy; {new Date().getFullYear()} SIPERKASA. All rights reserved</p>
              </div>
              
            </div>
          </Container>
        </footer>
      );
}
 
export default Footer;