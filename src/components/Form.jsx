import React, {useState} from "react";
import { Input } from 'antd';

export const Form = ( {handleSubmitForm} ) =>{
    const [name, setName] = useState("");
    const [email, setemail] = useState("");
    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeEmail= (e) => {
        setemail(e.target.value);
    }
    const handleClickBy = (e) => {
        e.preventDefault();
        handleSubmitForm({name, email});
    }

    return (
        <form>
            <div>
                <Input placeholder="Ввведите имя" value={name} name="name" onChange={handleChangeName} />
            </div>
            <div>
                <Input placeholder="Ввведите email" value={email} name="email" onChange={handleChangeEmail} />
            </div>
            <button className="btn-buy" disabled={!name && !email} onClick={handleClickBy}>Купить</button>
        </form>
    )
}