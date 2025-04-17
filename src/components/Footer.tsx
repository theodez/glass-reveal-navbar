
export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <span className="text-xl font-bold flex items-center">
                <span className="bg-primary text-white p-1 rounded mr-1">Up</span>Form
              </span>
            </a>
            <p className="text-gray-400 text-sm mt-2 max-w-md">
              UpForm est la solution complète pour gérer les formations et certifications de vos équipes en toute simplicité.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          © 2025 UpForm. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};
