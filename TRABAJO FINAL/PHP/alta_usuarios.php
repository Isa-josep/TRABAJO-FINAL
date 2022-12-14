<?php
    include("connect.php");
    //echo "Se realizó exitósamene la conexión a la base de datos";
    $aa=$_POST['noControl'];
    $a=$_POST['nombre'];
    $b=$_POST['apellido_p'];
    $c=$_POST['apellido_m'];
    $d=$_POST['correo'];
    $e=$_POST['ES'];
    $f=$_POST['grupo'];
    $g=$_POST['bachi'];
    $h=$_POST['dos'];
    $regi="INSERT INTO ALUM (NO_CONTROL,NOMBRE,APELLIDO_PATERNO,APELLIDO_MATERNO,ESPECIALIDAD,GRUPO,BACHILLERATO,DOCENTE)
    VALUES('$aa',$a','$b','$c','$d','$e','$f','$g','$h')";
    $QUERY=mysqli_query($conexion,$regi);
    if($_POST["noControl"]){
        echo "DATOS GUARDADOS";
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