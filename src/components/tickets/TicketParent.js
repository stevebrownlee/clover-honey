import { useState } from "react"
import { TicketList } from "./TicketList"
import { TicketSearch } from "./TicketSearch"

    /*
    This is for phase 2 of project
    */

export const TicketParent = () => {
    const [searchTerms, updateSearchTerms] = useState("")

    return <>
        <TicketSearch updateFunctionFromParent={updateSearchTerms} />
        <TicketList currentSearchStateFromParent={searchTerms} />
    </>
}