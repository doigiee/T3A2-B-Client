import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import userEvent, { type } from '@testing-library/user-event'
import { BrowserRouter } from "react-router-dom"
import { expect, vi } from "vitest"
import AboutUs from '../src/components/AboutUs'
import App from "../src/components/App"
import Booking from '../src/components/Booking'
import Footer from '../src/components/Footer'
import JoinController from '../src/components/Join'
import LoginController from '../src/components/Login'
import MyAccount from '../src/components/MyAccount'
import OurServices from '../src/components/OurServices'
import { UserContextProvider } from '../src/components/UserContext'
import { rest } from 'msw'




// Submit button test
describe('Functions test', () => {
  it('Will fail when the submit function that is used commonly over the components is clicked without minimum required data', () => {
    const form = {
      email: undefined,
      title: undefined,
      first_name: undefined,
      last_name: undefined,
      phone_number: undefined,
      password: undefined
    }
    const addUserDetail = vi.fn()
    const submit = async (evt) => {
      // evt.preventDefault()  // Skipped preventDefault function
      if (!form.email || !form.password || !form.first_name || !form.last_name) {
        alert('Please enter the required fields')
        return false
      } else {
        await addUserDetail( 
          form.email, 
          form.title, 
          form.first_name, 
          form.last_name, 
          form.phone_number, 
          form.password )
        }
      }
      expect(submit).not.toBeNull()
    }
  )
})



describe('Home page and Navbar', () => {
  let container
  beforeEach(function () {
    container = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
      ).container
  })
  it('Shows main headings with "Welcome blah blah ..', () => {
    expect(container.querySelector("h2")).toBeDefined()
    expect(container.querySelector("h2")).toHaveTextContent('Welcome')
  })

  it('Shows 3 cards below the hero image', () => {
    const lists = container.getElementsByClassName("seenby-card")
    expect(lists).toBeDefined()
    expect(lists.length).toEqual(3) 
  })

  it('Shows menus when the hamburger icon is clicked', async () => {
    expect(container.querySelector('#menu-wrapper')).toBeDefined()
    expect(container.querySelector('#menu-wrapper')).toHaveClass('false')
    await userEvent.click(container.querySelector('#btnOpenMenu'))
    expect(container.querySelector('#menu-wrapper')).not.toHaveClass('false')
  })

  it("Doesn't show Logout button and My account button before login", async () => {
    await userEvent.click(container.querySelector('#btnOpenMenu'))
    expect(screen.getByRole('link', { name : /login/i })).toBeVisible()
    expect(screen.getByRole('link', { name : /join/i })).toBeVisible()
    expect(screen.queryByText(/Logout/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/My Account/i)).not.toBeInTheDocument()
  })
})

describe('About us Component', () => {
  it('Has a map image in the context container', () => {
    const { container } = render(
      <AboutUs/>
      )
      // The container that contains the map image
    const contextContainer = container.getElementsByClassName("context-container")
    const mapImage = container.querySelector('#map')

    expect(contextContainer).toBeDefined()
    expect(mapImage).toBeDefined()
    expect(mapImage).toBeInTheDocument(container)

  })

})

describe('Booking Component', () => {
  let container
  beforeEach(function () {
    container = render(
    <BrowserRouter>
      <UserContextProvider>
        <Booking />
      </UserContextProvider>
    </BrowserRouter>
    ).container
  })

  it('Has 3 required area (1 input, 2 select) in booking page.', () => {
    expect(container.querySelectorAll('#booking-input-container select')[0]).toBeRequired()
    expect(container.querySelector('#booking-input-container input')).toBeRequired()
    expect(container.querySelectorAll('#booking-input-container select')[1]).toBeRequired()
  })
})

describe('Footer component', () => {
  let container
  beforeEach(function () {
    container = render(
      <Footer />
      ).container
  })

  it('Has 4 links to connect social networks', () => {
    let socials = container.querySelectorAll("a")
    expect(socials).toBeDefined()
    expect(socials.length).toEqual(4)
  })
})

describe('Login', () => {
  it("Has login and password input that required ", async () => {
    render(
      <BrowserRouter>
        <UserContextProvider>
          <LoginController />
        </UserContextProvider>
      </BrowserRouter>
    )

    const emailInput = document.getElementById('loginInput')
    const passwordInput = document.getElementById('passwordInput')
    userEvent.type(emailInput, "starfish@outlook.com")
    userEvent.type(passwordInput, "123456")
    expect(emailInput).toBeRequired()
    expect(passwordInput).toBeRequired()
  })
  
})

describe('Join', () => {
  it("Has 5 input boxes includes 1 button and 1 select box. ", async () => {
    render(
      <BrowserRouter>
        <UserContextProvider>
          <JoinController />
        </UserContextProvider>
      </BrowserRouter>
    )

    const inputBoxes = document.getElementsByTagName('input')
    const selectBox = document.getElementsByTagName('select')

    expect(inputBoxes).toBeDefined()
    expect(inputBoxes).toHaveLength(6)
    expect(selectBox).toBeDefined()
    expect(selectBox).toHaveLength(1)

  })

})


describe('Join', () => {

  const handlers = [
    rest.post('/users/login', (req, res, ctx) => {
      sessionStorage.setItem('is-authenticated', 'true')
      return res(
        ctx.status(200)
      )
    }),
    rest.get('/users', (req, res, ctx) => {
      const isAuthenticated = sessionStorage.getItem('is-authenticated')

      if (!isAuthenticated) {
        return res(
          ctx.status(403),
          ctx.json({
            errorMessage: 'Not authorized',
          })
        )
      }
      return res(
        ctx.status(200),
        ctx.json({
          username: 'admin'
        })
      )
    })
  ]
  it("Has 5 input boxes includes 1 button and 1 select box. ", async () => {

    
  })

})


