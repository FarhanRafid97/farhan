import { Gamepad2 } from 'lucide-react';
import { useEffect, useState } from 'react';
const Navbar = () => {
  const [backgroundNavbar, setBackgroundNavbar] = useState('bg-transparent');
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setBackgroundNavbar('bg-black/30');
      } else {
        setBackgroundNavbar('bg-transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-[99] w-full px-[50px] py-4 bg-transparent  animation-background duration-1000  ${backgroundNavbar}`}
    >
      <div className="text-secondary flex items-center gap-1">
        <Gamepad2 className=" text-xl" />
        <span className="cool-text text-xl">F</span>
      </div>
    </div>
  );
};

export default Navbar;
