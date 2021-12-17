projects =[
    {
        name:"Ticket booking system",
        img: './img/cinema.jpg',
        live: 'https://cheonjp.github.io/cinema/',
        git:'https://github.com/cheonjp/cinema',
        skill:'HTML, SASS, Javascript',
        text:[
            'I used Photoshop skills to design movie posters.',
            "Built with Shadow DOM template, Array function (forEach, map), etc.",
            "Project was created in Dec 2021"
        ]
    },
    {
        name:"Restaurant Menu",
        img: './img/menu.jpg',
        live: 'https://elegant-williams-6c2744.netlify.app/',
        git:'https://github.com/cheonjp/react_menu',
        skill:'React.js, SASS',
        text:[
            'Skills used such as React Hook, template, filter, etc.',
            'Using the filter function, when buttons are clicked, menu changes to proper category.',
            "Project was created in Nov 2021"
        ]
    },
    {
        name:"Trip list",
        img: './img/react_list.jpg',
        live: 'https://priceless-noether-1a182c.netlify.app/',
        git:'https://github.com/cheonjp/react_travel_list',
        skill:'React.js, SASS',
        text:[
            'Skills used such as React Hook, template, Substring, etc.',
            'List of trip information shows up as clickable removal buttons in the list.',
            "Project was created in Nov 2021"
        ]
    },


];


(function(){
    const targetContainer = document.querySelector('.projectContainer')

    targetContainer.innerHTML = projects.map((project,index)=>{
        const {name,img,live,git,text,skill}=projects[index]
        let realText =''
        text.forEach((list)=>{
           realText += `
           <li>${list}</li>
           `
        })
        return(
            `
            <div class="background">
                    <div class="container">
                        <img src="${img}" alt="">
                        <div class="explainBox">
                            <h2>${name}</h2>
                            <p>Used skills : <span>${skill}</span></p>
                            <ul>
                            ${realText}
                            </ul>
                            <div class="btnBox">
                                <a target="_black" href="${live}">Live</a>
                                <a target="_black" href="${git}">Git</a>
                            </div>
                        </div>
                    </div>
                </div>
            `
            )
        
    })
    const listTexts = document.querySelectorAll('.listText')
    // listTexts.forEach(text =>{
    //     text.innerHTML = projects[0].text[0]
    // })
})();
