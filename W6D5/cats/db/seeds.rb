# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
mimi = Cat.create!(birth_date: '2015/01/20', color: 'orange', name: 'Mimi', sex: 'F', description: 'She is the best cat.')
cooper = Cat.create!(birth_date: '2019/01/20', color: 'white', name: 'Cooper', sex: 'M', description: 'THIS ONE, ASSHOLE')
saki = Cat.create!(birth_date: '2018/12/05', color: 'black', name: 'Saki', sex: 'F', description: 'She like to open all the cabinets.')
dragon = Cat.create!(birth_date: '1200/01/05', color: 'brown', name: 'Fkcing Dragon', sex: 'M', description: 'A legend, Dragon Li')
