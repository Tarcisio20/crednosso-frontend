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
            <li className="py-1" ><a href="/admin/supply" className="hover:text-gray-300">Abastecimentos</a></li>
            <li className="py-1" ><a href="/admin/atm" className="hover:text-gray-300">Atms</a></li>
            <li className="py-1" ><a href="/admin/log" className="hover:text-gray-300">Logs</a></li>
            <li className="py-1" ><a href="/admin/order" className="hover:text-gray-300">Pedidos</a></li>
            <li className="py-1" ><a href="/admin/treasury" className="hover:text-gray-300">Tesourarias</a></li>
            <li className="py-1" ><a href="/admin/operationType" className="hover:text-gray-300">Tipos Operações</a></li>
            <li className="py-1" ><a href="/admin/orderType" className="hover:text-gray-300">Tipos Pedidos</a></li>
            <li className="py-1" ><a href="/admin/user" className="hover:text-gray-300">Usuarios</a></li>
            <li className="py-1"><ButtonLogout /></li>
          </ul>
        </div>
      </nav>
    )
}