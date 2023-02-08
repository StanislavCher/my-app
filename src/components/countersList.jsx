import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        {id:0, value: 0, name: 'Ненужная вещь'},
        {id:1, value: 4, name: 'Ложка'},
        {id:2, value: 0, name: 'Вилка'},
        {id:3, value: 0, name: 'Тарелка'},
        {id:4, value: 0, name: 'Набор минималиста'},
    ]

    const [counters, setCounters] = useState(initialState)

    // const setCounters = () => {
    //
    // }

    const handleDelete = (id) => {
        //console.log('Delete ', id)
        setCounters(prevState => prevState.filter((count) => count.id !== id))
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const handleUpdate = () => {
        const updatedState = [
            {id:0, value: 1, name: 'Ненужная вещь'},
            {id:1, value: 2, name: 'Ложка'},
            {id:2, value: 3, name: 'Вилка'},
            {id:3, value: 4, name: 'Тарелка'},
            {id:4, value: 0, name: 'Набор минималиста'},
        ]
        setCounters(updatedState)
    }

    const handleIncrement = (id) => {
        // setCounters(prevState => prevState.map((count) => {
        //     if(count.id === id) return {id: count.id, value: count.value + 1, name: count.name}
        //     else return count
        // }))
        const counterIndex = counters.findIndex(counter => counter.id === id)
        const newCounters = [...counters]
        newCounters[counterIndex].value++
        setCounters(newCounters)
    }

    const handleDecrement = (id) => {
        // setCounters(prevState => prevState.map((count) => {
        //     if(count.id === id) return {id: count.id, value: count.value - 1, name: count.name}
        //     else return count
        // }))
        const counterIndex = counters.findIndex(counter => counter.id === id)
        const newCounters = [...counters]
        newCounters[counterIndex].value--
        setCounters(newCounters)
    }

    return (
        <>
            {counters.map((count) =>
                <Counter
                    key={count.id}
                    //count1 = {count}
                    {...count}
                    // value={count.value}
                    // name={count.name}
                    // id={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />)}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
            <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>Обновление</button>
        </>
        // <>
        //     <Counter />
        //     <Counter />
        //     <Counter />
        //     <Counter />
        //     <Counter />
        // </>
    )
}

export default CountersList