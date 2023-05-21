const NavBar = () => {
  return (
    <div class="fixed bottom-0 w-full">
      <footer class="p-4 bg-indigo-900 rounded-lg shadow">
        <ul class="flex flex-wrap items-center mt-3">
          <li>
            <a
              href="#"
              class="mr-4 text-sm text-orange-500 hover:underline md:mr-6 decoration-red-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              class="mr-4 text-sm text-orange-500 hover:underline md:mr-6 decoration-red-300"
            >
              Read
            </a>
          </li>
          <li>
            <a
              href="#"
              class="mr-4 text-sm text-orange-500 hover:underline md:mr-6 decoration-red-300"
            >
              Another's
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-sm text-orange-500 hover:underline decoration-red-300"
            >
              My Page
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default NavBar;
