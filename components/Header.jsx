import Link from "next/link";
import {Button} from "./ui/button";
import Nav from './Nav';
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className = "py-8 xl:py-12 text-white">
        <div className = "container mx-auto flex justify-between items-center">
            {/* {logo} */}
            <Link href="/">
            <h1 className="text-4xl font-semibold">
<<<<<<< HEAD
                Sai Nsg <span className="text-accent" >🦄</span>
=======
                Sai Nsg <span className="text-accent" ></span>
>>>>>>> 2a93a6bcb59e7bedf3342025433ae3ef286cc9fa
            </h1>
            </Link>
            {/* {desktop nav & hire me button} */}
            <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact">
            <Button>Hire Me</Button>
            </Link>
            </div>
            {/* {mobile nav} */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
        </header>);
}

export default Header;
