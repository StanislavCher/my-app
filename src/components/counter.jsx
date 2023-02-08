import React from "react";
// import React, {useState} from "react";

const Counter = (props) => {
    //console.log(props)
    //let count = 0
    //const temp1 = useState(0)
    //const count = temp1[0]
    //const setCount = temp1[1]
    //const [value, setValue] = useState(props.value)
    const {value} = props
    //const counter1 = useState(0)
    //console.log(counter1)
    //const [tags,setTags] = useState(['tag1','tag2','tag3'])

    const formatCount = () => {
        return value === 0? 'empty':value
    }

    const getBadgeClasses = () => {
        let classes = 'badge m-2 '
        classes += (value === 0)?'text-bg-warning':'text-bg-primary'
        return classes
    }

    const handlerIncrement = () => {
    //     console.log('increment')
    //     //console.log(setCount)
    //     //count++
    //     //setCount(count + 1)
    //     //count = count + 1
    //     //props.value = props.value + 1 - error readonly
    //     //setValue((prevState) => prevState + 1)
    //     //setCount((prevState) => prevState + 1)

        props.onIncrement(props.id)
    }

    const handlerDecrement = () => {
    //     console.log('decrement')
    //     //console.log(setCount)
    //     //count++
    //     //setValue((prevState) => prevState - 1)

        props.onDecrement(props.id)
    }

    //const del = () => {
        //console.log('increment')
        //console.log(setCount)
        //count++
        //setValue((prevState) => prevState - 1)
    //}

    // const handlerTagChange = (tag) => {
    //     setTags(prevState => prevState.filter((tagElement) => tagElement !== tag))
    // }

    // const renderTags = () => {
    //     return (tags.length !== 0) &&
    //     tags.map((tag) =>
    //         <li key={tag}
    //             className='btn btn-primary btn-sm m-2'
    //             onClick={() => handlerTagChange(tag)}
    //         >
    //             {tag}
    //         </li>)
    // }

    // if (tags.length !== 0 ) return (
    //     <ul>
    //         {renderTags()}
    //     </ul>
    // )
    // else
    return (
        <div>
            <span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatCount()}</span>
            {/*<button className='btn btn-primary btn-sm m-2' onClick={handlerIncrement}>+</button>*/}
            {/*<button className='btn btn-primary btn-sm m-2' onClick={() => props.onIncrement(props.id)}>+</button>*/}
            <button className='btn btn-primary btn-sm m-2' onClick={handlerIncrement}>+</button>
            {/*<button className='btn btn-primary btn-sm m-2' onClick={handlerDecrement}>-</button>*/}
            {/*<button className='btn btn-primary btn-sm m-2' onClick={() => props.onDecrement(props.id)}>-</button>*/}
            <button className='btn btn-primary btn-sm m-2' onClick={handlerDecrement}>-</button>
            <button className='btn btn-danger btn-sm m-2' onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    );
}

export default Counter