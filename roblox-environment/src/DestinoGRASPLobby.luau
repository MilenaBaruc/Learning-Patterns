local blocoToque = script.Parent

local function aoTocar(objetoTocou)
	local personagem = objetoTocou.Parent
	local humanoide = personagem:FindFirstChildOfClass("Humanoid")
	local rootPart = personagem:FindFirstChild("HumanoidRootPart")

	if humanoide and rootPart then
		local casa1 = game.Workspace:FindFirstChild("Casa1")
		local chaoCasa1 = casa1 and casa1:FindFirstChild("ChãoCasa1")
		local destino = chaoCasa1 and chaoCasa1:FindFirstChild("DestinoSala1")

		if destino then
			rootPart.CFrame = destino.CFrame + Vector3.new(0, 3, 0)
			print("Sucesso: Teletransportado para a Sala 1!")
		else
			warn("Erro: Nao encontrei o caminho para o DestinoSala1.")
		end
	end
end

blocoToque.Touched:Connect(aoTocar)