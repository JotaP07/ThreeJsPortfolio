const Footer = () => {
    return (
        <footer className="c-space pt-4 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <a href="/terms" className="hover:underline hover:text-blue-400 transition duration-300">Terms & Conditions</a>
                <p>|</p>
                <a href="/privacy" className="hover:underline hover:text-blue-400 transition duration-300">Privacy Policy</a>
            </div>

            <div className="flex gap-3">
                <div className="social-icon hover:bg-gray-700 rounded-full transition duration-300">
                    <a href="https://github.com/JotaP07" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 transition duration-300 hover:fill-current hover:text-white" />
                    </a>
                </div>
                <div className="social-icon hover:bg-gray-700 rounded-full transition duration-300">
                    <a href="https://x.com/JpDev_" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <img src="/assets/twitter.svg" alt="twitter" className="w-1/2 h-1/2 transition duration-300 hover:fill-current hover:text-white" />
                    </a>
                </div>
                <div className="social-icon hover:bg-gray-700 rounded-full transition duration-300">
                    <a href="https://instagram.com/joao.canhete" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <img src="/assets/instagram.svg" alt="instagram" className="w-1/2 h-1/2 transition duration-300 hover:fill-current hover:text-white" />
                    </a>
                </div>
            </div>

            <p className="text-white-500">© 2024 João Pedro Canhete. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
