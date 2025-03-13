import { categories } from "../data/category";

export default function ExpenseForm() {
    return (
        <form className="space-y-5">
            <legend className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">Nuevo Gasto</legend>
            <div className="flex flex-col">
                <label
                    htmlFor="expenseName"
                >Nombre Gasto:</label>
                <input
                    type="text"
                    id="expenseName"
                    placeholder="Añade el nombre del gasto"
                    className="bg-slate-100 p-2"
                    name="expenseName"
                />
            </div>
            <div className="flex flex-col">
                <label
                    htmlFor="category"
                >Categoria:</label>
                <select name="category" id="category" className="bg-slate-100 p-2">
                   <option value="">---Seleccione una opción</option>
                   {categories.map(category =>( <option key={category.id} value={category.id}>{category.name}</option>))}
                </select>
            </div>
            <input 
                type="submit"
                className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
                value={'Registrar Gastos'}
            />
        </form>
    )
}
