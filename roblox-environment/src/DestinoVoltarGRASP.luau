local blocoToque = script.Parent 

local function aoTocarVoltar(objetoTocou)
	local personagem = objetoTocou.Parent
	local humanoide = personagem:FindFirstChildOfClass("Humanoid")
	local rootPart = personagem:FindFirstChild("HumanoidRootPart")

	if humanoide and rootPart then
		local lobby = game.Workspace:FindFirstChild("Lobby")
		local chaoLobby = lobby and lobby:FindFirstChild("Chão Lobby")
		local spawnCentral = chaoLobby and chaoLobby:FindFirstChild("SpawnLocation")

		if spawnCentral then
			rootPart.CFrame = spawnCentral.CFrame + Vector3.new(0, 3, 0)
			print("Sucesso: Retornou ao Hub Central pelo caminho direto!")
		else
			warn("Erro: Nao achei o caminho. Verifique se os nomes 'Lobby', 'Chão Lobby' e 'SpawnLocation' estao identicos no seu mapa!")
		end
	end
end

blocoToque.Touched:Connect(aoTocarVoltar)