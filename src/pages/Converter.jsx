import { FormControl, FormHelperText, InputAdornment, MenuItem, OutlinedInput, TextField } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCount, getResult, getType } from '../redux/valutesReducer'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Converter({ valutes }) {
    const dispatch = useDispatch()
    const result = useSelector(({ valutes }) => valutes.result)

    const valutesArr = Object.values(valutes)
    const totalResult = parseFloat(result).toFixed(2)


    const onCountChange = (e) => {
        let currencyCount = e.target.value
        dispatch(getCount(currencyCount))
        dispatch(getResult())
    }

    const onTypeChange = (e) => {
        let currencyType = e.target.value
        dispatch(getType(currencyType))
        dispatch(getResult())
    }

    return (

        <div>
            <FormControl  variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-weight"
                    onChange={onCountChange}
                    endAdornment={<InputAdornment position="end">RUB</InputAdornment>}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                        'aria-label': 'weight',
                    }}
                    labelWidth={0}
                />
                <FormHelperText id="outlined-weight-helper-text">Сумма</FormHelperText>
            </FormControl>

            <ArrowRightAltIcon style={{ fontSize: 60 }} />
                <span className="result">{totalResult}</span>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Select"
                    onChange={onTypeChange}
                    helperText="Please select your currency"
                    variant="outlined"
                >
                    {valutesArr.map((option) => (
                        <MenuItem key={option.ID} value={option.Value / option.Nominal}>
                            {option.CharCode}
                        </MenuItem>
                    ))}
                </TextField>
                {/* <select onChange={onTypeChange} >
                    {
                        valutesArr.map((v) => <option key={v.ID} value={v.Value / v.Nominal}>{v.CharCode}</option>)
                    }
                </select> */}
            
        </div>
    )
}

export default Converter
