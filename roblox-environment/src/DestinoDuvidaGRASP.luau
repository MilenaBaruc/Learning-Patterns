local blocoToque = script.Parent

local function aoTocar(objetoTocou)
	local personagem = objetoTocou.Parent
	local humanoide = personagem:FindFirstChildOfClass("Humanoid")
	local rootPart = personagem:FindFirstChild("HumanoidRootPart")

	if humanoide and rootPart then
		local casa2 = game.Workspace:FindFirstChild("Casa2")
		local chaoCasa2 = casa2 and casa2:FindFirstChild("ChãoCasa2")
		local destino = chaoCasa2 and chaoCasa2:FindFirstChild("DestinoSala2")

		if destino then
			rootPart.CFrame = destino.CFrame + Vector3.new(0, 3, 0)
			print("Sucesso: Teletransportado para a Sala 2!")
		else
			warn("Erro: Nao encontrei o caminho para o DestinoSala2.")
		end
	end
end

blocoToque.Touched:Connect(aoTocar)