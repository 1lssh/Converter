import React from 'react'
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useSelector } from 'react-redux';

function Valute({searchValute}) {

    const valutes = useSelector(({valutes}) => valutes.valutes)
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
        font: {
            fontWeight: 700
        }
    });
    const classes = useStyles()
    const filteredValutes = Object.values(valutes).filter(valute => valute.Name.includes(searchValute) || valute.CharCode.includes(searchValute))

    return (
        <div className="valutes">
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow >
                            <TableCell className={classes.font}>Название валюты</TableCell>
                            <TableCell className={classes.font} align="right">Буквенный код</TableCell>
                            <TableCell className={classes.font} align="right">Стоимость в рублях</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredValutes.map((row) => (
                            <TableRow key={row.Name}>
                                <TableCell component="th" scope="row">
                                    {row.Name}
                                </TableCell>
                                <TableCell align="right">{row.CharCode}</TableCell>
                                <TableCell align="right">{row.Value.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Valute

