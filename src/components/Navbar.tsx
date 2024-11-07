import Button from "./Button";

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0 w-full bg-white bg-opacity-30 backdrop-blur-md shadow-lg border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        <div className="text-xl font-bold text-amber-500">MBB Library 🦁</div>
        
        <Button 
          text="Add book 📗" 
          bgColor="bg-green-600 bg-opacity-80" 
          textColor="text-white" 
          hoverColor="hover:bg-green-700 hover:bg-opacity-100"
        />
      </nav>
    </header>
  );
};

export default Navbar;
