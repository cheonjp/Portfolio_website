projects =[
    {
        name:"Restaurant order system",
        img: './img/pizza.jpg',
        live: 'https://6502691be3184c7aa58f72d1--ubiquitous-mermaid-b2331e.netlify.app/',
        git:'https://github.com/cheonjp/pizza_client.git',
        git2:'https://github.com/cheonjp/pizza_api.git',
        skill:'HTML, SASS, React.js, Node.js, MongoDB',
        text:[
            'I used some graphic tool such as Photoshop, XD, and Illustrator .',
            "Built using, Vite(React) using many skills including Session Storage, JWT, etc",
            "Project was created in Sep 2023"
        ]
    },
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
];


(function(){
    const targetContainer = document.querySelector('.projectContainer')

    targetContainer.innerHTML = projects.map((project,index)=>{
        const {name,img,live,git,git2,text,skill}=project
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
                                <a target="_black" href="${git}">Client side git</a>
                                ${git2 ? `<a target="_black" href="${git2}">Backend side git</a>` : ""}
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
