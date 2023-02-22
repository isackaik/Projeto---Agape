import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { urlClientes } from "../../API/api";
import * as C from './styles';
import { FaRegTrashAlt, FaEdit, FaPlusCircle } from 'react-icons/fa';

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
    const [atualizar, setAtualizar] = useState();

    useEffect(() => {
        axios.get(urlClientes)
            .then(response => {
                setClientes(response.data);
            })
            .catch(error => console.log(error))
    }, [atualizar]);

    function handleChange(event) {
        setCliente({...cliente, [event.target.name]: event.target.value });
    }

    function handleSubmit(event2) {
        event2.preventDefault();
        axios.post(urlClientes, cliente)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => console.log(error))
    }

    return (
        <C.Container>
            <C.Label>Clientes <C.H3>Cadastrar, consultar, alterar e excluir um cliente. </C.H3></C.Label>
            <C.LabelButton>
                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#addClienteModal">
                    <FaPlusCircle /> Novo
                </button>
            </C.LabelButton>

            <div className="modal fade" id="addClienteModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addClienteModalLabel">Cadastro de Cliente</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <label type="text" className="form-label">Nome: </label>
                                <input onChange={handleChange} value={cliente.nome_cliente} name='nome_cliente' type="text" className="form-control" placeholder='Nome' />
                                <C.LineForm>
                                    <label type="text" className="form-label">CPF: </label>
                                    <input onChange={handleChange} value={cliente.cpf_cliente} name='cpf_cliente' type="text" className="form-control" placeholder='CPF' />
                                    <label type="text" className="form-label">RG: </label>
                                    <input onChange={handleChange} value={cliente.rg_cliente} name='rg_cliente' type="text" className="form-control" placeholder='RG' />
                                </C.LineForm>
                                <C.LineForm>
                                    <label type="text" className="form-label">Data de Nascimento: </label>
                                    <input onChange={handleChange} value={cliente.nascimento_cliente} name='nascimento_cliente' type="date" className="form-control" placeholder='Data de Nascimento' />
                                </C.LineForm>
                                <C.LineForm>
                                    <label type="text" className="form-label">UF: </label>
                                    <input onChange={handleChange} value={cliente.uf_cliente} name='uf_cliente' type="text" className="form-control" placeholder='UF' />
                                    <label type="text" className="form-label">Cidade: </label>
                                    <input onChange={handleChange} value={cliente.cidade_cliente} name='cidade_cliente' type="text" className="form-control" placeholder='Cidade' />
                                </C.LineForm>
                                <C.LineForm>
                                    <label type="text" className="form-label">Bairro: </label>
                                    <input onChange={handleChange} value={cliente.bairro_cliente} name='bairro_cliente' type="text" className="form-control" placeholder='Bairro' />
                                    <label type="text" className="form-label">CEP: </label>
                                    <input onChange={handleChange} value={cliente.cep_cliente} name='cep_cliente' type="text" className="form-control" placeholder='CEP' width='20%' />
                                </C.LineForm>
                                <label type="text" className="form-label">Endereço: </label>
                                <input onChange={handleChange} value={cliente.endereco_cliente} name='endereco_cliente' type="text" className="form-control" placeholder='Endereço' />
                                <label type="text" className="form-label">Complemento: </label>
                                <input onChange={handleChange} value={cliente.complemento_cliente} name='complemento_cliente' type="text" className="form-control" placeholder='Complemento' />
                                <C.LineForm>
                                    <label type="text" className="form-label">Telefone: </label>
                                    <input onChange={handleChange} value={cliente.telefone_cliente} name='telefone_cliente' type="text" className="form-control" placeholder='Telefone' />
                                    <label type="text" className="form-label">Celular: </label>
                                    <input onChange={handleChange} value={cliente.celular_cliente} name='celular_cliente' type="text" className="form-control" placeholder='Celular' />
                                </C.LineForm>
                                <label type="text" className="form-label">Observação: </label>
                                <input onChange={handleChange} value={cliente.observacao_cliente} name='observacao_cliente' type="text" className="form-control" placeholder='Observação' />
                                <C.LineForm>
                                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Fechar</button>&nbsp;&nbsp;
                                    <input type="submit" name='cadCliente' className="btn btn-outline-primary" value="Salvar" data-bs-dismiss="modal" />
                                </C.LineForm>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <C.Table>
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
                                <tr key={cliente.cod_cliente}>
                                    <th>{cliente.cod_cliente}</th>
                                    <td>{cliente.nome_cliente}</td>
                                    <td>{cliente.cpf_cliente}</td>
                                    <td><FaEdit type="button" /></td>
                                    <td><FaRegTrashAlt type="button" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </C.Table>
        </C.Container>
    );
};

export default CadastroClientes;