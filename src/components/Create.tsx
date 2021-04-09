import React, { useState } from 'react'
import {
    Button,
    Container,
    Typography,
    makeStyles,
    TextField,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormLabel,
    FormControl,
} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

// Typography:          https://material-ui.com/ru/components/typography/#typography
// Button:              https://material-ui.com/ru/components/buttons/#button
// TextFileds:          https://material-ui.com/ru/components/text-fields/#text-field
// Radio Buttons:       https://material-ui.com/ru/components/radio-buttons/#standalone-radio-buttons

// makeStyles [hook]:   https://material-ui.com/ru/styles/api/#makestyles-styles-options-hook

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
})

export const Create: React.FC = () => {
    const classes = useStyles()
    const [title, setTitle] = useState<string>('')
    const [details, setDetails] = useState<string>('')
    const [category, setCategory] = useState<string>('todos')

    const [errorTitle, setErrorTitle] = useState<boolean>(false)
    const [errorDetails, setErrorDetails] = useState<boolean>(false)

    const handleChange = (
        e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
    ) => {
        const { name, value }: { name: string; value: string } = e.target

        switch (name) {
            case 'title': {
                setTitle(value)
                return
            }
            case 'details': {
                setDetails(value)
                return
            }
            case 'category': {
                setCategory(value)
                return
            }
            default:
                return
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrorDetails(false)
        setErrorTitle(false)

        if (!title) setErrorTitle(true)
        if (!details) setErrorDetails(true)

        if (details && title) {
            console.log(title, details, category)
        }
    }

    return (
        <Container>
            <Typography
                variant={'h6'}
                gutterBottom
                color={'textSecondary'}
                component={'h2'}
            >
                Create a New Note
            </Typography>
            <form noValidate autoComplete={'off'} onSubmit={handleSubmit}>
                <TextField
                    className={classes.field}
                    onChange={handleChange}
                    name={'title'}
                    label={'Note title'}
                    variant={'outlined'}
                    color={'secondary'}
                    fullWidth
                    required
                    error={errorTitle}
                />
                <TextField
                    className={classes.field}
                    onChange={handleChange}
                    name={'details'}
                    label={'Details'}
                    variant={'outlined'}
                    color={'secondary'}
                    multiline
                    rows={4}
                    fullWidth
                    required
                    error={errorDetails}
                />
                <FormControl className={classes.field}>
                    <FormLabel>Note category</FormLabel>
                    <RadioGroup
                        value={category}
                        name={'category'}
                        onChange={handleChange}
                    >
                        <FormControlLabel
                            value={'money'}
                            control={<Radio />}
                            label={'Money'}
                        />
                        <FormControlLabel
                            value={'todos'}
                            control={<Radio />}
                            label={'Todos'}
                        />
                        <FormControlLabel
                            value={'reminders'}
                            control={<Radio />}
                            label={'Reminders'}
                        />
                        <FormControlLabel
                            value={'work'}
                            control={<Radio />}
                            label={'Work'}
                        />
                    </RadioGroup>
                </FormControl>
                <Button
                    type={'submit'}
                    color={'secondary'}
                    variant={'contained'}
                    endIcon={<KeyboardArrowRightIcon />}
                >
                    Submit
                </Button>
            </form>
        </Container>
    )
}
