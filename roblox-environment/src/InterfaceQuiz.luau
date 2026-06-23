local frame = script.Parent:WaitForChild("Frame")
local botaoFechar = frame:WaitForChild("BotaoFechar")
local textBox = frame:WaitForChild("TextBox")

textBox.Text = "https://learningpatternsquiz-grasp-learningpatterns-grasp.vercel.app/"

botaoFechar.MouseButton1Click:Connect(function()
	frame.Visible = false
end)