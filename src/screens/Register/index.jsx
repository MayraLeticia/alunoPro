import { Column, TextField } from "../../components";

import { register } from "../../constants/register";

const Register = () => (
    <Column>
        <label>{register.title}</label>
        <label>{register.description}</label>
        <TextField name='Nome completo' />
    </Column>
)

export default Register;