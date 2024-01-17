import ButtonLogout from "./ButtonLogout"

export const MenuAdmin = () => {
    return (
        <nav className="flex justify-between px-10  pb-2 border-b-2 border-gray-500 shadow-xl shadow-gray-900">
        <div className="text-2xl">
            <a href="/admin">
            CredNosso
            </a>
        </div>
        
        <div>
          <ul className="flex gap-3 text-lg">
            <li><a href="#" className="hover:text-gray-300">Atm</a></li>
            <li><a href="#" className="hover:text-gray-300">Tesouraria</a></li>
            <li><ButtonLogout /></li>
          </ul>
        </div>
      </nav>
    )
}