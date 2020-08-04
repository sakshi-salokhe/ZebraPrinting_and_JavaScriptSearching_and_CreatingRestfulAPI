const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();
    
    const filteredCharacters = chardata.filter((character) => {
        return (
            character.INNAMB.toLowerCase().includes(searchString) ||
            character.IBPAYID.toLowerCase().includes(searchString) ||
            character.IBADD1.toLowerCase().includes(searchString) ||
            character.IBCITY.toLowerCase().includes(searchString) ||
            character.IBSTE.toLowerCase().includes(searchString) ||
            character.IBZIP6.toLowerCase().includes(searchString) ||
            character.IBADDIN.toLowerCase().includes(searchString)
        );
    });

    //top 20 records display
    topfilteredCharacters = [];
    let i = 0;
    if (filteredCharacters.length > 20)
    {
        while(i < 20)
        {
           topfilteredCharacters[i] = filteredCharacters[i] 
            i += 1;
        }
        displayCharacters(topfilteredCharacters);
    }
    else
    {
        topfilteredCharacters = filteredCharacters;
        displayCharacters(filteredCharacters);
    }
    
    if(topfilteredCharacters.length == 1)
    {
        document.getElementById("submit").disabled = false;
    }
    else
    {
        document.getElementById("submit").disabled = true;
    }
});

const loadCharacters = async () => {
    try {
        //const res = await fetch('https://hp-api.herokuapp.com/api/characters');
        //const res = await fetch('http://dummy.restapiexample.com/api/v1/employees');
        const res = await fetch('http://localhost:3000')
        
        hpCharacters = await res.json();
        chardata = hpCharacters;
        
        //top 20 records display
        topchardata = [];
        let i = 0;
        if (chardata.length > 20)
        {
            while(i < 20)
            {
                topchardata[i] = chardata[i]
                i += 1;
            }
            displayCharacters(topchardata);
        }
        else
        {
            displayCharacters(chardata);
        }
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character" style="padding-left:40px;padding-top:15px;padding-bottom:15px;">
                <h4 style = "margin-top: 1px;">${character.INNAMB} (${character.IBPAYID})</h4>
                <p style = "margin-top: -17px;">${character.IBADD1}</p>
                <p style = "margin-top: -2px;">${character.IBCITY}, ${character.IBSTE} ${character.IBZIP6}</p>
                <p style = "margin-top: 11px;">${character.IBADDIN}</p>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
