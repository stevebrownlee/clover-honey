import { Route, Routes } from "react-router-dom"
import { TicketList } from "./tickets/TicketList"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Honey Rae Repair Shop</h1>

                    <p>Your one-stop-shop to get all your electronics fixed</p>
                </>
            } />

            <Route path="/tickets" element={ <TicketList /> } />

        </Routes>
    )
}

