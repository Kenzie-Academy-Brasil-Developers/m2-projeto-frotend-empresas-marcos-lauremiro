import { deletUser, createDepartament, delet, editDepartament, editUser, viewsDepartament } from "./modalAdmin.js";
import { renderDepartamentos, renderUsersCadastrados, showModalCreate, showSelect } from "./renders.js";
import { allUsers, departaments, getEmpresas } from "./request.js";


createDepartament ()
viewsDepartament ()
editDepartament ()
delet ()
editUser ()
deletUser ()
showSelect(await getEmpresas(), await departaments())
renderDepartamentos (await departaments())
renderUsersCadastrados (await allUsers())

showModalCreate(await getEmpresas())