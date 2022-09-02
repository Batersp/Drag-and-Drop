import React, {useState} from 'react';
import style from "./Main.module.css";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useSelector} from "react-redux";
import {getState} from "../TableColumn/selectors";
import {useAppDispatch} from "../../utils/redux-utils";
import {BoardType, ItemType} from "../../utils/types";
import {addItem, removeItem} from "../TableColumn/mainReducer";

export const Main = () => {

    const state = useSelector(getState)
    const dispatch = useAppDispatch()

    const [currentItem, setCurrentItem] = useState<null | ItemType>(null)
    const [currentBoard, setCurrenBoard] = useState<null | BoardType>(null)

    function dragStartHandler(e: React.DragEvent<HTMLDivElement>, el: BoardType, item: ItemType) {
        setCurrentItem(item)
        setCurrenBoard(el)
    }

    function dragLeaveHandler(e: React.DragEvent<HTMLDivElement>) {
        e.currentTarget.style.background = 'white'
    }

    function dragEndHandler(e: React.DragEvent<HTMLDivElement>) {
        e.currentTarget.style.background = 'white'
    }

    function dragOverHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        e.currentTarget.style.background = 'darkmagenta'
    }

    function dragDropHandler(e: React.DragEvent<HTMLDivElement>, el: BoardType, item: ItemType) {
        e.preventDefault()
        e.currentTarget.style.background = 'white'
        const id = item.id
        dispatch(removeItem({el: currentBoard, item: currentItem}))
        dispatch(addItem({el, thisBoardItemId: id ,item: currentItem}))
    }

    function dropBoardHandler(e: React.DragEvent<HTMLDivElement>, el: BoardType){
        e.preventDefault()
        dispatch(removeItem({el: currentBoard, item: currentItem}))
        dispatch(addItem({el, thisBoardItemId: 0, item: currentItem}))
    }

    function overBoardHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()

    }



    return (
        <div className={style.main}>
            {state.map(el => {
                return <TableContainer className={style.table} component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align={'center'}><span
                                    className={style.tableHeader}>{el.title}</span></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className={style.body}>
                            {el.item.length
                                ?     el.item.map((item) => (
                                        <TableRow
                                            className={style.row}
                                            key={item.id}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            draggable={true}
                                            onDragStart={(e) => dragStartHandler(e, el, item)}
                                            onDragLeave={(e) => dragLeaveHandler(e)}
                                            onDragEnd={(e) => dragEndHandler(e)}
                                            onDragOver={(e) => dragOverHandler(e)}
                                            onDrop={(e) => dragDropHandler(e, el, item)}
                                        >
                                            <TableCell className={style.cell} component="th" scope="row">
                                                <div className={style.name}>{item.name}</div>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                :<TableRow onDragOver={(e) => overBoardHandler(e)}
                                           onDrop={(e) => dropBoardHandler(e, el)}>
                                    <TableCell>
                                        <div className={style.text}>add item</div>
                                    </TableCell>
                                </TableRow>

                            }

                        </TableBody>
                    </Table>
                </TableContainer>
            })}

        </div>
    );
};

