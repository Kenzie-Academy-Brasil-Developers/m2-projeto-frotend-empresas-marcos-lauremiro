import { deletUser, createDepartament, delet, editDepartament, editUser, viewsDepartament } from "./modalAdmin.js";
import { renderDepartamentos, renderUsersCadastrados, showSelect } from "./renders.js";
import { allUsers, departaments, getEmpresas } from "./request.js";


createDepartament ()
viewsDepartament ()
editDepartament ()
delet ()
editUser ()
deletUser ()
showSelect(await getEmpresas())
renderDepartamentos (await departaments())
renderUsersCadastrados (await allUsers())