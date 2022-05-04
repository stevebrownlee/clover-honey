import { Outlet, Route, Routes } from "react-router-dom"
import { TicketList } from "../tickets/TicketList"
import { TicketParent } from "../tickets/TicketParent"

export const EmployeeViews = () => {
    const employee = JSON.parse(localStorage.getItem("honey_user"))
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>
                    <h2>Welcome Employee #{employee.id}</h2>

                    <div>Your one-stop-shop to get all your electronics fixed</div>

                    <Outlet />
                </>
            }>

                <Route path="tickets" element={ <TicketParent /> } />

            </Route>


        </Routes>
    )
}

