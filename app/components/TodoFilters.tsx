type TodoFilters = {
    setAll: () => void,
    setActive: () => void,
    setComplete: () => void,
}

export function TodoFilters(props: TodoFilters){
    const {setAll, setActive, setComplete} = props;
    return <p className="flex justify-evenly p-3 bg-secondary-text-color rounded shadow-md">
        <span onClick={setAll} className="cursor-pointer font-bold">All</span>
        <span onClick={setActive} className="cursor-pointer font-bold">Active</span>
        <span onClick={setComplete} className="cursor-pointer font-bold">Completed</span>
    </p>
}