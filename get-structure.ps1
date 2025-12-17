# PowerShell script to get project structure
$basePath = Get-Location
$outputFile = "$basePath\PROJECT_STRUCTURE.txt"

function Get-FolderTree {
    param(
        [string]$Path,
        [string]$Indent = "",
        [int]$Depth = 0,
        [int]$MaxDepth = 5
    )
    
    if ($Depth -gt $MaxDepth) { return }
    
    $items = Get-ChildItem -Path $Path | Sort-Object Name
    
    foreach ($item in $items) {
        # Skip node_modules and hidden folders
        if ($item.Name -eq "node_modules" -or $item.Name.StartsWith(".")) {
            continue
        }
        
        $connector = if ($item -eq $items[-1]) { "└── " } else { "├── " }
        "$Indent$connector$($item.Name)" | Out-File -FilePath $outputFile -Append
        
        if ($item.PSIsContainer) {
            $newIndent = $Indent + $(if ($item -eq $items[-1]) { "    " } else { "│   " })
            Get-FolderTree -Path $item.FullName -Indent $newIndent -Depth ($Depth + 1) -MaxDepth $MaxDepth
        }
    }
}

# Clear output file
"" | Out-File -FilePath $outputFile

# Write header
"EUROBUDGET PROJECT STRUCTURE" | Out-File -FilePath $outputFile -Append
"Generated: $(Get-Date)" | Out-File -FilePath $outputFile -Append
"========================================" | Out-File -FilePath $outputFile -Append

# Generate structure
Get-FolderTree -Path $basePath

Write-Host "✅ Structure saved to: $outputFile" -ForegroundColor Green

# Show file count
$tsFiles = (Get-ChildItem -Recurse -Filter *.ts* -Exclude node_modules).Count
$jsFiles = (Get-ChildItem -Recurse -Filter *.js -Exclude node_modules).Count
$cssFiles = (Get-ChildItem -Recurse -Filter *.css -Exclude node_modules).Count
$totalFiles = (Get-ChildItem -Recurse -File -Exclude node_modules).Count

Write-Host "`n📊 FILE STATISTICS:" -ForegroundColor Cyan
Write-Host "TypeScript/TSX files: $tsFiles"
Write-Host "JavaScript files: $jsFiles"
Write-Host "CSS files: $cssFiles"
Write-Host "Total files: $totalFiles"