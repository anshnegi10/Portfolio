const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-base pb-4 text-gray-500 text-center dark:text-gray-400">
          © {currentYear}{" "}
          <a href="https://github.com/anshnegi10" className="hover:underline">
            Ansh Negi™
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  );
};

export default Footer;