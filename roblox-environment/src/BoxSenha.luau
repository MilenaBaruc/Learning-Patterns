local player = game.Players.LocalPlayer
local frame = script.Parent.Parent
local botao = script.Parent
local caixaTexto = frame:WaitForChild("TextBox")


local SENHA_CORRETA = "TCC2MB" 
local MENSAGEM_ERRO = "Senha incorreta! Ambiente restrito para pesquisa acadêmica."


if player.Character then
	player.Character:WaitForChild("Humanoid").WalkSpeed = 0
end

botao.MouseButton1Click:Connect(function()
	local senhaDigitada = caixaTexto.Text

	if senhaDigitada == SENHA_CORRETA then
		
		if player.Character and player.Character:FindFirstChild("Humanoid") then
			player.Character.Humanoid.WalkSpeed = 16 
		end
		frame.Parent:Destroy() 
		print("Acesso liberado!")
	else
		
		player:Kick(MENSAGEM_ERRO)
	end
end)