; Create a folder named "InfoM.website.Folder"
FileCreateDir, %A_Desktop%\InfoM.website.Folder

; Loop through all files in the Desktop directory
Loop, %A_Desktop%\*.*, 0
{
  ; Check if the current file contains "InfoM" in its name
  If InStr(A_LoopFileName, "InfoM")
  {
    ; If so, move the file to the "InfoM.website.Folder" directory
    FileMove, %A_LoopFileFullPath%, %A_Desktop%\InfoM.website.Folder\%A_LoopFileName%
  }
}


