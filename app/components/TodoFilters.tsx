type TodoFilters = {
    setFilter: (type: TodoActionType) => void,
}

export function TodoFilters(props: TodoFilters){
    const {setFilter} = props;
    return <p className="flex justify-evenly p-3 bg-secondary-text-color rounded shadow-md">
        <span onClick={() => setFilter("ALL")} className="cursor-pointer font-bold">All</span>
        <span onClick={() => setFilter("ACTIVE")} className="cursor-pointer font-bold">Active</span>
        <span onClick={() => setFilter("COMPLETED")} className="cursor-pointer font-bold">Completed</span>
    </p>
}