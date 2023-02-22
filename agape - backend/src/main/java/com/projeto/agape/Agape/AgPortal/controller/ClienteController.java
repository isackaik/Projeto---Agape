package com.projeto.agape.Agape.AgPortal.controller;

import com.projeto.agape.Agape.AgPortal.model.Cliente;
import com.projeto.agape.Agape.AgPortal.repository.ClienteRepository;

import com.projeto.agape.Agape.AgPortal.services.RelatorioService;
import jakarta.servlet.http.HttpServletRequest;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/clientes")
public class ClienteController {

    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private RelatorioService relatorioService;

    @PostMapping
    public Cliente creatCliente(@RequestBody Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @GetMapping
    public List<Cliente> getClientes() {
        return clienteRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Cliente> getClienteById(@PathVariable Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        if (cliente.isPresent()) {
            return ResponseEntity.ok(cliente.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable Long id, @RequestBody Cliente novoCliente) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        if (cliente.isPresent()) {
            Cliente clienteExistente = cliente.get();
            clienteExistente.setCod_cliente(novoCliente.getCod_cliente());
            clienteExistente.setNome_cliente(novoCliente.getNome_cliente());
            clienteExistente.setCpf_cliente(novoCliente.getCpf_cliente());
            clienteExistente.setRg_cliente(novoCliente.getRg_cliente());
            clienteExistente.setNascimento_cliente(novoCliente.getNascimento_cliente());
            clienteExistente.setCidade_cliente(novoCliente.getCidade_cliente());
            clienteExistente.setBairro_cliente(novoCliente.getBairro_cliente());
            clienteExistente.setUf_cliente(novoCliente.getUf_cliente());
            clienteExistente.setEndereco_cliente(novoCliente.getEndereco_cliente());
            clienteExistente.setComplemento_cliente(novoCliente.getComplemento_cliente());
            clienteExistente.setCep_cliente(novoCliente.getCep_cliente());
            clienteExistente.setTelefone_cliente(novoCliente.getTelefone_cliente());
            clienteExistente.setCelular_cliente(novoCliente.getCelular_cliente());
            clienteExistente.setObservacao_cliente(novoCliente.getObservacao_cliente());

            clienteRepository.save(clienteExistente);
            return ResponseEntity.ok(clienteExistente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCliente(@PathVariable Long id) {
        Optional<Cliente> cliente = clienteRepository.findById(id);
        if (cliente.isPresent()) {
            clienteRepository.delete(cliente.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping(value ="/relatorio", produces = "application/text")
    public ResponseEntity<String> downloadRelatorio(HttpServletRequest request) throws Exception {
        byte[] pdf = relatorioService.gerarRelatorio("Clientes", request.getServletContext());

        String base64Pdf = "data:application/pdf;base64," + Base64.encodeBase64String(pdf);
        return new ResponseEntity<String>(base64Pdf, HttpStatus.OK);
    }
}
