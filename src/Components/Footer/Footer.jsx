import Image from "next/image";


const Footer = () => {
    return (
        <footer className="bg-[#214D39] text-white py-12 px-6 md:mt-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center">

                {/* Brand Name */}
                <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
                    KeenKeeper
                </h2>

                {/* Description */}
                <p className="text-center text-gray-300 max-w-2xl text-sm md:text-base mb-8">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>

                {/* Social Links Section */}
                <div className="flex flex-col items-center gap-4 mb-12">
                    <span className="text-lg font-medium">Social Links</span>
                    <div className="flex gap-4">
                        {/* Social Icons */}
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#214D39] hover:bg-gray-200 transition-colors">
                            <Image src={'/Icons/instagram.png'} alt="fb" height={56} width={56}></Image>
                        </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#214D39] hover:bg-gray-200 transition-colors">
                            <Image src={'/Icons/facebook.png'} alt="fb" height={56} width={56}></Image>            </a>
                        <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#214D39] hover:bg-gray-200 transition-colors">
                            <Image src={'/Icons/twitter.png'} alt="fb" height={56} width={56}></Image>            </a>
                    </div>
                </div>

                {/* Bottom Border */}
                <div className="w-full border-t border-gray-600/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-400 gap-4">
                    <p>© 2026 KeenKeeper. All rights reserved.</p>

                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;