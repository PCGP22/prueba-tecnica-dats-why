import { render. screen } from '@testing-library/react'
import {NavBar} from "../components/NavBar"

test('render correctly', () => {
  render(<ApplicationForm />)
  const titleElement = screen.getRoleBy('heading')
  expect(titleElement).toBeInTheDocument()
}