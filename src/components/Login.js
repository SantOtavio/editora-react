import React, {useState} from 'react'
import {Button, Label, TextInput} from 'flowbite-react'
import AutenticacaoService from "../services/AutenticacaoService";

const Login = () => {

    const [user, setUser] = useState({
        username: '',
        senha: ''
    });

    const atualizarUsuario = (event) => {
        setUser({
            ...user, [event.target.name]: event.target.value
        })
        console.log(user);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            AutenticacaoService.login(user).then(
                response => {
                    console.log(response);
                }
            );
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
            <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="username"
                            value="username"
                        />
                    </div>
                    <TextInput
                        id="username"
                        type="username"
                        placeholder="usuario@dominio.com"
                        name='username'
                        value={user.username}
                        required={true}
                        onChange={atualizarUsuario}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="senha"
                            value="Senha"
                        />
                    </div>
                    <TextInput
                        id="senha"
                        type="password"
                        name='senha'
                        value={user.senha}
                        required={true}
                        onChange={atualizarUsuario}
                    />
                </div>
                <Button type="submit">
                    Login
                </Button>
                <Button href={"http://localhost:8443/oauth2/authorization/google"}>
                    Google
                </Button>
            </form>
        </div>)

}
export default Login