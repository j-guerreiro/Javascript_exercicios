function possoIr(diaDaSemana, horaAtual) {

    //deve retornar true
    var case1 = (diaDaSemana != "Sábado") && (horaAtual >= 9 && horaAtual <= 15);

    var case1b = (diaDaSemana != "Domingo") && (horaAtual >= 9 && horaAtual <= 15);

    //FORA DE HORÁRIO - deve retornar false,
    var case2 = (diaDaSemana != "Sábado" || "Domingo") && (horaAtual < 9 && horaAtual > 15);

    //FIM-DE-SEMANA - deve retornar false, banco fechado
    var case3 = (diaDaSemana == "Sábado" || "Domingo") && (horaAtual >= 0 && horaAtual < 24);

    var case4 = (diaDaSemana == "Sábado" || "Domingo") && (horaAtual >= 9 && horaAtual <= 15);
    
    };
