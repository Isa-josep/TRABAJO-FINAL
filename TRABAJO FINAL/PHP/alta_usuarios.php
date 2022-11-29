<?php
    include("connect.php");
    //echo "Se realizó exitósamene la conexión a la base de datos";
    $a=$_POST['nombre'];
    $b=$_POST['apellido_p'];
    $c=$_POST['apellido_m'];
    $d=$_POST['correo'];
    $e=$_POST['especialidad'];
    $f=$_POST['grupo'];
    $g=$_POST['contraseña'];
    $regi="INSERT INTO DATOS(NOMBRE,APELLIDO_PATERNO,APELLIDO_MATERNO,CORREO,ESPECIALIDAD,GRUPO,CONTRASEÑA)
    VALUES('$a','$b','$c','$d','$e','$f','$g')";
    $QUERY=mysqli_query($conexion,$regi);
    if($_POST["nombre"]){
        echo "ERES GRANDE";
        $N=$_POST["nombres"];
        $apellido_p=$_POST["apellido_p"];
        $apellido_M=$_POST["apellido_m"];
        $tel=$_POST["telefono"];
        $cor=$_POST["Correo"];
    }
    else{
        echo "no se guardaron los datos ";
    }

?>