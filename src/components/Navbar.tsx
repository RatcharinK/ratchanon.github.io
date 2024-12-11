export function Navbar() {
  return (
    <nav className="bg-gray-800 text-white flex justify-between p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/ticket" className="hover:text-yellow-300">
            Ticket
          </a>
        </li>
        <li>
          <a href="/customer" className="hover:text-yellow-300">
            Customer
          </a>
        </li>
      </ul>
    </nav>
  );
}
