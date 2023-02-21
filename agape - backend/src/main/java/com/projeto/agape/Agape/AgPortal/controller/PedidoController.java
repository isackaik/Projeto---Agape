package com.projeto.agape.Agape.AgPortal.controller;

import com.projeto.agape.Agape.AgPortal.model.Pedido;
import com.projeto.agape.Agape.AgPortal.repository.PedidoRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("*")
@RequestMapping("/pedidos")
public class PedidoController {
    private PedidoRepository pedidoRepository;

    public PedidoController(PedidoRepository pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }

    @GetMapping
    public List<Pedido> listarPedidos() {
        return pedidoRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Pedido> cadastrarPedido(@RequestBody Pedido pedido) {
        Pedido novoPedido = pedidoRepository.save(pedido);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoPedido);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Pedido> buscarPedidoPorId(@PathVariable Long id) {
        Optional<Pedido> pedido = pedidoRepository.findById(id);
        if (pedido.isPresent()) {
            return ResponseEntity.ok(pedido.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Pedido> atualizarPedido(@PathVariable Long id, @RequestBody Pedido novoPedido) {
        Optional<Pedido> pedido = pedidoRepository.findById(id);
        if (pedido.isPresent()) {
            Pedido pedidoExistente = pedido.get();
            pedidoExistente.setCod_cliente(novoPedido.getCod_cliente());
            pedidoExistente.setCod_produto(novoPedido.getCod_produto());
            pedidoExistente.setQtd_produto(novoPedido.getQtd_produto());
            pedidoExistente.setTotal_pedido(novoPedido.getTotal_pedido());
            pedidoExistente.setData_pedido(novoPedido.getData_pedido());
            pedidoRepository.save(pedidoExistente);
            return ResponseEntity.ok(pedidoExistente);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluirPedido(@PathVariable Long id) {
        Optional<Pedido> pedido = pedidoRepository.findById(id);
        if (pedido.isPresent()) {
            pedidoRepository.delete(pedido.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}

