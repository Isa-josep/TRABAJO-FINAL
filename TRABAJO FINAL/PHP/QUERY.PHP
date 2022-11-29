<?php
    include("connect.php");
    echo("ERES GRANDE :D");
    $query = "SELECT * FROM AUTOS"; 
    $T=mysqli_query($conexion,$query);  
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title>EXAMEN</title>
</head>
<body style="background-color:rgb(33, 231, 254);">
    <h1>QUERYS</h1>
    
    <?php 
    echo "<table border='1'>
            <tr>
                <th class='space'>MARCA</th>
                <th class='space'>MODELO</th>
                <th class='space'>COLOR</th>
                <th class='space'>TRANSMISION</th>
                <th class='space'>NUMERO_DE_CILINDROS</th>
                <th class='space'>KILOMETRAJE</th>

            </tr>" ;  
        while($row = mysqli_fetch_array($T)){
            echo "<tr>
            
            <td class='space'>{$row['MARCA']}</td>
            <td class='space'>{$row['MODELO']}</td>
            <td class='space'>{$row['COLOR']}</td>
            <td class='space'>{$row['TRANSMISION']}</td>
            <td class='space'>{$row['NUMERO_DE_CILINDROS']}</td>
            <td class='space'>{$row['KILOMETRAJE']}</td>
        
	
						</tr>";
    }
        echo "</table>" ;            
    ?>   
</body>
</html>