import React from "react";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
           email : "",
           password :"",
           passwordConfirm :"",
           joinedNewsletter :false
        }
    )

        function handleChange(event) {
             const {name, value , type, checked} = event.target
             setFormData(prevFormData => ({
                ...prevFormData ,
                [name] : type === "checkbox" ? checked : value
             }))
        }

        console.log(formData)

        function handleSubmit(event) {
            event.preventDefault()
            if (formData.password === formData.passwordConfirm){
                console.log("Succesfully Signed up")
            }else {
                console.log("Passwords do not matches")
                return
            }

            if (formData.joinedNewsletter){
                console.log('Thanks for signing up for our Newsletter')
            
            }
        }

    return (
        <form className="forms" onSubmit={handleSubmit}>
            <div>

                <input
                    className="form-el"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />

                <input
                    className="form-el"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    value={formData.password}
                />

                <input
                    className="form-el"
                    type="password"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="passwordConfirm"
                    value={formData.passwordConfirm}
                />

                <input
                    className="checkbox"
                    id="isChecked"
                    type="checkbox"
                    onChange={handleChange}
                    name="joinedNewsletter"
                    checked={formData.joinedNewsletter}
                />
                <label className="checkbox" htmlFor="isChecked">I want to join the newsletter</label>


                <br />
                <br />

                <button className="form-button">Sign up</button>
            </div>
        </form>
    )
}