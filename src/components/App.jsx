import React from "react";
import { Layout } from "../containers/Layout";
import { Description } from "./Description"
import { FreeTrial } from "./FreeTrial";
import { Form } from "./Form";

const App = () => {
    
    return(
        <Layout>
            <Description />
            <FreeTrial />
            <Form />
        </Layout>
    );
}

export { App };