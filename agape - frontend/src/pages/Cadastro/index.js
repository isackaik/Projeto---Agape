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
        setCliente({ ...cliente, [event.target.name]: event.target.value });
    }

    function handleSubmit(event2) {
        event2.preventDefault();
        if (cliente.id == undefined) {
            axios.post(urlClientes, cliente)
                .then(response => {
                    setAtualizar(response.data)
                })
                .catch(error => console.log(error))
        } else {
            axios.put(`${urlClientes}/${cliente.cod_cliente}`, cliente)
                .then(response => {
                    setAtualizar(response.data)
                })
                .catch(error => console.log(error))
        }
        clear();
    }

    function deleteCliente(id) {
        axios.delete(`${urlClientes}/${id}`, cliente)
            .then(response => {
                setAtualizar(response.data);
            })
            .catch(error => console.log(error))
        setAtualizar();
        clear();
    }


    function clear() {
        setCliente({
            cod_cliente: '', nome_cliente: '',
            cpf_cliente: '', rg_cliente: '',
            nascimento_cliente: '', cidade_cliente: '',
            bairro_cliente: '', uf_cliente: '',
            endereco_cliente: '', complemento_cliente: '',
            cep_cliente: '', telefone_cliente: '',
            celular_cliente: '', observacao_cliente: ''
        })
    }

    return (
        <C.Container>
            <C.Label>Clientes <C.H3>Cadastrar, consultar, alterar e excluir um cliente. </C.H3></C.Label>
            <C.LabelButton>
                <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#addClienteModal">
                    <FaPlusCircle /> Novo
                </button>
            </C.LabelButton>

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
                                    <td><FaEdit type="button" onClick={() => setCliente(cliente)} data-bs-toggle="modal" data-bs-target="#addClienteModal" /></td>
                                    <td><FaRegTrashAlt type="button" onClick={() => setCliente(cliente)} data-bs-toggle="modal" data-bs-target="#deleteClienteModal" /></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </C.Table>

            {/*MODAL - CADASTRAR CLIENTE*/}
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
                                <input onChange={handleChange} value={cliente.nome_cliente} name='nome_cliente' type="text" className="form-control" placeholder='Nome' required/>
                                <C.LineForm>
                                    <label type="text" className="form-label">CPF: </label>
                                    <input onChange={handleChange} value={cliente.cpf_cliente} name='cpf_cliente' type="text" className="form-control" placeholder='CPF' required/>
                                    <label type="text" className="form-label">RG: </label>
                                    <input onChange={handleChange} value={cliente.rg_cliente} name='rg_cliente' type="text" className="form-control" placeholder='RG' required/>
                                </C.LineForm>
                                <C.LineForm>
                                    <label type="text" className="form-label">Data de Nascimento: </label>
                                    <input onChange={handleChange} value={cliente.nascimento_cliente} name='nascimento_cliente' type="date" className="form-control" placeholder='Data de Nascimento' />
                                </C.LineForm>
                                <C.LineForm>
                                    <label type="text" className="form-label">UF: </label>
                                    <input onChange={handleChange} value={cliente.uf_cliente} name='uf_cliente' type="text" className="form-control" placeholder='UF' required/>
                                    <label type="text" className="form-label">Cidade: </label>
                                    <input onChange={handleChange} value={cliente.cidade_cliente} name='cidade_cliente' type="text" className="form-control" placeholder='Cidade' required/>
                                </C.LineForm>
                                <C.LineForm>
                                    <label type="text" className="form-label">Bairro: </label>
                                    <input onChange={handleChange} value={cliente.bairro_cliente} name='bairro_cliente' type="text" className="form-control" placeholder='Bairro' required/>
                                    <label type="text" className="form-label">CEP: </label>
                                    <input onChange={handleChange} value={cliente.cep_cliente} name='cep_cliente' type="text" className="form-control" placeholder='CEP' required/>
                                </C.LineForm>
                                <label type="text" className="form-label">Endereço: </label>
                                <input onChange={handleChange} value={cliente.endereco_cliente} name='endereco_cliente' type="text" className="form-control" placeholder='Endereço' required/>
                                <label type="text" className="form-label">Complemento: </label>
                                <input onChange={handleChange} value={cliente.complemento_cliente} name='complemento_cliente' type="text" className="form-control" placeholder='Complemento' />
                                <C.LineForm>
                                    <label type="text" className="form-label">Telefone: </label>
                                    <input onChange={handleChange} value={cliente.telefone_cliente} name='telefone_cliente' type="text" className="form-control" placeholder='Telefone' />
                                    <label type="text" className="form-label">Celular: </label>
                                    <input onChange={handleChange} value={cliente.celular_cliente} name='celular_cliente' type="text" className="form-control" placeholder='Celular' required/>
                                </C.LineForm>
                                <label type="text" className="form-label">Observação: </label>
                                <input onChange={handleChange} value={cliente.observacao_cliente} name='observacao_cliente' type="text" className="form-control" placeholder='Observação' />
                                <C.LineForm>
                                    <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Fechar</button>&nbsp;&nbsp;
                                    <input type="submit" name='cadCliente' className="btn btn-outline-primary" value="Salvar" />
                                </C.LineForm>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

            {/*MODAL - CONFIRMAR EXCLUSÃO*/}
            <div className="modal fade" id="deleteClienteModal" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Deseja realmente excluir o cliente?</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>&nbsp;&nbsp;
                            <input type="submit" className="btn btn-outline-danger" onClick={() => deleteCliente(cliente.cod_cliente)} data-bs-dismiss="modal" value="Excluir"/>
                        </div>
                    </div>
                </div>
            </div>
        </C.Container>
    );
};

export default CadastroClientes;