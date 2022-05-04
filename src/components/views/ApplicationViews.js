import { CustomerViews } from "./CustomerViews"
import { EmployeeViews } from "./EmployeeViews"
import "../tickets/Tickets.css"

export const ApplicationViews = () => {

    const isStaff = JSON.parse(localStorage.getItem("honey_user")).staff

    if (isStaff) {
        return <EmployeeViews />
    }
    else {
        return <CustomerViews />
    }
}

