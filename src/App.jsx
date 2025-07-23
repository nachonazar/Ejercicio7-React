import "bootstrap/dist/css/bootstrap.min.css"
import EmpleadoAvatar from "./components/EmpleadoAvatar";
import EmpleadoList from "./components/EmpleadoList";

function App() {

  const empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado01.png" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "empleado02.png" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "empleado03.png" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "empleado04.png" },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "empleado05.png" },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "empleado06.png" },
];

  return (
    <div className="text-center">
      <EmpleadoList empleados={empleados}></EmpleadoList>
    </div>
  )
}

export default App
