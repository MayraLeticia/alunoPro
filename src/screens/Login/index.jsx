import { Button, Column, Row, TextField } from "../../components";

const Login = () => {
    return(
        <Row>
            <Column>
                <TextField name='Matrícula' />
                <TextField name='Senha' />
                <Row>
                    <a>Já possui cadastro?</a>
                    <a>Esqueci minha senha</a>
                </Row>
                <Button>Entrar na plataforma</Button>
            </Column>
            <Column></Column>
        </Row>
    )
}

export default Login;