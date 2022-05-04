    /*
    This is for phase 2 of project
    */

export const TicketSearch = ({ updateFunctionFromParent }) => {
    return (
        <input type="text"
        onKeyUp={e => {
            updateFunctionFromParent(e.target.value)
        }}
        placeholder="Enter search terms..." />
    )
}
