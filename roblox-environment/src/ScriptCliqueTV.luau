local Workspace = game:GetService("Workspace")
local jogadorLocal = game:GetService("Players").LocalPlayer

local telaTV = Workspace:FindFirstChild("TelaTV", true) 

if not telaTV then
	task.wait(1)
	telaTV = Workspace:FindFirstChild("TelaTV", true)
end

if telaTV then
	local clickDetector = telaTV:WaitForChild("ClickDetector")
	local screenGui = script.Parent
	local frame = screenGui:WaitForChild("Frame")

	clickDetector.MouseClick:Connect(function()
		frame.Visible = true
	end)
else
	warn("⚠️ TelaTV não foi encontrada no cenário. Verifique se o nome está exatamente 'TelaTV'")
end