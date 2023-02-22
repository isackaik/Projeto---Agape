package com.projeto.agape.Agape.AgPortal.services;

import jakarta.servlet.ServletContext;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.io.File;

import java.io.Serial;
import java.io.Serializable;
import java.sql.Connection;
import java.util.HashMap;

@Service
public class RelatorioService implements Serializable{


    @Serial
    private static final long serialVersionUID = 1L;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public byte[] gerarRelatorio(String nomeRelatorio, ServletContext servletContext) throws Exception {

        Connection connection = jdbcTemplate.getDataSource().getConnection();

        String caminhoJasper = "C:/Users/isaac/Documents" + File.separator + nomeRelatorio + ".jasper";

        JasperPrint print = JasperFillManager.fillReport(caminhoJasper, new HashMap(), connection);

        byte[] result = JasperExportManager.exportReportToPdf(print);
        connection.close();

        return result;
    }
}
