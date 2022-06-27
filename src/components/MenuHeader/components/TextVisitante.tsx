import { Typography, TypographyTypeMap, useTheme } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import React from 'react'

export const TextVisitante = ( ) => {
    const theme = useTheme()

  return (
    <Typography color={theme.palette.info.main} sx={{ p: 2 }}>Visitante</Typography>
  )
}
