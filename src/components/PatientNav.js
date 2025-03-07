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
    name: 'View Reports',
    to: '/ViewReports',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
>>>>>>> 872b63d (Doctor Panel Completed)
    name: 'LLM Disease Prediction',
    to: '/LLMDiseasePred',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]

export default PatientNav