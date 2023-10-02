# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# Pseudo code:
# input: strings that represent beverages
# output: strings that contain the specified vowel
# process: creating a new method name: drinks, using the select() method to be sure that the output contains either 'o' or 't'. The include() method looks at each element in the array. 

def 
   drinks.select.includes(('o', 't') && ['coffee', 'tea', 'juice', 'water', 'soda water'])
end

p drinks.includes['o']
p drinks.includes['t']







# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# Pseudo code:
# input: hash
# output: an arry that alphabetizes all of the hashes
# process: from https://www.educative.io/answers/how-to-flatten-multi-dimensional-arrays-into-one-in-ruby: .flatten -  
# An array that is not one-dimensional can be flattened in Ruby using the flatten method. It recursively flattens the array and returns a new array that is one-dimensional(one dimensional equates to no arrays nested). ALso using the "sort_by" method to sort the elements in the array by the 1st index value of each element. Attempted to use the alphabetize method - probably not used correctly (so that the states are listed in alphabetical order)

class States
    def 
        us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
        
    end 
    puts alphabetize us_states
    p us_states.sort_by([1]).flatten


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# Pseudo code:
# process: listing out each of the pieces of data that need to be initialized, including the model, wheels, and current_speed

class Bike
    def initialize(:model, :wheels, :current_speed)
        @model = model
        @wheels = 2
        @current_speed = 0  

    end 

    bike_info = {model: 'The Trek bike', wheels: '2', current_speed: '0'}

    bike_info do |model, wheels, current_speed|
    p "#{model} has #{wheels} and is going #{current_speed} mph."

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# Pseudo code:

# process: defining the class name, defining each of the pedaling and braking limits, defining method for pedaling faster and braking

class Bike
    def
    pedal_faster = {my_bike.pedal_faster: '(10) => 10', my_bike.pedal_faster: '(18) => 28', my_bike.brake: '(5) => 23', my_bike.brake: '(25) => 0'}
    end 
