import { useEffect, useState } from "react"

export const TicketList = ({ currentSearchStateFromParent }) => {
    const [tickets, setTickets] = useState([])
    const [filteredTickets, updateFiltered] = useState([])
    const [emergencyOnly, setEmergency] = useState(false)

    const user = JSON.parse(localStorage.getItem("honey_user"))

    /*
    This is for phase 4 of project (account for Employees searching for tickets)
    */

    useEffect(
        () => {
            fetch(`http://localhost:8088/serviceTickets`)
                .then(response => response.json())
                .then((data) => {
                    setTickets(data)
                })
        },
        []
    )

    /*
        This is for phase 2 of project
    */
    useEffect(() => {
        if (currentSearchStateFromParent !== "") {
            const foundTickets = tickets.filter(
                t => t.description.toLowerCase().startsWith(currentSearchStateFromParent.toLowerCase()))
            updateFiltered(foundTickets)
        }
        else {
            updateFiltered(tickets)

        }
    }, [currentSearchStateFromParent])

    /*
        Watch the tickets state. When it changes, filter the data IF the
        current user is a customer and update a second
    */
    /*
    This is for phase 2 of project (account for Customer users)
    */

    useEffect(
        () => {
            if (user.staff) {
                updateFiltered(tickets)
            }
            else {
                const myTickets = tickets.filter(ticket => ticket.customerId === user.id)
                updateFiltered(myTickets)
            }
        },
        [tickets]
    )

    /*
    This is for phase 3 of project (account for Employees wanting to see emergency tickets)
    */

    useEffect(
        () => {
            if (emergencyOnly) {
                const emergencyTickets = filteredTickets.filter(t => t.emergency)
                updateFiltered(emergencyTickets)
            }
            else {
                updateFiltered(tickets)
            }
        },
        [emergencyOnly]
    )

    return <>
        {
            user.staff
                ? <>
                    <button onClick={e => setEmergency(true)}>Show emergency tickets</button>
                    <button onClick={e => setEmergency(false)}>Show all tickets</button>
                </>
                : ""
        }
        {
            filteredTickets.map(ticket => <div>Ticket #{ticket.id}</div>)
        }
    </>
}

