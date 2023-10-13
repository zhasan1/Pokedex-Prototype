let pokemonRepository = (function () {
  let pokemonList = [];

  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=200";

  function showModal(title, text1, text2, text3, img1, img2) {
    const body = `<img src=${img1}> <img src=${img2}> <br> ${text1} <br> ${text2} <br> ${text3}`; /*string template*/
    $(".modal-body").html(body);
    $(".modal-title").html(title);
  }

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function main(pokemon) {
    
    loadDetails(pokemon).then(function () {  
      let mainList = document.querySelector(".pokemon-list");

      let listItem = document.createElement("li");

      let button = document.createElement("button");
      let span = document.createElement("span");
      let imageElement = document.createElement("img");

      button.classList.add("btn", "btn-primary", "btn-lg");
      button.innerText = pokemon.name;
      button.setAttribute("data-toggle", "modal");
      button.setAttribute("data-target", "#exampleModal");
  
      imageElement.setAttribute("src", pokemon.imageUrl1);
      imageElement.setAttribute("alt", "Pokemon Image");
      span.append(imageElement);

      button.appendChild(span);
      listItem.appendChild(button); /*adds button to listItem*/
      mainList.append(listItem);

      button.addEventListener("click", function () {
        showDetails(pokemon);
      });
    });
  } // main

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        console.log(json);
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (details) {
        item.imageUrl1 = details.sprites.front_default;
        item.imageUrl2 = details.sprites.back_default;
        item.height = details.height;
        item.types = details.types;
        item.abilities = details.abilities;
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(
        pokemon.name,
        pokemon.height,
        pokemon.types.map((x) => x.type.name),
        pokemon.abilities.map((x) => x.ability.name),
        pokemon.imageUrl1,
        pokemon.imageUrl2,
      );
    });
  }

  return {
    showModal: showModal,
    add: add,
    getAll: getAll,
    main: main,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    filterList: filterList,
  }; //return
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.main(pokemon);
  });
});


// function getHeight(pokemon){
  //   if (pokemon.height > 0  && pokemon.height < 5){
  //     return "Height: " + pokemon.height + "- that is small!"  + "<br>";
  //   }else if (pokemon.height === 5 && pokemon.height < 7){
  //     return "Height: " + pokemon.height + "- that is average "  + "<br>";
  //   }else if (pokemon.height > 7){
  //     return "Height: " + pokemon.height + "- WOW! that is BIG"  + "<br>";
  //   }else
  //     return "Undefined";
  // }

  // function getType(pokemon) {
  //   if (typeof(pokemon.type) === 'string') {
  //      return "Type: "+pokemon.type;
  //    }
  //    else {
  //      let str = ''; 
  //      for (let i = 0; i < pokemon.type.length; i++){
  //        str += " Types: " + pokemon.type[i] + ", "
  //      }
  //     return str
  //    }
  //   }


//     function loadList(){
//     return fetch(apiUrl).then(function(response){
//       return response.json();
//     }).then(function(json){
//       json.results.forEach(function(item){
//         let pokemon = {
//           name: item.name,
//           detailsUrl: item.url
//         };
//         pokemonRepository.add(pokemon);
//         // console.log(pokemon);
//       });
//     }).catch(function(e){
//       console.error(e);
//     })
//   }
  
//   return {
//     add: add,
//     getAll: getAll,
//     addListItem: addListItem,
//     loadList: loadList
//   };

// })();

 // modalContainer.innerHTML = " "; /*clears inner HTML format for modal-container ID*/
    // let modal = document.createElement("div"); /*creates div element in index line 40*/
    // modal.classList.add("modal"); /*adds the class modal to div tag*/
    
    // let closeButtonElement = document.createElement("button"); /*creates button element in index line 41*/
    // closeButtonElement.classList.add("modal-close"); /*adds class to button index line 41*/
    // closeButtonElement.innerText = "Close"; /*text inside button says Close*/
    // closeButtonElement.addEventListener("click" , hideModal); /*adds eventListener for click action to execute hideModal function*/

    // let titleElement = document.createElement("h1"); /*create h1 tag index line 42*/
    // titleElement.innerText = title; /*inner text says name of pokemon*/

    // let contentElement1 = document.createElement("p"); /*creates p tag index line 43*/
    // contentElement1.innerText = "Height: " + text1; /*inner text shows height of pokemon*/
    // contentElement1.classList.add("height-stat");


    // let contentElement2 = document.createElement("p");
    // contentElement2.innerText = "Types: "+ text2;
    // contentElement2.classList.add("type-stat");

    // let contentElement3 = document.createElement("p");
    // contentElement3.innerText = "Moves: "+ text3;
    // contentElement3.classList.add("move-stat");

    // let imageElement = document.createElement("img"); /*creates img tag index line 44*/
    // // imageElement.src = "https://pokeapi.co/api/v2/pokemon/?limit=50";
    // imageElement.setAttribute ("src" , img); /*adds src attribute for a source for the image*/
    // imageElement.setAttribute ( "width" , "304"); /*designates width for image*/
    // imageElement.setAttribute ("height" , "228"); /*designates height for image*/
    // imageElement.setAttribute ("alt" , "Pokemon image"); /*adds alt attribute to image lag*/
    
    // modal.appendChild(closeButtonElement);
    // modal.appendChild(titleElement);
    // modal.appendChild(contentElement1);
    // modal.appendChild(contentElement2);
    // modal.appendChild(contentElement3);
    // modal.appendChild(imageElement);
    // modalContainer.appendChild(modal);

    // modalContainer.classList.add("is-visible"); /*assigns class is-visible to modal-container index line 40*/


    // function hideModal(){ /*function to close the info modal*/
  //   modalContainer.classList.remove("is-visible"); /*removes class is-visible to close modal when eventlistener is triggered*/
  // }

  // window.addEventListener("keydown" , (e) => { /*function to close info modal using escape button*/
  //   if (e.key === "Escape" && modalContainer.classList.contains('is-visible')){ /*if escape button is pushed and if the modal class is-visible then close the box*/
  //     hideModal(); 
  //   }
  // });

  // modalContainer.addEventListener ("click" , (e) => { /*clicking outside box closes it*/
  //   let target = e.target;
  //   if (target === modalContainer){
  //     hideModal();
  //   }
  // });



