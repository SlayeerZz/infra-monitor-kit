# run-tests.ps1 - Ejecuta las pruebas con cobertura y muestra un resumen legible. 

# Uso (desde la raiz del proyecto): .\run-tests.ps1 

  

Write-Host "== Ejecutando pruebas con cobertura ==" -ForegroundColor Cyan 

npx jest --coverage --json --outputFile=test-results.json 2>&1 | Out-Null 

$jestExit = $LASTEXITCODE 

  

if (-not (Test-Path test-results.json)) { 

   Write-Host "No se genero test-results.json. Revisa que 'npm install' haya funcionado." -ForegroundColor Red 

   exit 2 

} 

  

$res = Get-Content test-results.json -Raw | ConvertFrom-Json 

Write-Host "" 

Write-Host "== Resultado de las pruebas ==" -ForegroundColor Cyan 

Write-Host ("Total: {0} | Pasan: {1} | Fallan: {2}" -f $res.numTotalTests, $res.numPassedTests, $res.numFailedTests) 

  

foreach ($suite in $res.testResults) { 

   foreach ($t in $suite.assertionResults) { 

       if ($t.status -eq 'failed') { 

           Write-Host (" FALLA: {0}" -f $t.fullName) -ForegroundColor Red 

       } 

   } 

} 

  

Write-Host "" 

Write-Host "== Cobertura ==" -ForegroundColor Cyan 

$sumFile = "coverage/coverage-summary.json" 

if (Test-Path $sumFile) { 

   $cov = Get-Content $sumFile -Raw | ConvertFrom-Json 

   $t = $cov.total 

   Write-Host ("Total: sentencias {0}% | ramas {1}% | funciones {2}% | lineas {3}%" -f $t.statements.pct, $t.branches.pct, $t.functions.pct, $t.lines.pct) 

   Write-Host "" 

   Write-Host "Archivos con cobertura de lineas inferior al 50%:" -ForegroundColor Yellow 

   foreach ($p in $cov.PSObject.Properties) { 

       if ($p.Name -ne 'total' -and $p.Value.lines.pct -lt 50) { 

           $name = Split-Path $p.Name -Leaf 

           Write-Host (" {0,-22} {1}%" -f $name, $p.Value.lines.pct) 

       } 

   } 

} else { 

   Write-Host "No se encontro $sumFile" -ForegroundColor Red 

} 

  

Write-Host "" 

Write-Host "Reporte HTML: coverage/lcov-report/index.html" 

exit $jestExit 