const id = ID => document.getElementById(ID) , $ = selector => document.querySelector(selector)  , $$ = selector => document.querySelectorAll(selector)
const grupos =  [

    {'nombre': 'valeria guadalupe', 'apellido_p': 'baeza', 'Apellido_materno': 'alvarez', 'Matricula': '20416070200085', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602A'},
    {'nombre': 'rubi esmeralda', 'apellido_p': 'bedolla', 'Apellido_materno': 'silva', 'Matricula': '20416070200137', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602A'},
    {'nombre': 'aislin arely', 'apellido_p': 'berber', 'Apellido_materno': 'mejia', 'Matricula': '20416070200019', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602A'},
    {'nombre': 'edgar giovanni', 'apellido_p': 'calderon', 'Apellido_materno': 'argote', 'Matricula': '20416070200076', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'maria valeria', 'apellido_p': 'calderon', 'Apellido_materno': 'davalos', 'Matricula': '20416070200036', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'cristian eduardo', 'apellido_p': 'castillo', 'Apellido_materno': 'barriga', 'Matricula': '20416070200089', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'galilea', 'apellido_p': 'chavez', 'Apellido_materno': 'hernandez', 'Matricula': '20416070200016', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'jesus', 'apellido_p': 'contreras', 'Apellido_materno': 'hernandez', 'Matricula': '20416070200105', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'consuelo rubi', 'apellido_p': 'cornejo', 'Apellido_materno': 'gomez', 'Matricula': '20416070200073', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'natalia maria', 'apellido_p': 'esquivel', 'Apellido_materno': 'zavala', 'Matricula': '20416070200059', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'nayma karol', 'apellido_p': 'fuentes', 'Apellido_materno': 'garcia', 'Matricula': '20416070200120', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'vanesa isabel', 'apellido_p': 'garcilazo', 'Apellido_materno': 'juan de dios', 'Matricula': '20416070200040', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'alan eduardo', 'apellido_p': 'garibay', 'Apellido_materno': 'gomez', 'Matricula': '20416070200142', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'joanna itzel', 'apellido_p': 'lara', 'Apellido_materno': 'ponce', 'Matricula': '20416070200143', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'joshua ariel', 'apellido_p': 'mejia', 'Apellido_materno': 'garcia', 'Matricula': '20416070200026', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'jesus gabriel', 'apellido_p': 'negrete', 'Apellido_materno': 'reyes', 'Matricula': '20416070200117', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'dulce yanet', 'apellido_p': 'piñon', 'Apellido_materno': 'rodriguez', 'Matricula': '20416070200107', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'desteny cristal', 'apellido_p': 'ramirez', 'Apellido_materno': 'aguilar', 'Matricula': '20416070200079', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'jacqueline', 'apellido_p': 'rodriguez', 'Apellido_materno': 'bribiesca', 'Matricula': '20416070200045', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'karla daniela', 'apellido_p': 'rodriguez', 'Apellido_materno': 'garcilazo', 'Matricula': '20416070200014', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'alondra trinidad', 'apellido_p': 'salinas', 'Apellido_materno': 'aviles', 'Matricula': '20416070200113', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'evelin alejandra', 'apellido_p': 'sanchez', 'Apellido_materno': 'mondragon', 'Matricula': '20416070200044', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'nayomi rubi', 'apellido_p': 'serna', 'Apellido_materno': 'madrigal', 'Matricula': '20416070200066', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'estefania', 'apellido_p': 'solis', 'Apellido_materno': 'cendejas', 'Matricula': '20416070200248', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'alondra', 'apellido_p': 'vallejo', 'Apellido_materno': 'paredes', 'Matricula': '20416070200201', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': 'fatima yanet', 'apellido_p': 'velazquez ', 'Apellido_materno': 'corza', 'Matricula': '20416070200119', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    {'nombre': ' luis fernando', 'apellido_p': 'vilches', 'Apellido_materno': 'pedraza', 'Matricula': '20416075610054', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602a'},
    
    {'nombre': 'higinio renato', 'apellido_p': 'arias', 'Apellido_materno': 'ezquivel', 'Matricula': '19416070200373', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'luis enrique', 'apellido_p': 'becerril', 'Apellido_materno': 'delgado', 'Matricula': '20416070200127', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'sarahi', 'apellido_p': 'cardenas', 'Apellido_materno': 'alonso', 'Matricula': '20416070200098', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'maria fernanda', 'apellido_p': 'castelan', 'Apellido_materno': 'bucio', 'Matricula': '20416070200205', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'rodrigo vidal', 'apellido_p': 'chagolla', 'Apellido_materno': 'campos', 'Matricula': '19416070200378', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'oliver alexander', 'apellido_p': 'cornejo', 'Apellido_materno': 'gomez', 'Matricula': '20416070200125', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'maria guadalupe', 'apellido_p': 'estrada', 'Apellido_materno': 'tulais', 'Matricula': '20416070200051', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'carolina esperanza', 'apellido_p': 'francisco', 'Apellido_materno': 'moreno', 'Matricula': '19416070200324', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'behtzy julissa', 'apellido_p': 'galvan', 'Apellido_materno': 'martinez', 'Matricula': '20416070200123', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'alisson fernanda', 'apellido_p': 'ixta', 'Apellido_materno': 'vargas', 'Matricula': '20416070040356', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'mariana ', 'apellido_p': 'manzo', 'Apellido_materno': 'mendoza', 'Matricula': '20416070200039', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'diana guadalupe', 'apellido_p': 'mejia', 'Apellido_materno': 'rivas', 'Matricula': '20416070200091', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'agustin humberto', 'apellido_p': 'miranda', 'Apellido_materno': 'berber', 'Matricula': '20416070200148', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'daniela yamile', 'apellido_p': 'pacheco', 'Apellido_materno': 'rodriguez', 'Matricula': '20416070200058', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'williams eduardo', 'apellido_p': 'peña', 'Apellido_materno': 'torres', 'Matricula': '19416070200398', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'jade ', 'apellido_p': 'plancarte', 'Apellido_materno': 'piña', 'Matricula': '20416070200046', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'alexa michelle', 'apellido_p': 'ramírez', 'Apellido_materno': 'madrigal', 'Matricula': '19416070200306', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'perla jaret', 'apellido_p': 'raya', 'Apellido_materno': 'armas', 'Matricula': '20416070200145', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'cristian adan', 'apellido_p': 'rodriguez', 'Apellido_materno': 'corza', 'Matricula': '20416070200032', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'nayeli rubi', 'apellido_p': 'ruiz', 'Apellido_materno': 'aguirre', 'Matricula': '20416070200025', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'juan pablo', 'apellido_p': 'salinas', 'Apellido_materno': 'cristan', 'Matricula': '20416070200047', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'kenia rubi', 'apellido_p': 'sanchez', 'Apellido_materno': 'hernandez', 'Matricula': '20416070200128', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'araceli', 'apellido_p': 'sanchez', 'Apellido_materno': 'reyes', 'Matricula': '20416070200124', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'leonardo', 'apellido_p': 'vargas', 'Apellido_materno': 'corona', 'Matricula': '20416070200049', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    {'nombre': 'luis angel', 'apellido_p': 'zalapa', 'Apellido_materno': 'villegas', 'Matricula': '20416070200158', 'Bachillerato': ' BIOTECNOLOGÍA', 'Grupo': '602B'},
    
    {'nombre': 'jashua zeth', 'apellido_p': 'aguilar ', 'Apellido_materno': 'chavez', 'Matricula': '20416070200247', 'Bachillerato': ' PGA', 'Grupo': '622A'},
    {'nombre': 'maritza alejandra', 'apellido_p': 'barriga', 'Apellido_materno': "", 'Matricula': '20416070200101', 'Bachillerato': ' PGA', 'Grupo': '622A'},
    {'nombre': 'edith michelle', 'apellido_p': 'castro', 'Apellido_materno': 'gonzalez', 'Matricula': '20416070200057', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'adriana', 'apellido_p': 'cerda', 'Apellido_materno': 'ramirez', 'Matricula': '20416070200209', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'mariela', 'apellido_p': 'colima', 'Apellido_materno': 'osornio', 'Matricula': '20416070200200', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'jenifer lizeth', 'apellido_p': 'gonzalez', 'Apellido_materno': 'andrade', 'Matricula': '20416070200071', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'flor lizbeth', 'apellido_p': 'guadalupe', 'Apellido_materno': 'rosas', 'Matricula': '20416070200239', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'brandon', 'apellido_p': 'lopez', 'Apellido_materno': 'diaz', 'Matricula': '20416070200110', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'estrella esperanza', 'apellido_p': 'luna', 'Apellido_materno': 'silva', 'Matricula': '20416070200067', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'maría esperanza', 'apellido_p': 'martínez', 'Apellido_materno': 'aguilar', 'Matricula': '19416070200296', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'nydelyn mitzy', 'apellido_p': 'morales', 'Apellido_materno': 'hernandez', 'Matricula': '20416070200215', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'fatima paulina', 'apellido_p': 'ortega', 'Apellido_materno': 'lopez', 'Matricula': '20416070200202', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'luz cristal', 'apellido_p': 'rocha', 'Apellido_materno': 'zamudio', 'Matricula': '20416070200106', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'justin alberto', 'apellido_p': 'servin', 'Apellido_materno': 'calderon', 'Matricula': '20416070200015', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'hannia', 'apellido_p': 'sotelo', 'Apellido_materno': 'rosiles', 'Matricula': '19416070200304', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'jose isaac', 'apellido_p': 'tellez', 'Apellido_materno': 'maldonado', 'Matricula': '20416070200237', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'jose eduardo', 'apellido_p': 'valdovinos', 'Apellido_materno': 'contreras', 'Matricula': '20416070200203', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'alexa lizeth', 'apellido_p': 'vargas', 'Apellido_materno': 'mercado', 'Matricula': '20416070200130', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'ángel jesús', 'apellido_p': 'villalobos', 'Apellido_materno': 'leon', 'Matricula': '19416070200370', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    {'nombre': 'paulina ', 'apellido_p': 'villaseñor', 'Apellido_materno': 'barajas', 'Matricula': '20416070200206', 'Bachillerato': ' PGA', 'Grupo': '622a'},
    
    {'nombre': 'jennifer', 'apellido_p': 'aguilar', 'Apellido_materno': 'ayala', 'Matricula': '20416070200037', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'jose domingo', 'apellido_p': 'almonte', 'Apellido_materno': 'magaña', 'Matricula': '20416070200226', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'kimberli lizbeth', 'apellido_p': 'cano', 'Apellido_materno': 'gomez', 'Matricula': '19416070200432', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'fatima yuritzi', 'apellido_p': 'cerda', 'Apellido_materno': 'ortiz', 'Matricula': '20416070200053', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'valeria belinda', 'apellido_p': 'correa', 'Apellido_materno': 'aguiñiga', 'Matricula': '20416070200216', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'christian anhel', 'apellido_p': 'cortes', 'Apellido_materno': 'perez', 'Matricula': '20416070200230', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'edwin', 'apellido_p': 'garcia', 'Apellido_materno': 'jaramillo', 'Matricula': '20416070200099', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'vanessa', 'apellido_p': 'guzman', 'Apellido_materno': 'hernandez', 'Matricula': '20416070200246', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'maria fernanda ', 'apellido_p': 'medina', 'Apellido_materno': 'avalos', 'Matricula': '20416070200018', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'fatima rubi', 'apellido_p': 'nambo', 'Apellido_materno': 'madrid', 'Matricula': '20416070200038', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'daniel antonio', 'apellido_p': 'orozco', 'Apellido_materno': 'garcia', 'Matricula': '20416070200154', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'fatima estefania', 'apellido_p': 'paredes', 'Apellido_materno': 'fernandez', 'Matricula': '20416070200035', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'nancy alejandra', 'apellido_p': 'ramirez', 'Apellido_materno': 'bailon', 'Matricula': '20416070200061', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'andrea', 'apellido_p': 'renteria', 'Apellido_materno': 'contreras', 'Matricula': '20416070200220', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'josé luis', 'apellido_p': 'rivas', 'Apellido_materno': 'campos', 'Matricula': '19416070200377', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'elvira jocelyn', 'apellido_p': 'santiago', 'Apellido_materno': 'zuruta', 'Matricula': '20416070200219', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'jennifer', 'apellido_p': 'velazquez', 'Apellido_materno': 'salvador', 'Matricula': '19416070200439', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'karina', 'apellido_p': 'zamudio', 'Apellido_materno': 'meza', 'Matricula': '20416070200094', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    {'nombre': 'jorge david', 'apellido_p': 'zepeda', 'Apellido_materno': 'tinajero', 'Matricula': '19416070200481', 'Bachillerato': ' PGA', 'Grupo': '622B'},
    
    {'nombre': 'esperanza yasmin', 'apellido_p': 'acosta', 'Apellido_materno': 'colin', 'Matricula': '20416070200176', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630A'},
    {'nombre': 'angel uriel', 'apellido_p': 'baez', 'Apellido_materno': 'carlos', 'Matricula': '20416070200131', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630A'},
    {'nombre': 'tania lizbeth', 'apellido_p': 'cruz', 'Apellido_materno': 'torres', 'Matricula': '20416070200249', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'angela', 'apellido_p': 'delgado', 'Apellido_materno': 'serrano', 'Matricula': '20416070200196', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'valeria', 'apellido_p': 'delgado', 'Apellido_materno': 'serrano', 'Matricula': '20416070200197', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'alfonso eli', 'apellido_p': 'garcia', 'Apellido_materno': 'martinez', 'Matricula': '20416070200191', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'eliel', 'apellido_p': 'gonzález', 'Apellido_materno': 'soledad', 'Matricula': '19416070200355', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'raymundo ivan', 'apellido_p': 'guerrero', 'Apellido_materno': 'baez', 'Matricula': '20416070200133', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'francisco javier', 'apellido_p': 'gutierrez', 'Apellido_materno': 'chavez', 'Matricula': '18416070200121', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'bryan abdon', 'apellido_p': 'laurel', 'Apellido_materno': 'rodriguez', 'Matricula': '20416070200056', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'juan carlos', 'apellido_p': 'magaña', 'Apellido_materno': 'cruz', 'Matricula': '20416070200078', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'karol humberto', 'apellido_p': 'martinez', 'Apellido_materno': 'sosa', 'Matricula': '20416070200182', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'johanna', 'apellido_p': 'medina', 'Apellido_materno': 'corona', 'Matricula': '20416070200041', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'sergio enrique', 'apellido_p': 'mercado', 'Apellido_materno': 'mendoza', 'Matricula': '20416070200042', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'esmeralda', 'apellido_p': 'morales', 'Apellido_materno': 'baltazar', 'Matricula': '20416070200186', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'belinda monserrath', 'apellido_p': 'pantoja', 'Apellido_materno': 'cordoba', 'Matricula': '20416070200190', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'isauro jose', 'apellido_p': 'paredes', 'Apellido_materno': 'heredia', 'Matricula': '20416070200112', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'marco antonio', 'apellido_p': 'rodriguez', 'Apellido_materno': 'de la cruz', 'Matricula': '20416070200050', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'carlos joaquin', 'apellido_p': 'salinas', 'Apellido_materno': 'garcia', 'Matricula': '20416070200134', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'manuel', 'apellido_p': 'torres', 'Apellido_materno': 'vargas', 'Matricula': '19416070200274', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'alejandra giselle', 'apellido_p': 'valdovinos', 'Apellido_materno': 'alvarez', 'Matricula': '19416070200396', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'cesar', 'apellido_p': 'vazquez', 'Apellido_materno': 'torres', 'Matricula': '20416070200183', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    {'nombre': 'camila', 'apellido_p': 'zamora', 'Apellido_materno': 'perez', 'Matricula': '20416070200194', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630a'},
    
    {'nombre': 'samaria betzua', 'apellido_p': 'agustin', 'Apellido_materno': 'castañeda', 'Matricula': '20416070200157', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'miguel angel', 'apellido_p': 'alcantar', 'Apellido_materno': 'orozco', 'Matricula': '20416070200165', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'maria fernanda', 'apellido_p': 'bautista', 'Apellido_materno': 'colunga', 'Matricula': '18416070200276', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'daira camila', 'apellido_p': 'cisneros', 'Apellido_materno': 'fuerte', 'Matricula': '20416070200102', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'jennifer adriana', 'apellido_p': 'estrella', 'Apellido_materno': 'garcia', 'Matricula': '20416070200055', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'alondra janeth', 'apellido_p': 'francisco', 'Apellido_materno': 'moreno', 'Matricula': '20416070200168', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'miriam paola', 'apellido_p': 'gaona', 'Apellido_materno': 'calderon', 'Matricula': '19416070200002', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'brisia aleydis', 'apellido_p': 'garcia', 'Apellido_materno': 'garcia', 'Matricula': '20416070200161', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'david alessandro', 'apellido_p': 'gomez', 'Apellido_materno': 'marvan', 'Matricula': '20416070200020', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'maria monserrat', 'apellido_p': 'hernandez', 'Apellido_materno': 'carlos', 'Matricula': '20416070200155', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'angel abrham', 'apellido_p': 'hernandez', 'Apellido_materno': 'fernandez', 'Matricula': '20416070200092', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'christian tadeo', 'apellido_p': 'lemus', 'Apellido_materno': 'barrera', 'Matricula': '20416070200151', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'ricardo felipe', 'apellido_p': 'martinez', 'Apellido_materno': 'alejo', 'Matricula': '20416070200156', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'maría guadalupe', 'apellido_p': 'ramírez ', 'Apellido_materno': 'mercado', 'Matricula': '19416070200356', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'angel daniel', 'apellido_p': 'ramos', 'Apellido_materno': 'alcazar', 'Matricula': '20416070200171', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'adrian', 'apellido_p': 'rangel', 'Apellido_materno': "", 'Matricula': '20416070200153', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'evelyn estrella', 'apellido_p': 'raya', 'Apellido_materno': 'peña', 'Matricula': '20416070200072', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'ángel adrian', 'apellido_p': 'rueda', 'Apellido_materno': 'juarez', 'Matricula': '19416070200444', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'jesús sebastian', 'apellido_p': 'sánchez', 'Apellido_materno': 'corrales', 'Matricula': '19416070200443', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'yatziri', 'apellido_p': 'sanchez', 'Apellido_materno': 'silva', 'Matricula': '18416070200133', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'diana laura', 'apellido_p': 'suchiapa', 'Apellido_materno': 'huante', 'Matricula': '20416070200077', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'derek alfredo', 'apellido_p': 'tungui', 'Apellido_materno': 'medel', 'Matricula': '19416070200327', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'},
    {'nombre': 'jesus alberto', 'apellido_p': 'zapien', 'Apellido_materno': "", 'Matricula': '20416070200043', 'Bachillerato': ' PROGRAMACIÓN', 'Grupo': '630B'}
    
    ] ; 
    
    function buscarMatricula(matricula){
        const   bus = new  RegExp(matricula, "g") ; // Esto busca con  una experesion regular todo lo que se parece en el parametro  matricula 
        let resultados  ; 
        for (let  i in grupos){	
                if(bus.exec(grupos[i]["Matricula"])){
                        resultados =  grupos[i] ;
                }	
            
        }
        return resultados ; 
    }


    const  $form =  document.querySelector("#noControl")  ;  

    $form.addEventListener("keyup" , (e)=>{
        let  noCtrl  = $form .value ; 
        if(noCtrl.length == 14){
            let person  = buscarMatricula(noCtrl) ; 
            formDataValues(person)  ; 
            console.log(person) ;
        } 

    })

    
function formDataValues(datos){
	id('nombre').value = datos['nombre'].replace(/(^\w{1})|(\s+\w{1})/g, letra =>  letra.toUpperCase())   ;
	id('apellido_p').value = datos['apellido_p'].replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()) ; 
	id('apellido_m').value = datos['Apellido_materno'].replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()) ; 
	id('ES').value = datos['Bachillerato'].replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase()) ; 
    id('grupo').value = datos['Grupo'].toUpperCase()  ;
	
}