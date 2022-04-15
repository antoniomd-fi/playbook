const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   //1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
   console.log("Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
   explorers.forEach((element)=>console.log(element.name)) 

   //2.Imprime el stack de cada explorer, usa FOR EACH
   console.log("2.Imprime el stack de cada explorer, usa FOR EACH")
   explorers.forEach((element)=>console.log(element.stack)) 

   //3.Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
   console.log("3.Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
   const newlist=explorers.map(function(element){return element.stack})
   console.log(newlist)

   //4.Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
   console.log("4.Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)")
   const newList2 = explorers.filter((stack) => stack.stack.includes('js'))
   console.log(newList2)

   //5. Busca el primer explorer que sea de la CDMX, usa FIND
   console.log("5. Busca el primer explorer que sea de la CDMX, usa FIND")
   const ciudad = explorers.find((city)=>city.city === "CDMX")
   console.log(ciudad);

   //6. Obtén la suma de todos los exercises_completed, usa REDUCE
   console.log("6. Obtén la suma de todos los exercises_completed, usa REDUCE")
   const sum = explorers.reduce((acc,element)=>acc + element.exercises_completed,0)
   console.log(sum)

   //7.Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
   console.log("7.Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
   const validacion = explorers.some((element)=> element.missions.frontend.exercisesFinished===true)
   console.log(validacion)

   //.8Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
   console.log("8.Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
   const validacion2=explorers.every((element)=>element.missions.onboarding.isFinished===true)
   console.log(validacion2)