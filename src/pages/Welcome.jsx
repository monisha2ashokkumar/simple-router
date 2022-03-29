import { Route } from "react-router-dom"
export default function Welcome(){
    return (<section>
        <h1>In Welcome Page</h1>
        <Route path='/welcome/new-user'>
            <h3>Hello, New User!!!</h3>
        </Route>
        </section>
    )
}