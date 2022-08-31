import React, {useState} from 'react';
import style from "../Main/Main.module.css";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

type PropsType = {
    item: Array<{name: string, id: number}>
    title: string
}


export const TableColumn = ({item, title}: PropsType) => {

    const [currentItem, setCurrentItem] = useState<null | {name: string, id: number}>(null)

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, el: {name: string; id: number}) {
        console.log('drag', el)
        setCurrentItem(el)
    }

    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        e.currentTarget.style.background = 'white'
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {

    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        e.currentTarget.style.background = 'darkmagenta'
    }

    function dragDropHandler(e: React.DragEvent<HTMLDivElement>, el: {name: string; id: number}) {
        e.preventDefault()
        console.log('drop', el)
    }

    return (
        <div className={style.main}>
        <TableContainer className={style.table} component={Paper}>
            <Table  aria-label="simple table">
                <TableHead >
                    <TableRow>
                        <TableCell align={'center'}><span className={style.tableHeader}>{title}</span></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className={style.body}>
                    {item.map((el) => (
                        <TableRow
                            className={style.row}
                            key={el.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            draggable={true}
                            onDragStart={(e) => dragStartHandler(e, el)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDrop={(e) => dragDropHandler(e, el)}
                        >
                            <TableCell className={style.cell} component="th" scope="row">
                                <div className={style.name}>{el.name}</div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
};

