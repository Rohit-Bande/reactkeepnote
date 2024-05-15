import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote =  (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({title: "", content: "",});

    const InputEvent = (event) => {

        const {name, value} = event.target;

        setNote((prevData) => {
            return {...prevData, [name]: value,};
        });
        console.log(note);
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({title: "", content: "",})
    }

    const expandIt =() => {
        setExpand(true);
    }

    const backToNormal = () => {
        setExpand(false)
    }

    return(
        <>
            <div className="main_note" onDoubleClick={backToNormal}>
                <form>
               { expand ?
                    <input type="text" 
                    name="title" value={note.title} 
                    onChange={InputEvent} placeholder="Title" 
                    autoComplete="off"/> : null}

                    <textarea rows='' name="content" 
                    value={note.content} onChange={InputEvent} 
                    colume ='' placeholder="Write your note..."
                    onClick={expandIt}
                    ></textarea>
                    {expand ?
                    <Button onClick={addEvent}>
                    <AddIcon className="plus_sign"/>
                    </Button> : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote;