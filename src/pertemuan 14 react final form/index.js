/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { render } from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

const App = () => (
    <Styles>
        <h1>Employee Form</h1>
        <a href="https://final-form.org/react" target="_blank" rel="noopener noreferrer">
            Read Docs
        </a>
        <Form
            onSubmit={onSubmit}
            initialValues={{}}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <Field name="firstName" component="input" type="text" placeholder="First Name" />
                    </div>
                    <div>
                        <label>Last Name</label>
                        <Field name="lastName" component="input" type="text" placeholder="Last Name" />
                    </div>
                    <div>
                        <label>Employed</label>
                        <Field name="employed" component="input" type="checkbox" />
                    </div>
                    <div>
                        <label>Education</label>
                        <Field name="Education" component="select">
                            <option />
                            <option value="High School">High School</option>
                            <option value="Bachelor Degree">Bachelor</option>
                            <option value="Diploma Degree">Master</option>
                        </Field>
                    </div>
                    <div>
                        <label>Expertise</label>
                        <div>
                            <label>
                                <Field name="Expertise" component="input" type="checkbox" value="HTML" /> HTML
                            </label>
                            <label>
                                <Field name="Expertise" component="input" type="checkbox" value="CSS" /> CSS
                            </label>
                            <label>
                                <Field name="Expertise" component="input" type="checkbox" value="JavaScript" /> JavaScript
                            </label>
                            <label>
                                <Field name="Expertise" component="input" type="checkbox" value="NodeJS" /> NodeJS
                            </label>
                            <label>
                                <Field name="Expertise" component="input" type="checkbox" value="ReactJS" /> ReactJS
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Prevered Techology</label>
                        <div>
                            <label>
                                <Field name="Prevered Techology" component="input" type="radio" value="Front End" /> Front End
                            </label>
                            <label>
                                <Field name="Prevered Techology" component="input" type="radio" value="Back End" /> Back End
                            </label>
                            <label>
                                <Field name="Prevered Techology" component="input" type="radio" value="Fullstack" /> Fullstack
                            </label>
                        </div>
                    </div>
                    <div>
                        <label>Notes</label>
                        <Field name="notes" component="textarea" placeholder="Notes" />
                    </div>
                    <div className="buttons">
                        <button type="submit" disabled={submitting || pristine}>
                            Submit
                        </button>
                        <button type="button" onClick={form.reset} disabled={submitting || pristine}>
                            Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    </Styles>
);

render(<App />, document.getElementById("root"));
