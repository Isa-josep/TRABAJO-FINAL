<?php
	//cabecera del script
	error_reporting(E_ALL);
	ini_set('display_errors', 'On');
	$conectaBD = mysqli_connect("localhost", "root", "ISA1902_", "PORTAL");
	
	//declaramos las variables de PHP y obtenemos los valores de los controles del formulario
	$id_delete=$_POST['id_delete'];
	
	//Verficamos que el campo requerido este lleno
	$validaDatos = 	(strlen($id_delete)) or die
		("No se han llenado todos los campos<br><br><h3>><a href='http://localhost/Usuarios_practica/index.html'>Regresar</a></h3>");
	
	//hacemos la consulta(query) para seleccionar el registro mediante la primary key y la guardamos en una variable
	$sql_query = "SELECT id FROM Usuarios WHERE id = '$id_delete'";
	
	//guardamos el registro seleccionado de la consulta anterior en una variable
	$selRegistro = mysqli_query($conectaBD, $sql_query ) or die ("<h2>Error de Envio <br>La tabla No Existe, Llave(s) Secundaria(s) No Exsite(n) o Llave Primaria Repetida</h2>");
		
	
	//hacemos la condicion de que elimine seleccionado
	if($regEncontrado=mysqli_fetch_array($selRegistro)){
		//hacemos la consulta(query) para eliminar el registro en la tabla
		$del_sql_query = "DELETE FROM Usuarios WHERE id = '$id_delete'";
		$del_selreg = mysqli_query($conectaBD, $del_sql_query) or die ("<h2>Error de Envio <br>La tabla No Existe, Llave(s) Secundaria(s) No Exsite(n) o Llave Primaria Repetida</h2>");
		
		//Notificacmos la accion
		echo '<h2>Registro Eliminado</h2>';
	}
	else
	{
		//de lo contrario indicamos que no se encontro el registro
		echo '<h2>Registro No Encontrado</h2>';
	}
	
	//mostramos la opcion para regresar a la pagina anterior
	echo '<h3><a href="http://localhost/Usuarios_practica/delete.html de Usuarios.html">Regresar</a></h3>';
	
	//cerramos la conexion con la base de datos
	mysqli_close($conectaBD);
?>