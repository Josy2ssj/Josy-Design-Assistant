Set sh = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
base = fso.GetParentFolderName(WScript.ScriptFullName)
sh.CurrentDirectory = base
sh.Run Chr(34) & base & "\runtime\node.exe" & Chr(34) & " " & Chr(34) & base & "\src\server.js" & Chr(34), 0, False
