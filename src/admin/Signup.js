import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { ipapi } = require("../config.json");

function Signup() {
    const history = useNavigate();
    const apisignup = ipapi + "/api/user/signup";

    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "kiit@123",
        level: 2,
        department: ""
    });

    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    };

    const sendRequest = async () => {
        const res = await axios.post(apisignup,
            {
                username: inputs.username,
                email: inputs.email,
                password: inputs.password,
                level: inputs.level,
                department: inputs.department
            }
        ).catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(inputs);
        sendRequest().then(() => history("/login"));
    };
    return (
      <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={inputs.email} onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create User
            </Button>
          </Form>
        </div>
      </div>
    </div>
    )
}

export default Signup;