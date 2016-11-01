// 1 HTML Source in HTML -> get sourceform into JS variable

// 2 Compile Template -> Template Function

// 3 Pass JSON Data to Template Function -> Final Rendered HTML

//get source HTML form DOM
const mockData = {
    pagination: {
        total_count: 37
    },
    data: [{
        id: "feqkVgjJpYtjy",
        url: "http://giphy.com/gifs/eyes-shocked-bird-feqkVgjJpYtjy",
        rating: "g",
        images: {
            original: {
                url: "http://media0.giphy.com/media/feqkVgjJpYtjy/giphy.gif"
            }
        }
    },{
        id: "FiGiRei2ICzzG",
        url: "http://giphy.com/gifs/funny-cat-FiGiRei2ICzzG",
        rating: "g",
        images: {
            original: {
                url: "http://media2.giphy.com/media/FiGiRei2ICzzG/giphy.gif"
            }
        }
    }]
};
//elements
const  gifTemplate = document.querySelector('#gif-template')
const gifs = document.querySelector('.gifs');

//templates
var gifTemplateFn = Handlebars.compile(gifTemplate.innerHTML);
gifs.innerHTML = gifTemplateFn(mockData);

//what else
