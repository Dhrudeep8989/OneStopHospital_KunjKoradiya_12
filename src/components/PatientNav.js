import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const PatientNav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/Patient/Dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 5e0ae24f0507d847c39c20bbed134d0829fde41e
    name: 'View Reports',
    to: '/ViewReports',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
<<<<<<< HEAD
=======
>>>>>>> 872b63d (Doctor Panel Completed)
>>>>>>> 5e0ae24f0507d847c39c20bbed134d0829fde41e
    name: 'LLM Disease Prediction',
    to: '/LLMDiseasePred',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]

export default PatientNav