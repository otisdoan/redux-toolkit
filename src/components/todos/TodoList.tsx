/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../hooks";
import { useState } from "react";
import { addTodo } from "../../features/todos/todoSlice";

export default function TodoList() {
    const { items } = useSelector((state: RootState) => state.todos);
    const dispatch = useDispatch<AppDispatch>();
    const [valueInput, setValueInput] = useState<string>('');

    const handleChange = (e: any) => {
        setValueInput(e.target.value);
    }

    return (
        <>
            <div className="flex justify-center mt-[2rem]">
                <div className="bg-white shadow-xl p-4 w-1/2 rounded-lg flex flex-col gap-y-4">
                    <h1 className="text-[2rem] font-medium text-center">App Todo</h1>
                    <div className="flex justify-between items-center gap-x-4">
                        <Input placeholder="Add todo..." onChange={handleChange} />
                        <Button type="primary" danger onClick={() => dispatch(addTodo(valueInput))}>Add</Button>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        {items.map((item, index) => (
                            <div className="flex items-center justify-between" key={index}>
                                <span>{item.text}</span>
                                <Button type="primary">Delete</Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}