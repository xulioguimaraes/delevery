import { BsGridFill } from 'react-icons/bs'
import { FaBox, FaCarAlt, FaMotorcycle } from 'react-icons/fa'
import { Button, Stack } from '@mui/material'
import styles from "./styles.module.scss"

export const ListButtonHome = () => {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.mainContent}>
            <Stack spacing={2}  maxWidth="320px">
                <Button size='large' startIcon={<FaBox />} variant="outlined">Retirar no local</Button>
                <Button startIcon={<FaMotorcycle />} variant="outlined">Delivery</Button>
                <Button startIcon={<FaCarAlt />} variant="outlined">Drive Thru</Button>
                <Button startIcon={<BsGridFill />} variant="outlined">Estou na mesa</Button>
            </Stack>
            </div>
           
        </main>
    )
}
