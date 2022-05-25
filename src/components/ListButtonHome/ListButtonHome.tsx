import { BsGridFill } from 'react-icons/bs'
import { FaBox, FaCarAlt, FaMotorcycle } from 'react-icons/fa'
import { Button, Stack } from '@mui/material'
import styles from "./styles.module.scss"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
interface ListButtonHomeProps {
    infoButtons: [string]
    slug: string
}
interface OptionsButtonsTypes {
    link: string
    label: string
    icon: JSX.Element
}
export const ListButtonHome = ({ infoButtons, slug }: ListButtonHomeProps) => {
   
    const [optionsButtons, setOptionsButtons] = useState<OptionsButtonsTypes[]>([])
    
    
    useEffect(() => {
        const buttons = [
            { link: "balcony", label: "Retirar no local", icon: <FaBox /> },
            { link: "delivery", label: "Delivery", icon: <FaMotorcycle /> },
            { link: "drivethru", label: "Drive Thru", icon: <FaCarAlt /> },
            { link: "table", label: "Estou na mesa", icon: <BsGridFill /> },
        ]
        const aux = buttons.filter(item => {
            const a = infoButtons.filter(ev => ev === item.link)
            if (a.length > 0) {
                return item
            }
        })
        setOptionsButtons(aux)
    }, [infoButtons])
    return (
        <main className={styles.mainContainer}>
            <div className={styles.mainContent}>
                <Stack spacing={2} maxWidth="320px">
                    {optionsButtons.map(item => {
                        return <Link href={`/${slug}/${item.link}`} key={item.link}>
                            <Button size='large' startIcon={item.icon} variant="outlined">{item.label}</Button>
                        </Link>
                    })}
                </Stack>
            </div>

        </main>
    )
}
