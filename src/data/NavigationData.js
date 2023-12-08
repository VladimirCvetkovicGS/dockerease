import User from "../components/crudcomponents/user";
import Person from "../components/crudcomponents/person";
import Employee from "../components/crudcomponents/employee";
import EmployeeSheet from "../components/crudcomponents/employeesheet";
import Transaction from "../components/crudcomponents/transaction";

const NavigationData = [
    {
        Text : "User",
        Component: User,
        HeaderText: "User Management",
    },
    {
        Text : "Person",
        Component: Person,
        HeaderText: "Person Management",
    },
    {
        Text : "Employee",
        Component: Employee,
        HeaderText: "Employee Management",
    },
    {
        Text : "Employee Sheet",
        Component: EmployeeSheet,
        HeaderText: "Employee Sheet Management",
    },
    {
        Text : "Transaction",
        Component: Transaction,
        HeaderText: "Transaction Management",
    },
]

export default NavigationData;