import { render, screen } from '@testing-library/react'
import App from './App'
import Home from './components/Home'
import StudentView from './components/StudentView'
import ErrorPage from './components/ErrorPage'
import Navbar from './components/Navbar'
import Messages from './components/Messages'
import GoogleMap from './components/GoogleMap'
import LessonWindow from './components/LessonWindow'
import { Nav } from 'react-bootstrap'

// Testing App.js renders (home page)
test('renders learn react link', () => {
  render(<App />)
  const linkElement = screen.getByText(/learning experience/i)
  expect(linkElement).toBeInTheDocument()
})
// Testing Error Page component
test('renders learn react link', () => {
  render(<ErrorPage />)
  const linkElement = screen.getByText(/Page Not Found/i)
  expect(linkElement).toBeInTheDocument()
})
// Testing Home component
test('renders learn react link', () => {
  render(<Home />)
  const linkElement = screen.getByText(/learning experience/i)
  expect(linkElement).toBeInTheDocument()
})
// Testing StudentView component
test('renders learn react link', () => {
  render(<StudentView />)
  const linkElement = screen.getByText(/The bottom/i)
  expect(linkElement).toBeInTheDocument()
})
// Testing Navbar component
test('renders learn react link', () => {
  render(<Navbar />)
  const linkElement = screen.getByText(/Navbar/i)
  expect(linkElement).toBeInTheDocument()
})
/*/ Testing Messages component - Does not have implementation yet
test('renders learn react link', () => {
  render(<Messages />)
  const linkElement = screen.getByText(/learning experience/i)
  expect(linkElement).toBeInTheDocument()
})*/
// Testing GoogleMap component
/*test('renders learn react link', () => {
  render(<GoogleMap />)
  expect(console.log).toHaveBeenCalledWith('Success')
})*/
// Testing LessonWindow component
test('renders learn react link', () => {
  render(<LessonWindow />)
  const linkElement = screen.getByText(/Search/i)
  expect(linkElement).toBeInTheDocument()
})
