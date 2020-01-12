<?php // Simulador de Select
	
	$cliente  = (isset($_GET['cliente'])) ? $_GET['cliente'] : "";
	$unidade  = (isset($_GET['unidade'])) ? $_GET['unidade'] : "";
	$response = array();

	$clientes = [
		0 => [ "response" => "Empresa de Telecom", "unidade"  => 1 ],
		1 => [ "response" => "Negocios e Tecnologia", "unidade"  => 0 ],
		2 => [ "response" => "Desenvolvedores PHP", "unidade"  => 2	],
		3 => [ "response" => "WePack Desenvolvedores", "unidade"  => 0],
		4 => [ "response" => "Nova Empresa Web", "unidade"  => 1 ]
	];

	$unidades = [
		0 => [ "response" => "Unidade 0" ],
		1 => [ "response" => "Unidade 1" ],
		2 => [ "response" => "Unidade 2" ]
	];

	// SELECT * FROM [clientes] WHERE cliente = {PARAM};
	if($cliente != "" && $unidade == "") {
		for($i = 0; $i < count($clientes); $i++) {
			if(stristr($clientes[$i]["response"], $cliente)) {
				array_push($response, $clientes[$i]);
			}
		}
	}
	// SELECT * FROM clientes c JOIN unidades u ON u.id = 'unidade_cliente' WHERE c.response LIKE '%cliente%';
	if($cliente != "" && $unidade != "") {
		for($i = 0; $i < count($unidades); $i++) {
			if($cliente == $i && stristr($unidades[$i]["response"], $unidade)) {
				array_push($response, $unidades[$i]);
			}
		}
	}
	
	echo json_encode($response);

?>