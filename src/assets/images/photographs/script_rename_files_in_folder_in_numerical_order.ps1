# Set the folder path where your files are located
$folderPath = "D:\FE\portofoliu-v1\src\assets\images\photographs\selection_2"

# Get a list of all files in the folder
$files = Get-ChildItem $folderPath | Where-Object { $_.PSIsContainer -eq $false }

# Initialize a counter
$counter = 1

# Iterate through the files and rename them
foreach ($file in $files) {
    $newName = "edited_$counter" + $file.Extension
    $newPath = Join-Path -Path $file.DirectoryName -ChildPath $newName
    Rename-Item -Path $file.FullName -NewName $newName
    $counter++
}
