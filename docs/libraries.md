# **Libraries**
---------------------------------------------------------------------------------------------------------

### 1. Frontend

- React.js and Node.js - React.js is very much root library that this web app is relying on. It builds modulized components and help you make SPA(`Single Page Application`). 
- ```javascript
  // ex) use of Routes and Route for internal SPA server
  // App.jsx
   <Routes>
      <Route  ... />
      <Route  ... />
      <Route  ... />
      ...
   </Routes>
  ```
- 
- In React.js, there are lots of hooks used in overall app such as `useState, useNavigate, useEffect`, but specially `useContext` is useful in this app to deliver data to any component not through from props in parent components. 
- ```javascript
    // UserContext.jsx
    const UserContext = createContext(null)

    // Store user's info, such as user_id, firstName
    export function UserContextProvider({children}) {
      const [ user, setUser ] = useState(undefined)

      return (
        <UserContext.Provider
          children={children}
          value={{
            user,
            setUser,
          }}
        />
      )
    }

    ...

    // ex) MyAccount.jsx
    const MyAccount = () => {
      const { user, setUser } = useUserContext()
      ...
    }

    async function getBookings() {
    console.log("Start fetching bookings...")
    const bookings = await fetch(`${fetchURL}/bookings/my_bookings/`, {{
        ...
        authorization: user.tk
      },
        body: JSON.stringify({
        _id: user._id
      })
      ...
    })}

  ```

- Email.js - Used for `Send Inquiry` page. Instead of using DB based, using 3rd party libraries to organize inquiries and customer services.
- ```javascript
  // SendInquiry.jsx

    const sendEmail = (e) => {
      e.preventDefault()
      // Email.js setups
      emailjs.sendForm('service_ipqihi2', 'template_dp7mndu', form.current, 'x5ldj7hCbXs9GZBHH')
        .then((result) => {
            alert("Thanks for sending inquiries. We'll contact you very ..")
          ...
        })
  }
  ```
- React-Datepicker - Calendar is made from this library. Offers date and time picker functionality can take lots of css and javascript properties.
- ```javascript
    // Booking.jsx, BookingUpdate.jsx

    const Calendar = () => {
      // Track the selected value
      const [startDate, setStartDate] = useState(form.date) 

      // Tracks the current date and time so the calendar can give you availability after the time after now.
      const filterPassedTime = (time) => {
        const currentDate = new Date()
        const selectedDate = new Date(time)
        return currentDate.getTime() < selectedDate.getTime()
      }
    
      return (
        <DatePicker 
          selected={startDate}
          onChange={(date) => {
            setStartDate(date)
            form.date = date
          }}
          name="date"
          ...
          dateFormat="yyyy-MM-dd"
          inline
          />
      )
    }
  ```
- Testing libraries : `Jest, Vitest, Cypress`
- 



### 2. Backend
- Express.js, Node.js : It's the root of the API server. helps you build taking HTML communications.
- ```javascript
    const app = express();

    app.use(cors())
    app.use(express.json())
    app.listen(port)

    // Home page 
    app.get('/', (req, res) => {
      res.send('Home Route');
    });
    // Get all users
    app.use('/users', userRoutes);

    const router = express.Router()
    router.get('/', async (req, res) => {
      res.send(await UserModel.find())});
    ...

  ```
- dotenv : Used to hide sensitive informations such as ATLAS DA address, SECRET KEY for JWT.
- ```javascript
  // .env
  ATLAS_DB_URL=mongodb+srv: ....
  SECRET_KEY= ...

  // auth.js 
  const SECRET_KEY = process.env.SECRET_KEY;
  ...
  ```
- CORS : Helps solving of `Cross-Origin Resource`. When the web-server and API server is running on deployment, the port numbers can be different then causes interupt. CORS help solves this problem.
- ```javascript
    app.use(cors())
  ```

- JWT : JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. 
- ```javascript
  // User_route.js

  const token = jwt.sign({
      type: 'JWT',
      email: req.body.email,
      firstName: req.body.firstName
    }, SECRET_KEY, {
      expiresIn: '30m',
      issuer: 'PAWFUL_Dev'
    })

  // auth.js
  // JWT will be transferred in the header
  const clientToken = req.headers.authorization;
  // JWT compares the token and gets you back whether it's authorized or not
  const decoded = jwt.verify(clientToken, SECRET_KEY);
  ```

  - Testing : `Jest`