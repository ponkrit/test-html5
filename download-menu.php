<?php
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename=food-menu.pdf');
readfile('assets/pdf/food-menu.pdf');
exit;