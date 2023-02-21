import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { urlClientes } from "../../API/api";
import { Table, Container } from './styles';
import { FaRegTrashAlt, FaEdit } from 'react-icons/fa';

function CadastroClientes() {

    const [cliente, setCliente] = useState({
        cod_cliente: '', nome_cliente: '',
        cpf_cliente: '', rg_cliente: '',
        nascimento_cliente: '', cidade_cliente: '',
        bairro_cliente: '', uf_cliente: '',
        endereco_cliente: '', complemento_cliente: '',
        cep_cliente: '', telefone_cliente: '',
        celular_cliente: '', observacao_cliente: ''
    });

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        axios.get(urlClientes)
            .then(response => {
                setClientes(response.data);
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <Container>
            <Table>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Nome</th>
                            <th scope="col">CPF</th>
                            <th scope="col">Alterar</th>
                            <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            clientes.map((cliente) => (
                                <tr>
                                    <th>{cliente.cod_cliente}</th>
                                    <td>{cliente.nome_cliente}</td>
                                    <td>{cliente.cpf_cliente}</td>
                                    <td><FaEdit /></td>
                                    <td><FaRegTrashAlt /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </Table>
        </Container>
    );
};

export default CadastroClientes;