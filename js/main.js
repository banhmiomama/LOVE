


const clientID = '6e3e1748bacf91d';
const albumID = 'jgv3Zpc';
const albumUrl = "https://api.imgur.com/3/album/" + albumID + "/images";
const container = document.getElementById("container");


async function getData(url = "") {
    const rep = await fetch(url, {
        method: "GET",
        headers: {
            'Authorization': 'Client-ID 6e3e1748bacf91d'
        }
    })
    return rep.json();
}

function getDataImgur() {
    axios.get(albumUrl, {
        headers: {
            'Authorization': 'Client-ID '+ clientID
        }
    }).then(function (res) {
        console.log(res.data.data)
        renderDataImgur(res.data.data);
    }).catch(function (err) {
        console.log(err)
    })
}

function renderDataImgur(data){
    if(container != null){
        let string = data.map((item,value) =>
         {
            return `
            <a href="${ item.link }" data-lightbox="homePortfolio" class="${ getClassImage(item.width,item.height)}">
                <img src="${ item.link  }"/>
            </a>
            `
         }).join('');
         container.innerHTML = string;
         lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
          })
    }
}
function getClassImage(width = 0,height = 0){
    let result = '';
    if(width < 720){

    }
    else if(width >= 720 && width < 1920){
        result = "vertical";
    }
    else if(width == height){
        result = 'avatar';
    }
    else if(width >= 1920){
        result = 'horizontal';
    }
    return result;
}