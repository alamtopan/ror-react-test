require 'json'

class Recipe
  attr_accessor :for, :clear
  
  def initialize
    @file_store = 'data.json'
    @recipes = JSON.parse(File.read('data.json')) rescue []
  end

  def recipe name
    @name = name
    new_recipe = {name: name, ingredients: [], method_steps: []} rescue nil
    @recipes << new_recipe
  end

  def ingredient ingredient
    @recipe = getfind(@name)
    @recipe[:ingredients].push(ingredient)
  end

  def step step
    @recipe = getfind(@name)
    @recipe[:method_steps].push(step)
  end

  def add
    update_recipes
  end

  def getfind name
    @recipe = @recipes.select{|data| data[:name] == name}[0] rescue {}
  end

  def update_recipes
    File.open("data.json","w") do |f|
      f.write(@recipes.to_json)
    end
  end

  def self.for(name)
    recipe = JSON.parse(File.read('data.json')).select{|data| data['name'] == name}[0] rescue nil
    @recipe = OpenStruct.new(name: recipe['name'], ingredients: recipe['ingredients'], method_steps: recipe['method_steps'])
  end

  def self.clear
    File.open('data.json', 'w') {}
  end
end