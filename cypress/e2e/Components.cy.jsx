const targetURL = "https://pawful.netlify.app"

describe('navigation', () => {
  beforeEach(() => {
    cy.visit(targetURL)
  })
  it('Redirects to Login page when you clicked our service menu, then book now button in a package card', () => {
    
    cy.get('#btnOpenMenu').click(60000)
    
    cy.get('#menu-box > :nth-child(3) > a').click().get(':nth-child(1) > a > .btn').click()
      .then(() => {
        expect(cy.get('#login-heading').contains('Login'))
      })
      
    cy.wait(3000)

  })

  it('Redirects to My Account page after Login and shows username on the page', () => {
    const mockUser = {
      name: "Ryan",
      email: "starfish@outlook.com",
      password: "123456"
    }
    cy.get('#btnOpenMenu').click(60000).get('[href="/login"] > span').click()
    cy.get('#loginInput').type(mockUser.email)
    cy.get('#passwordInput').type(mockUser.password)
    cy.get('.btn').click()
    expect(cy.get('div').contains(mockUser.name))
    cy.wait(3000)
  })


    it('Fails when the login info is not matched', () => {
    const mockUser = {
      name: "Ryan",
      email: "starfish@outlook.com",
      password: "123"
    }
    cy.get('#btnOpenMenu').click(60000).get('[href="/login"] > span').click()
    cy.get('#loginInput').type(mockUser.email)
    cy.get('#passwordInput').type(mockUser.password)
    cy.get('.btn')
    expect(cy.spy(window.console, "error"))
    cy.wait(3000)
  })

    it('Redirects to My Account page after Login and shows username on the page', () => {
    const mockUser = {
      name: "Ryan",
      email: "starfish@outlook.com",
      password: "123456"
    }
    cy.get('#btnOpenMenu').click().get('[href="/login"] > span').click()
    cy.get('#loginInput').type(mockUser.email)
    cy.get('#passwordInput').type(mockUser.password)
    cy.get('.btn').click()
    cy.scrollTo('top').wait(1000)
    cy.get('#btnOpenMenu').click()
    expect(cy.get(':nth-child(1) > span').contains('Logout'))
    cy.wait(3000)

  })
    it('Updates booking live after modifying booking', () => {
    const mockUser = {
      name: "Ryan",
      email: "starfish@outlook.com",
      password: "123456"
    }
    cy.get('#btnOpenMenu').click().get('[href="/login"] > span').click()
    cy.get('#loginInput').type(mockUser.email)
    cy.get('#passwordInput').type(mockUser.password)
    cy.get('.btn').click()
    cy.get(':nth-child(1) > .booking-detail > .modify-booking-box > [href="/bookings/update"]').click()
    cy.get('[name="pkg_name"]').select("Wet & Wild")
    cy.get('#booking-input-container > a').click().wait(1500)
    expect(cy.get('.booking-detail > :nth-child(1)').contains('Wet & Wild'))
    cy.get(':nth-child(1) > .booking-detail > .modify-booking-box > [href="/bookings/update"]').click()
    cy.get('[name="pkg_name"]').select("Grooming")
    cy.get('#booking-input-container > a').click().wait(1500)
    expect(cy.get('.booking-detail > :nth-child(1)').contains('Grooming'))
  })
})