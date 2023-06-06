const NavBar = () => {
  return (
    <div className="w-full text-white">
      <div className="flex justify-between items-center py-6 px-4">
        <h1 className="font-bold text-red-600 text-3xl md:text-4xl lg:text-5xl">
          NETFLIX
        </h1>
        <div className="flex items-center font-medium">
          <p className="pr-4">Sign In</p>
          <p className="bg-red-600 px-4 py-2 rounded-md">Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
